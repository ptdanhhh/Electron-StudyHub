import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoute/PrivateRoute';
import './App.css';
import './index.css';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import PomodoroTimer from './components/PomodoroTimer';
import ChatAI from './components/ChatAI';
import Todolist from './components/Todo/Todolist';
import Notes from './components/Note/Notes';

function LoginPage() {
  return (
    <div className="">
      <Header />
      <Login />
    </div>
  );
}

function RegisterPage() {
  return (
    <div className="">
      <Header />
      <Register />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" />
          <Route element={<PomodoroTimer />} path="/timer" />
          <Route element={<ChatAI />} path="/chatai" />
          <Route element={<Todolist />} path="/todo" />
          <Route element={<Notes />} path="/note" />
        </Route>

        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
      </Routes>
    </Router>
  );
}
