Tambien corri# Pomodoro Timer

Aplicacion web de temporizador Pomodoro construida con React + TypeScript + Vite.

## Que hace hoy el proyecto

- Ejecuta una secuencia completa de Pomodoro con descansos cortos y un descanso largo final.
- Muestra el ciclo actual (`pomodoro`, `shortBreak`, `longBreak`).
- Realiza cuenta regresiva en pasos de 1 segundo y la muestra en formato `mm:ss`.
- Marca cada ciclo como completado al llegar a `00:00`.
- Avanza automaticamente al siguiente ciclo despues de una espera configurable.

## Logica principal

El flujo de ejecucion esta concentrado en cuatro piezas:

- `src/hooks/usePomodoro.tsx`
  - Orquesta el estado de los ciclos.
  - Usa un `reducer` para actualizar el ciclo activo.
  - Detecta cuando el contador llega a cero y cambia de ciclo.
- `src/hooks/useTimer.tsx`
  - Maneja la cuenta regresiva con `setInterval`.
  - Reinicia el contador cuando cambia el tiempo inicial.
- `src/lib/pomodoro.ts`
  - Genera la secuencia de ciclos a partir de la configuracion.
  - Estructura actual: 4 pomodoros, 3 descansos cortos y 1 descanso largo.
- `src/lib/time.ts`
  - Convierte milisegundos a minutos/segundos.
  - Formatea el tiempo con ceros a la izquierda.
  - Expone la utilidad para validar `00:00`.

## Modelo de tiempo

- Todas las duraciones se modelan en milisegundos.
- La configuracion de tiempos se pasa como `PomodoroConfig`.

## Scripts disponibles

- `npm run dev` - inicia el servidor de desarrollo.
- `npm run lint` - ejecuta ESLint.
- `npm run build` - ejecuta `tsc -b` y luego el build de Vite.
- `npm run preview` - previsualiza el build de produccion.
