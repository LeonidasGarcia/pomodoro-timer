export interface PomodoroConfig {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

export interface PomodoroCycle {
  time: number;
  label: "Pomodoro" | "Short Break" | "Long Break";
  isCompleted: boolean;
}
