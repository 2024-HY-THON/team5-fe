import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import * as S from './styles/Common/common.style';
import Home from './pages/Home';
import Login from './pages/Login';
import Community from './pages/Community';
import FriendList from './pages/Friend/FriendList';
import FriendRequest from './pages/Friend/FriendRequest';
import FriendSearch from './pages/Friend/FriendSearch';

function App() {
  return (
    <Router>
      <div className="App">
        <S.CommonHeader />
        <S.CommonWrapper>
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
        </S.CommonWrapper>
      </div>
    </Router>
  );
}

export default App;
