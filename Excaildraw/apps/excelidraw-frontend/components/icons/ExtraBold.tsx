import * as React from "react";

export function ExtraThickLineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
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
        d="M5 10h10"
        strokeWidth={3.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const ExtraBoldStr = `<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 20 20" class="" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5 10h10" stroke="currentColor" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
