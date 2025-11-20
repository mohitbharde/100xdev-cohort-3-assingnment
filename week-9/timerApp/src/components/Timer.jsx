import { useRef, useState } from "react";
import { formatTime } from "../utils/auxiliaryFunctions";
import "./Timer.module.css";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(formatTime(0));

  const second = useRef(0);
  const intervalId = useRef(null);

  function onclick() {
    setIsRunning((perv) => !perv);

    if (!isRunning) {
      intervalId.current = setInterval(() => {
        second.current += 1;
        setTime(formatTime(second.current));
        //console.log(second.current);
      }, 1000);
    } else {
      clearInterval(intervalId.current);
      intervalId.current === null;
    }
  }

  return (
    <div className="timerApp">
      <div className="timerDisplay">
        <div className="timerCircle">
          <input
            type="text"
            className="timerTime timeInput timeUnit"
            name=""
            id=""
            value={time.hours}
          />
          <input
            type="text"
            className="timerTime timeInput timeUnit"
            name=""
            id=""
            value={time.minutes}
          />
          <input
            type="text"
            className="timerTime timeInput timeUnit"
            name=""
            id=""
            value={time.seconds}
          />
        </div>
      </div>

      <div className="actionButtons">
        <button className="actionButton" onClick={onclick}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="actionButton"
          onClick={() => {
            setIsRunning(false);
            setTime(formatTime(0));
            clearInterval(intervalId.current);
            intervalId.current = null;
            second.current = 0;
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
