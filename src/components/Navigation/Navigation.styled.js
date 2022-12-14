import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  color: pink;
  font-size: 18px;
  &:hover {
    color: pink;
  }
  &.active {
    color: pink;
  }
`;