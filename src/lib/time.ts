/**
 * Función de utilidad para convertir milisegundos a minutos y segundos
 * * @param ms - Tiempo en milisegundos a convertir
 * @returns let's see...
 */

import type TimeUnits from "../types/TimeUnits";

export function timeConverter(ms: number): TimeUnits {
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

export function timeFormatter({ minutes, seconds }: TimeUnits) {
  return {
    minutes: minutes < 10 ? `0${minutes}` : "" + minutes,
    seconds: seconds < 10 ? `0${seconds}` : "" + seconds,
  };
}

export function isZero({ minutes, seconds }: TimeUnits): boolean {
  return minutes == 0 && seconds == 0;
}
