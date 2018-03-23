import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavBar = props => (
  <StyledNav className="navbar">
    <figure>LOGO IMAGE</figure>
    <ul>
      <li className="user-info">
        <Link href="/profile">
          <img
            className="avatar"
            src="http://via.placeholder.com/40x40"
            alt="User avatar"
          />
          <span>Username</span>
        </Link>
      </li>
      <li>
        <Link href="/home">
          <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link href="/auth">
          <span>{props.loggedIn ? 'Logout' : 'Login'}</span>
        </Link>
      </li>
    </ul>
  </StyledNav>
);

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1f3d66;
  color: #c16e70;
  height: 3rem;
  padding: 0 1rem;

  .user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    width: 35%;
    justify-content: space-between;
  }

  li {
    &:hover {
      background: #ff3d80;
    }
  }
`;

export default NavBar;
