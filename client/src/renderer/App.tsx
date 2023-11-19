import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoute/PrivateRoute';
import './App.css';
import './index.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import PomodoroTimer from './components/PomodoroTimer';

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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Sidebar />} path="/" />
          <Route element={<PomodoroTimer />} path="/timer" />
        </Route>

        <Route element={<Login />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
      </Routes>
    </Router>
  );
}
