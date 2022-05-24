import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  cursor: pointer;
  box-shadow: 2px 2px #212121;
  justify-content:center;
  justify-items:center;
  width: 66.54%;
  .img {
  
    width: 100%;
  }
  &:active {
    box-shadow: 0px 0px;
    transform: translate(2px, 2px);
  }
`;
