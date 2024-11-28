import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as S from './styles/Common/common.style';
import Home from './pages/Home';
import Login from './pages/Login';
import Community from './pages/Community';
import BottomNav from './components/Common/BottomNav';

function App() {
  return (
    <Router>
      <div>
        {/* <S.CommonHeader /> */}
        <S.CommonWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </S.CommonWrapper>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
