import useDarkMode from 'renderer/hooks/useDarkMode';
import { MdDarkMode } from 'react-icons/md';

type Props = {};

function Header({}: Props) {
  const [__, handleThemeSwitch] = useDarkMode();
  return (
    <div className="flex justify-end bg-slate-200 dark:bg-gray-900">
      <div className="pr-2 pt-2">
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="focus:outline-none rounded-full px-3 py-3 mr-3 md:mr-0 text-white bg-sky-500 hover:bg-sky-600"
        >
          <MdDarkMode size={15} />
        </button>
      </div>
    </div>
  );
}

export default Header;
