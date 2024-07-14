import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface DataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  reqConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      apiClient
        .get<DataResponse<T>>(endpoint, { ...reqConfig })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          setErrors(err.message);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );

  return { data, errors, isLoading };
};

export default useData;
