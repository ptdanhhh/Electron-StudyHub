import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function LoginPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <Login />
    </div>
  );
}

function RegisterPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Register />
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="bg-black">
      <Dashboard />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} /> */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
