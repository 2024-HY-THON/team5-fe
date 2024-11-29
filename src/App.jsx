import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Room from './pages/Room';
import Community from './pages/Community';
import BottomNav from './components/Common/BottomNav';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/room" element={<Room />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
