export interface AppState {
  breakDefault: number;
  sessionDefault: number;
  timerMode: string;
  time: number;
  active: boolean;
  touched: boolean;
}

export interface SetTimerProps {
  id: string;
  timerType: keyof AppState;
  title: string;
  value: number;
  handleSetTimers: (increment: boolean, timerType: keyof AppState) => void;
}

export interface DisplayTimerProps {
  modeType: string;
  time: string;
}

export interface ControlsProps {
  active: boolean;
  handleReset: () => void;
  handlePlayPause: () => void;
}
