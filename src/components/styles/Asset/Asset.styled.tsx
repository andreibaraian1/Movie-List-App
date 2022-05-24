import styled from "styled-components";
import { Button } from "../Button.styled";
import { CardWrapper } from "../Card.styled";
interface Props {
  img: string;
}

export const AssetWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(4,1fr);
  grid-template-columns: repeat(4,1fr); */
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  height: 0;
  padding-top: 56.25%; /* (img-height / img-width * container-width) */
  background-image: ${({ img }: Props) => `url(${img})`};
  position: relative;
`;
export const Title = styled.h1`
  color: white;
  margin-bottom: -100px;
`;
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 1fr;
  position: absolute;
  top: 15%;
  bottom: 0;
  left: 10%;
  right: 0;
  ${CardWrapper} {
    margin: 0;
    display: block;
    height: 100%;
    width: 50%;
    box-shadow: 0px 0px;
    cursor: default;
    &:active {
      transform: none;
    }
  }
  ${Button} {
    display: block;
    height: 25%;
    width: 50%;
  }
`;
