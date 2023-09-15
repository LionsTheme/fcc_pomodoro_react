import React from "react";
import { DisplayTimerProps } from "../types/pomodoro";
import classNames from "classnames";

/**
 * DisplayTimer renders the timer component.
 * @param {string} modeType - The type of timer (e.g., "session" or "break").
 * @param {string} time - The remaining time of the timer.
 * @returns {JSX.Element} The timer component.
 */
const DisplayTimer: React.FC<DisplayTimerProps> = ({ modeType, time }) => {
  return (
    <div className="timer flex flex-col items-center justify-center gap-2">
      <span
        id="timer-label"
        className={classNames("font-light badge badge-sm", [
          modeType === "session" ? "badge-primary" : "badge-warning",
        ])}
      >
        {modeType === "session" ? "Session" : "Break"}
      </span>
      <span id="time-left" className="text-7xl font-medium">
        {time}
      </span>
    </div>
  );
};

export default DisplayTimer;
