import type { PomodoroCycle } from "../types/Pomodoro";
import type { PomodoroConfig } from "../types/Pomodoro";

export function createPomodoro(config: PomodoroConfig) {
  const cycles: PomodoroCycle[] = [];
  for (let i = 0; i < 3; i++) {
    cycles.push({
      time: config.pomodoro,
      label: "pomodoro",
      isCompleted: false,
    });
    cycles.push({
      time: config.shortBreak,
      label: "shortBreak",
      isCompleted: false,
    });
  }

  cycles.push({
    time: config.pomodoro,
    label: "pomodoro",
    isCompleted: false,
  });

  cycles.push({
    time: config.longBreak,
    label: "longBreak",
    isCompleted: false,
  });

  return cycles;
}
