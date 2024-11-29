import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Room from './pages/Room';
import RoomMain from './pages/Room/RoomMain';
import LogDetail from './pages/Room/LogDetail';
import LogUpdate from './pages/Room/LogUpdate';
import LogHistory from './pages/Room/LogHistory';
import MyRewards from './pages/Room/MyRewards';
import ShareReward from './pages/Room/ShareReward';
import Community from './pages/Community';
import BottomNav from './components/Common/BottomNav';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/room" element={<Room />}>
            <Route index element={<RoomMain />} />
            <Route path="detail" element={<LogDetail />} />
            <Route path="update" element={<LogUpdate />} />
            <Route path="history" element={<LogHistory />} />
            <Route path="rewards" element={<MyRewards />} />
            <Route path="shareReward" element={<ShareReward />} />
          </Route>
          <Route path="/community" element={<Community />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
