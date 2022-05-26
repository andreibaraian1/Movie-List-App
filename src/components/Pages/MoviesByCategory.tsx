import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Asset } from "../types/Assets";
import { AssetCard } from "../Card/AssetCard";
import { GridContainer } from "../styles/Categories/Category.styled";
import useFetch from "../hooks/useFetch";
import { Loading } from "./Loading";
export const MoviesByCategory = () => {
  const { category_id } = useParams();
  const [movies, setMovies] = useState<Asset[] | []>([]);
  const [page, setPage] = useState(1);
  const [bottomPage, setBottomPage] = useState(false);
  const { fetch, data, loading } = useFetch();
  useEffect(() => {
    if (!data) return;
    if (page === 1) {
      setMovies(data.results);
    } else {
      setMovies((prev) => [...prev, ...data.results]);
    }
  }, [data]);
  useEffect(() => {
    const fetchMovies = async () => {
      await fetch(
        `${process.env.REACT_APP_API}/api/vod/category/${category_id}/assets/?page=${page}&size=20`
      );
      // if (!data) return;
      // console.log(data, movies);

      // if (page === 1) {
      //   //@ts-ignore
      //   setMovies(data.results);
      // } else {
      //   //@ts-ignore
      //   setMovies((prev) => [...prev, ...data.results]);
      // }
    };
    fetchMovies();
    // const fetchByCategory = async () => {
    //   const res = await axios.get(
    //     `${process.env.REACT_APP_API}/api/vod/category/${category_id}/assets/?page=${page}&size=20`
    //   );
    //   if (res.data.err) return;
    //   if (page === 1) {
    //     setMovies(res.data.data.results);
    //   } else {
    //     setMovies((prev) => [...prev, ...res.data.data.results]);
    //   }
    // };
    // fetchByCategory();
  }, [fetch, page, category_id]);
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
        {loading && <Loading />}
        {movies?.map((asset: Asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </GridContainer>
    </>
  );
};
