import "./App.css";
import usePomodoro from "./hooks/usePomodoro";
import { formatTime } from "./lib/time";

export default function App() {
  const { count, currentCycle } = usePomodoro({
    pomodoro: 1500000,
    shortBreak: 300000,
    longBreak: 900000,
  });

  const formatted = formatTime(count);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="tomato-container text-white flex justify-center items-center flex-col gap-2">
        <p className="text-4xl font-bold">{currentCycle.label}</p>
        <p className="text-9xl font-bold">
          {formatted.minutes}:{formatted.seconds}
        </p>
        <p className="text-lg font-bold">
          {currentCycle.isCompleted ? "Finalizado" : "En curso"}
        </p>
      </div>
    </div>
  );
}
