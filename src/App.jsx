import React from 'react';
import Home from './pages/Home';
import * as S from './styles/Common/common.style';

function App() {
  return (
    <div className="App">
      <S.CommonHeader />
      <S.CommonWrapper>
        <Home />
      </S.CommonWrapper>
    </div>
  );
}

export default App;
