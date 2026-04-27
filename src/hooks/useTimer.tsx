import { useRef, useState } from "react";
import type TimeUnits from "../types/TimeUnits";
import { timeConverter } from "../lib/time";

interface Timer {
  count: TimeUnits;
  start: (ms: number) => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
}

/**
 * Hook para crear un temporizador.
 * * @param startTime - Tiempo en milisegundos en donde se desea inciar la cuenta hacia atrás
 * @returns unidades de tiempo - Las unidades de tiempo en cada tick, del tipo TimeUnits
 */
export default function useTimer(startTime: number): Timer {
  const [count, setCount] = useState(startTime);
  const intervalRef = useRef(null);

  function handleStart(ms: number) {
    clearInterval(intervalRef.current);

    setCount(ms);

    intervalRef.current = setInterval(() => {
      setCount((c) => {
        if (c > 0) {
          return c - 1000;
        } else {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
      });
    }, 1000);
  }

  function handlePause() {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function handleResumen() {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      if (count > 0) {
        setCount((c) => c - 1000);
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, 1000);
  }

  function handleReset() {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(0);
  }

  return {
    count: timeConverter(count),
    start: handleStart,
    pause: handlePause,
    resume: handleResumen,
    reset: handleReset,
  };
}
