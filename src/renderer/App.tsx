import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Login from './components/Login';
import useDarkMode from './hooks/useDarkMode';

function Hello() {
  const [__, handleThemeSwitch] = useDarkMode();
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      
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
