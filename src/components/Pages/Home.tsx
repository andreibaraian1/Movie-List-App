import React, { useEffect, useState, useRef } from "react";
import { AssetCard } from "../Card/AssetCard";
import { usePopular } from "../Provider/usePopular/PopularContext";
import "react-multi-carousel/lib/styles.css";
import {
  CarouselContainer,
  CarouselScroller,
  LeftArrow,
  RightArrow,
} from "../styles/Carousel/Carousel.styled";

export const Home = () => {
  const popularContext = usePopular();
  const { popular } = popularContext;
  const [columnPercentage, setColumnPercentage] = useState(0);
  const [leftArrowVisible, setLeftArrowVisible] = useState(false);
  const [rightArrowVisible, setRightArrowVisible] = useState(true);
  const carousel = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const size = document.body.clientWidth;

    if (size <= 450) {
      setColumnPercentage(48);
    }
    if (size > 450 && size <= 1400) {
      setColumnPercentage(25);
    }
    if (size > 1400 && size <= 3000) {
      setColumnPercentage(13);
    }
    if (size > 3000 && size <= 4000) {
      setColumnPercentage(10);
    }
  }, []);
  useEffect(() => {}, [carousel.current?.scrollLeft]);
  const handleArrow = (offset: number) => {
    if (!carousel.current) return;
    carousel.current.scrollBy({
      top: 0,
      left: offset,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!carousel.current) return;

    if (carousel.current?.scrollLeft < 20) {
      setLeftArrowVisible(false);
    } else {
      setLeftArrowVisible(true);
    }
    if (
      Math.ceil(carousel.current.scrollLeft + carousel.current.offsetWidth) >=
      carousel.current.scrollWidth
    ) {
      setRightArrowVisible(false);
    } else {
      setRightArrowVisible(true);
    }
  };
  return (
    <>
      {/* <Carousel
        responsive={responsive}
        shouldResetAutoplay={false}
        autoPlay={false}
        slidesToSlide={sliderItems}
      >
        {popular?.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </Carousel> */}
      <CarouselContainer>
        {leftArrowVisible && <LeftArrow onClick={() => handleArrow(-500)} />}
        {rightArrowVisible && <RightArrow onClick={() => handleArrow(500)} />}
        <CarouselScroller
          ref={carousel}
          onScroll={handleScroll}
          columns={columnPercentage}
        >
          {popular?.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </CarouselScroller>
      </CarouselContainer>
    </>
  );
};
