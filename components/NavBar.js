import React from 'react';
import styled from 'styled-components';

const NavBar = props => (
  <StyledNav>
    <figure>LOGO IMAGE</figure>
    <ul>
      <li className="user-info">
        <a>
          <img className="avatar" src="http://via.placeholder.com/40x40" />
          <span>Username</span>
        </a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>{props.loggedIn ? 'Logout' : 'Login'}</li>
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
