import { Link } from 'react-router-dom';
type Props = {};

function Timer({}: Props) {
  return (
    <body className="bg-warm-black text-white font-bai-jamjuree">
      <header className="flex justify-between m-3">
        <span id="logo" className="">
          <a href="/">Task Timer</a>
        </span>
        <span id="sessionCount" className="">
          Session #1
        </span>

        <a
          className="flex items-center"
          target="_blank"
          href="https://github.com/delightedCrow/tailwindTimer"
        >
          <svg
            className="inline"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span className="pl-1">GitHub</span>
        </a>
      </header>

      <div id="clock" className="bg-deep-purple text-center pb-6">
        <div className="mx-auto relative">
          <div
            id="timer"
            className="filter drop-shadow text-7xl font-overpass-mono absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            0:00
          </div>
          <div className="w-full xs:w-3/4 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto">
            <svg viewBox="0 0 39 39" id="timerRing" fill="none" className="">
              <defs>
                <linearGradient id="timer-ring-gradient">
                  <stop offset="0%" stop-color="#FFB56B" />
                  <stop offset="30%" stop-color="#BC365D" />
                  <stop offset="100%" stop-color="#1F005C" />
                </linearGradient>
              </defs>
              <circle
                id="shadow-circle"
                className="filter drop-shadow"
                stroke="#2D2D2D"
                stroke-width="3px"
                cx="50%"
                cy="50%"
                r="15.9155"
              />
              <circle
                id="timer-circle"
                className="-rotate-90 origin-center"
                stroke="url(#timer-ring-gradient)"
                stroke-dasharray="0, 100"
                stroke-width="3px"
                stroke-linecap="round"
                cx="50%"
                cy="50%"
                r="15.9155"
              />
            </svg>
          </div>
        </div>
        <button
          type="button"
          id="startButton"
          className="bg-mid-gray px-16 py-5 mt-3 uppercase tracking-wider rounded-sm hover:bg-[#5d165d] active:bg-[#421042]"
        >
          Start
        </button>
      </div>

      <div id="options" className="container mx-auto">
        <div
          id="timerOptions"
          className="py-5 flex justify-center items-center text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-salmon feather feather-clock inline-block mr-4"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <input
            type="radio"
            name="timer-length"
            className="hidden"
            value="25"
            id="25"
            checked
          />
          <label
            className="w-24 py-2 inline-block bg-mid-gray cursor-pointer border-b-4 border-transparent hover:border-[#5d165d]"
            htmlFor="25"
          >
            25 MIN
          </label>
          <input
            type="radio"
            name="timer-length"
            className="hidden"
            value="20"
            id="20"
          />
          <label
            className="w-24 py-2 inline-block bg-mid-gray cursor-pointer border-b-4 border-transparent hover:border-[#5d165d]"
            htmlFor="20"
          >
            20 MIN
          </label>
          <input
            type="radio"
            name="timer-length"
            className="hidden"
            value="15"
            id="15"
          />
          <label
            className="w-24 py-2 inline-block bg-mid-gray cursor-pointer border-b-4 border-transparent hover:border-[#5d165d]"
            htmlFor="15"
          >
            15 MIN
          </label>
          <input
            type="radio"
            name="timer-length"
            className="hidden"
            value="10"
            id="10"
          />
          <label
            className="w-24 py-2 inline-block bg-mid-gray cursor-pointer border-b-4 border-transparent hover:border-[#5d165d]"
            htmlFor="10"
          >
            10 MIN
          </label>
        </div>
      </div>
      {/* <script src="./src/js/timer.js" type="module"></script> */}
    </body>
  );
}

export default Timer;
