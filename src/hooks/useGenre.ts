import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}
interface fetchGenreResponse {
  results: Genre[];
  count: number;
}

const useGenre = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<fetchGenreResponse>("/genres")
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.message);
        setLoading(false);
      });
  }, []);

  return { genres, errors, isLoading };
};

export default useGenre;
