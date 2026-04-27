import "./App.css";
import usePomodoro from "./hooks/usePomodoro";
import { timeFormatter } from "./lib/time";

export default function App() {
  const { count, isEnded, currentCycle } = usePomodoro({
    pomodoro: 2000,
    shortBreak: 1000,
    longBreak: 3000,
  });

  const formatted = timeFormatter(count);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="tomato-container">
        <div>{currentCycle.label}</div>
        {formatted.minutes}:{formatted.seconds}
        <div>{isEnded ? "terminó" : "en curso"}</div>
      </div>
    </div>
  );
}
