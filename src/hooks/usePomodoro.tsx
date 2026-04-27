import { useEffect, useState } from "react";
import type { PomodoroConfig, PomodoroCycle } from "../types/Pomodoro";
import { createPomodoro } from "../lib/pomodoro";
import useTimer from "./useTimer";
import { isZero } from "../lib/time";
import type TimeUnits from "../types/TimeUnits";

interface PomodoroData {
  count: TimeUnits;
  isEnded: boolean;
  currentCycle: PomodoroCycle;
}

export default function usePomodoro(config: PomodoroConfig): PomodoroData {
  const [cycles, setCycles] = useState(createPomodoro(config));
  const [isEnded, setIsEnded] = useState(false);
  const [cycleIndex, setCycleIndex] = useState(0);
  const { count, start, reset } = useTimer(cycles[cycleIndex].time);

  const currentCycle = cycles[cycleIndex];

  useEffect(() => {
    if (!currentCycle.isCompleted) {
      reset();
      setTimeout(() => {
        start(currentCycle.time);
      }, 1000);
    }
  }, [cycleIndex]);

  useEffect(() => {
    if (isZero(count)) {
      const updatedCycle: PomodoroCycle = {
        ...currentCycle,
        isCompleted: true,
      };
      const updatedCycles = [...cycles];
      updatedCycle[cycleIndex] = updatedCycle;

      setCycles(updatedCycles);

      if (cycleIndex < cycles.length - 1) {
        setCycleIndex((c) => c + 1);
      } else {
        setIsEnded(true);
      }
    }
  }, [count]);

  return { count, isEnded, currentCycle };
}
