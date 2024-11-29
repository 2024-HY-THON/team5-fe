import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Community from './pages/Community';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import AlarmSet from './pages/AlarmSet';
import SignUp from './pages/SignUp';
import BottomNav from './components/Common/BottomNav';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/alarmset" element={<AlarmSet />} />
            <Route path="/signup" element={<SignUp />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
