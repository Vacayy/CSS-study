import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// 글로벌 스타일 정의
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body {
    min-height: 100vh;
  }
`;

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

const Logo = styled.a`
  cursor: pointer;
  font-size: 32px;
  color: white;
  text-decoration: none;
  font-weight: 700;
`;

const Navbar = styled.nav`
  btn {
    position: relative;
    font-size: 1.1rem;
    color: white;
    font-weight: 500;
    text-decoration: none;
    margin-left: 40px;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 0;
      height: 2px;
      background: white;
      transition: 0.3s;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;

const HeaderUser = ({logout, backToUserHome}) => {
  return (
    <>
      <GlobalStyle />
      <HeaderStyled>
        <Logo onClick={()=>backToUserHome()}>Let's Note</Logo>
        <Navbar>
          <btn href="#">피드백 주기</btn>
          <btn href="#">회원정보 수정</btn>
          <btn onClick={logout}>로그아웃</btn>
        </Navbar>
      </HeaderStyled>
    </>
  );
}

export default HeaderUser;