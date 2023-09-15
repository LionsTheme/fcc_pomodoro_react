import React from "react";
import { SetTimerProps } from "../types/pomodoro";
import { ChevronDownIcon, ChevronUpIcon } from "./Icons";

const SetTimer: React.FC<SetTimerProps> = ({
  id,
  timerType,
  title,
  value,
  handleSetTimers,
}) => {
  return (
    <div className="SetTimers flex flex-col gap-2">
      <div id={`${id}-label`}>{title}</div>
      <div className="SetTimer-Buttons flex items-center justify-center gap-4">
        <button
          id={`${id}-decrement`}
          className="btn btn-secondary btn-circle btn-sm"
          onClick={() => handleSetTimers(false, timerType)}
        >
          <ChevronDownIcon className="h-4 w-4" />
        </button>
        <div id={`${id}-length`}>{value}</div>
        <button
          id={`${id}-increment`}
          className="btn btn-secondary btn-circle btn-sm"
          onClick={() => handleSetTimers(true, timerType)}
        >
          <ChevronUpIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SetTimer;
