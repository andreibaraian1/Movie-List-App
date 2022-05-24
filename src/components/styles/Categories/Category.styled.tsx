import styled from "styled-components";
import { Link } from "react-router-dom";
export const GridContainer = styled.div`
  padding-left: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  gap: 20px;
  background-color: black;
  @media screen and (max-width: 1010px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 804px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 588px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 386px) {
    grid-template-columns: 1fr;
  }
`;
export const CategoryWrapper = styled(Link)`
  background-color: ${({ theme }) => theme.body};
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
  &:hover {
    color: green;
    cursor: pointer;
  }
`;
