import "./App.css";
import usePomodoro from "./hooks/usePomodoro";
import { formatTime } from "./lib/time";

export default function App() {
  const { count, currentCycle } = usePomodoro({
    pomodoro: 6000,
    shortBreak: 10000,
    longBreak: 20000,
  });

  const formatted = formatTime(count);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="tomato-container">
        <div>{currentCycle.label}</div>
        {formatted.minutes}:{formatted.seconds}
        <div>{currentCycle.isCompleted ? "finalizado" : "en curso"}</div>
      </div>
    </div>
  );
}
