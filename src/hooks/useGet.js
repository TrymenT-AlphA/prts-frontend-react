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
 * Last modified  : 2022-12-27 00:29:55
 */

import * as React from "react";

const useGet = (url) => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(`could not fetch data from ${url}`);
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
