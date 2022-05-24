import React from "react";
import { ThemeProvider } from "styled-components";
import { MenuProvider } from "./useMenu/MenuContext";
import { PopularProvider } from "./usePopular/PopularContext";
import { darkTheme } from "../styles/Theme.global";
export const ProviderBuilder = ({ children }: { children: JSX.Element }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <MenuProvider>
        <PopularProvider>{children}</PopularProvider>
      </MenuProvider>
    </ThemeProvider>
  );
};
