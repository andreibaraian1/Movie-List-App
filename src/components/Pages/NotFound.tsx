import React from "react";
import { Title } from "../styles/Asset/Asset.styled";
import { StyledLink } from "../styles/Link.styled";

export const NotFound = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "25px",
          flexWrap: "wrap",
        }}
      >
        <Title>The page you searched for doesn't exist</Title>
        <Title>
          You can press <StyledLink to={"/"}>here</StyledLink> to go back to
          home
        </Title>
      </div>
    </>
  );
};
