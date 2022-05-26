import styled from "styled-components";

export const CarouselContainer = styled.div`
  overflow: visible;
`;
export const CarouselScroller = styled.div<{ columns: number }>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${({ columns }) => columns}%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scrollbar-width: none;
  scroll-snap-type: inline mandatory;
  > * {
    scroll-snap-align: start;
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
export const LeftArrow = styled.div`
  position: fixed;
  width: 0;
  left: 2%;
  top: 20%;
  height: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-right: 40px solid #f5f0f0;
`;
export const RightArrow = styled.div`
  position: fixed;
  width: 0;
  right: 2%;
  top: 20%;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 40px solid #f5f0f0;
`;
