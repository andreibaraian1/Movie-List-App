import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`;
export const NavItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.content};
  padding: 0 15% 0 15%;
`;
export const NavContainer = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: center;
  align-items: center;
  height: 50px;
`;
