import axios from "axios";
import { useState, useCallback } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [data, setData] = useState<any>();
  const fetch = useCallback(async (link: string) => {
    setLoading(true);
    try {
      const res = await axios.get(link);
      setLoading(false);
      setData(res.data.data);
      //   return res.data.data;
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  return { loading, data, error, fetch };
};
export default useFetch;
