import React from "react";
import { Nav, NavItem, NavContainer } from "./styles/Nav.styled";
import { useMenu } from "./Provider/useMenu/MenuContext";
import { Menu } from "./types/Menu";
export const Navbar = () => {
  const menuContext = useMenu();
  const { menu } = menuContext;
  return (
    <Nav>
      <NavContainer>
        {menu?.map((element: Menu) => (
          <NavItem key={element.id} to={element.route}>
            {element.label}
          </NavItem>
        ))}
      </NavContainer>
    </Nav>
  );
};
