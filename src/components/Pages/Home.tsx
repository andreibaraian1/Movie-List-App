import React, { useEffect, useState } from "react";
import { AssetCard } from "../Card/AssetCard";
import { usePopular } from "../Provider/usePopular/PopularContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 12,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 8,
  },
  desktop_small: {
    breakpoint: { max: 1400, min: 890 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 890, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export const Home = () => {
  const popularContext = usePopular();
  const { popular, fetchPopular } = popularContext;
  const [sliderItems, setSliderItems] = useState(0);

  useEffect(() => {
    const fetchAssets = async () => {
      await fetchPopular();
    };
    fetchAssets();
  }, [fetchPopular]);
  useEffect(() => {
    const size = document.body.clientWidth;
    if (size <= 464) {
      setSliderItems(1);
    }
    if (size > 464 && size <= 890) {
      setSliderItems(2);
    }
    if (size > 890 && size <= 1400) {
      setSliderItems(4);
    }
    if (size > 1400 && size <= 3000) {
      setSliderItems(7);
    }
    if (size > 3000 && size <= 4000) {
      setSliderItems(11);
    }
  }, []);
  return (
    <>
      <Carousel
        responsive={responsive}
        shouldResetAutoplay={false}
        autoPlay={false}
        slidesToSlide={sliderItems}
      >
        {popular?.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </Carousel>
    </>
  );
};
