import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as S from './styles/Common/common.style';
import Home from './pages/Home';
import Login from './pages/Login';
import Community from './pages/Community';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <S.CommonHeader />
        <S.CommonWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </S.CommonWrapper>
      </div>
    </Router>
  );
}

export default App;
