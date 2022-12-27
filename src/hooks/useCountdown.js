/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * count down several seconds
 *
 * @summary count down
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 10:01:50
 * Last modified  : 2022-12-27 10:07:27
 */

import { useEffect, useRef, useState } from "react";

function useCountdown(total) {
  const [time, setTime] = useState(total || 0);
  const countRef = useRef(null);

  function count() {
    if (time > 0) {
      setTime(time - 1);
    }
  }

  useEffect(() => {
    countRef.current = count;
  });

  useEffect(() => {
    const timer = setInterval(() => countRef.current(), 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
}

export default useCountdown;
