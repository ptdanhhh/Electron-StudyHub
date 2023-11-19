import Sidebar from './Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';

const PomodoroTimer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isBreak, setIsBreak] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (isActive && seconds === 0) {
      setIsActive(false);
      setIsBreak((prevIsBreak) => !prevIsBreak);
      setSeconds(isBreak ? 1500 : 300); // 5 minutes break, 25 minutes work
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, isBreak]);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setSeconds(1500);
  };
  const breakTimer = () => {
    setIsActive(false);
    setIsBreak(true);
    setSeconds(300);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="basis-full">
        <div className="flex items-center justify-center h-screen bg-zinc-50 dark:bg-slate-800">
          <div className="max-w-md w-full p-6 bg-white dark:bg-slate-700 text-stone-800 dark:text-neutral-200 rounded-md shadow-xl dark:shadow-xl">
            <h1 className="text-2xl font-bold mb-4">
              {isBreak ? 'Break Time' : 'Work Time'}
            </h1>
            <p className="text-4xl font-bold mb-6">{formatTime(seconds)}</p>
            <div className="flex space-x-4">
              <button
                className=" text-white px-4 py-2 rounded-md hover:bg-sky-70 bg-blue-500 shadow-lg shadow-blue-500/50"
                onClick={toggleTimer}
              >
                {isActive ? 'Pause' : 'Start'}
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={breakTimer}
              >
                Break
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
