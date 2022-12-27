/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * a custom hook using GET method to request for data when
 * the component first rendered
 *
 * @summary GET hook
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:26:22
 * Last modified  : 2022-12-27 10:56:51
 */

import { useState, useEffect } from "react";

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(`Could not get data from ${url}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useGet;
