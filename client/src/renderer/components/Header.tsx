import React from 'react';
import useDarkMode from 'renderer/hooks/useDarkMode';
import { MdDarkMode } from 'react-icons/md';

type Props = {};

function Header({}: Props) {
  const [__, handleThemeSwitch] = useDarkMode();
  return (
    <nav className="bg-white dark:bg-gray-900 border-gray-200 px-2 sm:px-2 py-2 rounded">
      <div className="container flex flex-wrap items-center justify-end mx-auto">
        <div className="flex md:order-2 pt-2  ">
          <button
            type="button"
            onClick={handleThemeSwitch}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3.5 py-3.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <MdDarkMode size={15} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
