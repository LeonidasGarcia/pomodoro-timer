import { useEffect, useReducer, useState } from "react";
import type { PomodoroConfig, PomodoroCycle } from "../types/Pomodoro";
import { createPomodoro } from "../lib/pomodoro";
import useTimer from "./useTimer";
import { isZero } from "../lib/time";
import type TimeUnits from "../types/TimeUnits";

interface PomodoroData {
  count: TimeUnits;
  currentCycle: PomodoroCycle;
}

interface Action {
  type: "updateCycle";
  index?: number;
  cycleProps: Partial<PomodoroCycle>;
}

function reducer(state: PomodoroCycle[], action: Action) {
  switch (action.type) {
    case "updateCycle": {
      const selectedCycle = state[action.index]!;

      const updatedCycle: PomodoroCycle = {
        ...selectedCycle,
        ...action.cycleProps,
      };

      const newCycles = [...state];
      newCycles[action.index] = updatedCycle;

      return newCycles;
    }
  }
}

export default function usePomodoro(
  config: PomodoroConfig,
  delayTime: number = 3000,
): PomodoroData {
  const [cycles, dispatch] = useReducer(reducer, createPomodoro(config));
  const [cycleIndex, setCycleIndex] = useState(0);
  const { count } = useTimer(cycles[cycleIndex].time);

  const currentCycle = cycles[cycleIndex];

  useEffect(() => {
    if (!isZero(count)) return;
    dispatch({
      type: "updateCycle",
      index: cycleIndex,
      cycleProps: {
        isCompleted: true,
      },
    });
  }, [count]);

  useEffect(() => {
    if (!isZero(count)) return;

    let timeoutId = 0;

    if (cycleIndex + 1 < cycles.length) {
      timeoutId = setTimeout(() => {
        setCycleIndex((c) => c + 1);
      }, delayTime);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  return { count, currentCycle };
}
