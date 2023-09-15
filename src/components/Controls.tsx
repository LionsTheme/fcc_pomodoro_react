import React from "react";
import { ControlsProps } from "../types/pomodoro";
import { ArrowPathIcon, PauseIcon, PlayIcon } from "./Icons";

/**
 * Controls renders the control buttons component.
 * @param {boolean} active - Indicates if the timer is active or paused.
 * @param {function} handleReset - The function to handle reset button click.
 * @param {function} handlePlayPause - The function to handle play/pause button click.
 * @returns {JSX.Element} The control buttons component.
 */
const Controls: React.FC<ControlsProps> = ({
  active,
  handleReset,
  handlePlayPause,
}) => {
  return (
    <div className="Controls flex items-center gap-2 pl-8">
      <button
        id="start_stop"
        className="btn btn-circle btn-primary btn-lg"
        onClick={handlePlayPause}
        style={{ fontSize: 17 }}
      >
        {active ? (
          <span>
            <PauseIcon />
          </span>
        ) : (
          <span>
            <PlayIcon />
          </span>
        )}
      </button>
      <button
        id="reset"
        className="btn btn-circle btn-secondary btn-xs"
        onClick={handleReset}
      >
        <ArrowPathIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Controls;
