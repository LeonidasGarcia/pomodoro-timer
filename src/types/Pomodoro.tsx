export interface PomodoroConfig {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

export interface PomodoroCycle {
  time: number;
  label: "pomodoro" | "shortBreak" | "longBreak";
  isCompleted: boolean;
}
