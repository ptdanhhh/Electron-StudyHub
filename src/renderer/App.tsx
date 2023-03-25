import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Login from './components/Login';

const useDarkMode = (): any => {
  // create DarkMode Hook
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
}; // end Darkmode hook

function Hello() {
  const [__, handleThemeSwitch] = useDarkMode();
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <Login />
        <button type="button" onClick={handleThemeSwitch} className="dark:text-white">
          Dark Mode
        </button>
      </div>
  
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
