import { useEffect, useState } from "react";
import type TimeUnits from "../types/TimeUnits";
import { convertTime } from "../lib/time";

interface Timer {
  count: TimeUnits;
}

/**
 * Ejecuta una cuenta regresiva en pasos de 1 segundo.
 *
 * Reinicia el contador cada vez que cambia `startTime` y expone
 * el valor actual convertido a `{ minutes, seconds }`.
 *
 * @param startTime Tiempo inicial en milisegundos.
 * @returns Objeto con la cuenta actual en unidades de tiempo.
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
