import { useState } from "react";

function SideBar() {
  const [colaps, setcolaps] = useState(true);
  return (
    <div className={colaps ? "w-32 py-3.5 px-2.5" : "hidden"}>
      <div className="flex flex-row justify-between">
        <span>My list</span>
        {colaps &
        (
          <button onClick={() => setcolaps((prev) => !prev)}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="sidebar"
              className="svg-inline--fa fa-sidebar w-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M224 80V432H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H224zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88zM64 312c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.3 0-24 10.7-24 24z"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default SideBar;
