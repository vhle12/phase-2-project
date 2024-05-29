import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(51, 51, 51, .7);
  padding: 10px 20px;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  width: 80%;
  max-width: 800px;
`;

export const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 10px 15px; 
  font-size: 18px;
  transition: background-color 0.3s;
  flex-grow: 0;
  text-align: center;
  border-radius: 15px;
  margin: 0 5px;
  &:hover {
    background-color: #555;
  }
  &.active {
    background-color: #555;
  }
`;