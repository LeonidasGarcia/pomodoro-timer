import type { PomodoroCycle } from "../types/Pomodoro";
import type { PomodoroConfig } from "../types/Pomodoro";

/**
 * Crea la secuencia estándar de ciclos Pomodoro.
 *
 * Estructura generada: 4 pomodoros, 3 descansos cortos y 1 descanso largo final.
 *
 * @param config Duraciones en milisegundos para cada tipo de ciclo.
 * @returns Lista ordenada de ciclos listos para ejecutar.
 */
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
