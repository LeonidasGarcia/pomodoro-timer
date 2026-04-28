import type TimeUnits from "../types/TimeUnits";

/**
 * Convierte milisegundos en minutos y segundos enteros.
 *
 * @param ms Tiempo en milisegundos.
 * @returns Unidades de tiempo normalizadas.
 */
export function convertTime(ms: number): TimeUnits {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms - minutes * 60000) / 1000);

  if (seconds < 0) {
    return {
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    minutes,
    seconds,
  };
}

/**
 * Formatea minutos y segundos con cero a la izquierda.
 *
 * @param time Unidades de tiempo sin formato.
 * @returns Minutos y segundos como strings de 2 dígitos.
 */
export function formatTime({ minutes, seconds }: TimeUnits) {
  return {
    minutes: minutes < 10 ? `0${minutes}` : "" + minutes,
    seconds: seconds < 10 ? `0${seconds}` : "" + seconds,
  };
}

/**
 * Verifica si el tiempo llegó a 00:00.
 *
 * @param time Unidades de tiempo actuales.
 * @returns `true` si minutos y segundos son cero.
 */
export function isZero({ minutes, seconds }: TimeUnits): boolean {
  return minutes == 0 && seconds == 0;
}
