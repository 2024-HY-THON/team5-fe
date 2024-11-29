import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Community from './pages/Community';
import BottomNav from './components/Common/BottomNav';
import FriendList from './pages/Friend/FriendList';
import FriendRequest from './pages/Friend/FriendRequest';
import FriendSearch from './pages/Friend/FriendSearch';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/friend" element={<Outlet />}>
            <Route index element={<FriendList />} />
            <Route path="request" element={<FriendRequest />} />
            <Route path="search" element={<FriendSearch />} />
          </Route>
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
