import * as React from "react";

export function SquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 20 20"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g clipPath="url(#squareClip)">
        <path
          d="M4.91 2.625h10.18a2.284 2.284 0 0 1 2.285 2.284v10.182a2.284 2.284 0 0 1-2.284 2.284H4.909a2.284 2.284 0 0 1-2.284-2.284V4.909a2.284 2.284 0 0 1 2.284-2.284Z"
          strokeWidth={1.25}
        />
      </g>

      <defs>
        <clipPath id="squareClip">
          <path d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export const SquareIconStr = `<svg
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 20 20"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g clipPath="url(#squareClip)">
        <path
          d="M4.91 2.625h10.18a2.284 2.284 0 0 1 2.285 2.284v10.182a2.284 2.284 0 0 1-2.284 2.284H4.909a2.284 2.284 0 0 1-2.284-2.284V4.909a2.284 2.284 0 0 1 2.284-2.284Z"
          strokeWidth={1.25}
        />
      </g>

      <defs>
        <clipPath id="squareClip">
          <path d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>`;
