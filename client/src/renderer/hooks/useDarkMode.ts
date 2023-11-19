import { useState, useEffect } from 'react';

const initTheme = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

const useDarkMode = (): any => {
  const [theme, setTheme] = useState(initTheme());

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return [theme, toggleThemeSwitch];
};

export default useDarkMode;
