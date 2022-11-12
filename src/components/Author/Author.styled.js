import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0 12px;
  font-weight: 500;
  color: black;
  font-size: 18px;
  &:hover {
    color: pink;
  }
  &.active {
    color: pink;
  }
`;