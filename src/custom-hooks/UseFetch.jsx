import { useEffect, useState } from "react";

export function useFetch(cbFun, ...args) {
  let [data, setData] = useState([]);
  let [errors, setErrors] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  let fetchData = async () => {
    try {
      setIsLoading(true);
      let res = await cbFun(...args);
      setData(res.data);
    } catch (error) {
      setErrors(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () => {
      setIsLoading(true);
      fetchData();
    },
    [cbFun]
  );

  return { data, errors, isLoading };
}
