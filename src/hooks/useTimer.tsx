import { useEffect, useRef, useState } from "react";
import type TimeUnits from "../types/TimeUnits";
import { convertTime } from "../lib/time";

interface Timer {
  count: TimeUnits;
  start?: (ms: number) => void;
  pause?: () => void;
  resume?: () => void;
  reset?: () => void;
}

/**
 * Hook para crear un temporizador.
 * * @param startTime - Tiempo en milisegundos en donde se desea inciar la cuenta hacia atrás
 * @returns unidades de tiempo - Las unidades de tiempo en cada tick, del tipo TimeUnits
 */
export default function useTimer(startTime: number): Timer {
  const [count, setCount] = useState(startTime);

  useEffect(() => {
    setCount(() => startTime);

    const id = setInterval(() => {
      setCount((c) => {
        if (c - 1000 > 0) {
          return c - 1000;
        } else {
          clearInterval(id);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [startTime]);

  return {
    count: convertTime(count),
  };
}
