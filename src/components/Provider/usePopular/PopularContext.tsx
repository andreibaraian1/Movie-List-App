import axios from "axios";
import { createContext, useCallback, useContext, useState } from "react";
import { Asset } from "../../types/Assets";
interface TAssets {
  data: Asset[];
  err: boolean;
}
const defaultPopular = {
  popular: [],
  fetchPopular: async () => {},
  loading: true,
};
export const usePopularService = () => {
  const [popular, setPopular] = useState<Asset[] | []>([]);
  const [loading, setLoading] = useState(true);

  const fetchPopular = useCallback(async () => {
    const res = await axios.get<TAssets>(
      "https://video-proxy.3rdy.tv/api/vod/popular"
    );
    if (!res.data.err) {
      setPopular(res.data.data);
      setLoading(false);
    }
  }, []);
  return {
    popular,
    fetchPopular,
    loading,
  };
};
export const PopularContext =
  createContext<ReturnType<typeof usePopularService>>(defaultPopular);

export const PopularProvider = ({ children }: { children: JSX.Element }) => {
  const popularData = usePopularService();

  return (
    <PopularContext.Provider value={popularData}>
      {children}
    </PopularContext.Provider>
  );
};

export const usePopular = () => useContext(PopularContext);
