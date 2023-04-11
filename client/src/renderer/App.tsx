import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header';
import Login from './components/Login';

function Hello() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <Login />
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
