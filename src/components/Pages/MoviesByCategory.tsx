import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Asset } from "../types/Assets";
import { AssetCard } from "../Card/AssetCard";
import { GridContainer } from "../styles/Categories/Category.styled";
export const MoviesByCategory = () => {
  const { category_id } = useParams();
  const [movies, setMovies] = useState<Asset[]>([]);
  const [page, setPage] = useState(1);
  const [bottomPage, setBottomPage] = useState(false);
  useEffect(() => {
    const fetchByCategory = async () => {
      const res = await axios.get(
        `https://video-proxy.3rdy.tv/api/vod/category/${category_id}/assets/?page=${page}&size=20`
      );
      if (res.data.err) return;
      if (page === 1) {
        setMovies(res.data.data.results);
      } else {
        setMovies((prev) => [...prev, ...res.data.data.results]);
      }
    };
    fetchByCategory();
  }, [category_id, page]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (bottomPage === true) {
      setPage((prev) => prev + 1);
    }
  }, [bottomPage]);
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      setBottomPage(true);
    } else {
      setBottomPage(false);
    }
  };

  return (
    <>
      <GridContainer>
        {movies?.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </GridContainer>
    </>
  );
};
