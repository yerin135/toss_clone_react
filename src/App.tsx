import React from 'react';
import styled from '@emotion/styled';
import './reset.css';
import './index.css';
import './App.css';
import tosslogo from './assets/toss logo.png';

function App() {
  return (
    <Header>
      <Logo src={tosslogo}/>
      <Nav>
        <a href="https://toss.im/team">회사 소개</a>
        <a href="https://support.toss.im/">고객센터</a>
        <a href="https://support.toss.im/faq">자주 묻는 질문</a>
        <a href="https://toss.im/cert">공동인증서 관리</a>
        <a href="https://toss.im/career">채용</a>
        <a>KOR</a>
        <div>|</div>
        <a>ENG</a>
      </Nav>
    </Header>
  );
}

const Header = styled.nav`
  min-width: 1100px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.98rem;
  height: 3.5rem;
  padding: 0 4rem 0 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom: 0.5px solid rgb(223, 226, 229);

`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a{
      text-decoration: none;
      margin: 0.5rem;
      padding: 1rem;
      color: rgb(61, 71, 85);
      border: 1px solid transparent;
      border-radius: 0.7rem;
  }
  div {
    padding: 1.5rem;
    margin: 0 -1.75rem;
    color: rgb(160, 170, 180);
  }
  a:nth-of-type(6) {
    margin: 0 1rem 0 2.5rem;
  }
  a:nth-of-type(7) {
    margin-left: 1rem;
    color: rgb(160, 170, 180);
  }
  a:hover {
    background-color: rgb(240,241,243);
  }
`;

const Logo = styled.img`
  height: 35%;
  margin-right: min(20rem, 15%);
`;

// const 


export default App;
