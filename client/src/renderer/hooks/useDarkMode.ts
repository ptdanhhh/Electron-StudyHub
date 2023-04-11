import { useState, useEffect } from 'react';

const useDarkMode = (): any => {
    const [theme, setTheme] = useState('light');
  
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