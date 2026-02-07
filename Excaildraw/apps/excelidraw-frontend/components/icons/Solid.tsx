import React from "react";

export function SolidIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={"38px"}
      height={"38px"}
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M5.879 2.625h8.242a3.254 3.254 0 0 1 3.254 3.254v8.242a3.254 3.254 0 0 1-3.254 3.254H5.88a3.254 3.254 0 0 1-3.254-3.254V5.88a3.254 0 0 1 3.254-3.254Z"
        strokeWidth="1.25"
      />

      <mask
        id="FillHachureIcon"
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
        style={{ maskType: "alpha" }}
      >
        <path
          d="M5.879 2.625h8.242a3.254 3.254 0 0 1 3.254 3.254v8.242a3.254 3.254 0 0 1-3.254 3.254H5.88a3.254 3.254 0 0 1-3.254-3.254V5.88a3.254 3.254 0 0 1 3.254-3.254Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </mask>

      <g mask="url(#FillHachureIcon)">
        <path
          d="M2.258 15.156 15.156 2.258
             M7.324 20.222 20.222 7.325
             m-20.444 5.35L12.675-.222
             m-8.157 18.34L17.416 5.22"
          strokeWidth="1.25"
        />
      </g>
    </svg>
  );
}
