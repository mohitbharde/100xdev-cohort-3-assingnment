import * as React from "react";

export function DashLineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g strokeWidth={2}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12h2" />
        <path d="M11 12h2" />
        <path d="M17 12h2" />
      </g>
    </svg>
  );
}

export const DashLineStr = `<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" class="" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="2"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12h2"></path><path d="M17 12h2"></path><path d="M11 12h2"></path></g></svg>`;
