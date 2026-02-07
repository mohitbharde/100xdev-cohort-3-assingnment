"use client";

import Image from "next/image";
import OpacitySlider from "./OpacitySlider";
import { Button } from "./ui/button";
import { RefObject } from "react";
import { SolidIcon } from "./icons/Solid";
import {
  createHachurePattern,
  FillCrossHatchIcon,
} from "./icons/FillCrossHatchIcon";
import { SquareIcon } from "./icons/SquareIcon";
import { createSvgPattern } from "./util/createSvgPattern";
import { ThinIcon } from "./icons/Thin";
import { Pattern } from "fabric";
import { BoldIcon } from "./icons/Bold";
import { ExtraThickLineIcon } from "./icons/ExtraBold";
import { DashLineIcon } from "./icons/DashLineIcon";
import { DottedLineIcon } from "./icons/DottedLineIcon";
import { SharpIcon } from "./icons/Sharp";
import { RoundedIcon } from "./icons/Rounded";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-gray-600">{title}</p>
      {children}
    </div>
  );
}

interface colorRowProps {
  color: string;
  onClickHandler: () => void;
}

function ColorRow({ colors }: { colors: colorRowProps[] }) {
  return (
    <div className="flex gap-2">
      {colors.map((color, i) => (
        <button
          key={i}
          className="w-7 h-7 rounded-md border"
          style={{
            background:
              color.color === "transparent"
                ? "repeating-conic-gradient(#e5e7eb 0% 25%, white 0% 50%) 50% / 10px 10px"
                : color.color,
          }}
          onClick={color.onClickHandler}
        />
      ))}
    </div>
  );
}

interface iconRowProps {
  icon: React.ReactNode;
  onClickHandler: () => void;
}
function IconRow({ icons }: { icons: iconRowProps[] }) {
  return (
    <div className="flex gap-2">
      {icons?.map((icon, i) => (
        // <Image
        //   key={i}
        //   className="w-9 h-9 rounded-md bg-gray-100 hover:bg-gray-200"
        //   src={`${icon}.svg`}
        //   alt={icon}
        //   width={16}
        //   height={16}
        // />
        <Button
          variant={"ghost"}
          size={"lg"}
          key={i}
          onClick={icon.onClickHandler}
        >
          {icon.icon}
        </Button>
      ))}
    </div>
  );
}

interface SidebarProps {
  strokeColorRef: RefObject<
    "#000000" | "#ef4444" | "#22c55e" | "#3b82f6" | "#f59e0b"
  >;
  backgroundColorRef: RefObject<
    "transparent" | "#fee2e2" | "#bbf7d0" | "#bfdbfe" | "#fef3c7"
  >;
  fillPatternRef: RefObject<Pattern | null>;
  strokeWidthRef: RefObject<number>;
  strokeStyleRef: RefObject<number[] | null>;
  edgeRef: RefObject<boolean>;
  isOpen: boolean;
}

export default function Sidebar({
  strokeColorRef,
  backgroundColorRef,
  fillPatternRef,
  strokeWidthRef,
  strokeStyleRef,
  edgeRef,
  isOpen,
}: SidebarProps) {
  return (
    <aside
      className={` w-56 z-10 absolute ${isOpen ? "block" : "hidden"} left-0 top-10 h-screen bg-transparent border-l shadow-sm flex flex-col overflow-y-auto `}
    >
      <div className="p-4 space-y-6">
        {/* Stroke */}
        <Section title="Stroke">
          <ColorRow
            colors={[
              {
                color: "#000000",
                onClickHandler: () => {
                  strokeColorRef.current = "#000000";
                },
              },
              {
                color: "#ef4444",
                onClickHandler: () => {
                  strokeColorRef.current = "#ef4444";
                },
              },
              {
                color: "#22c55e",
                onClickHandler: () => {
                  strokeColorRef.current = "#22c55e";
                },
              },
              {
                color: "#3b82f6",
                onClickHandler: () => {
                  strokeColorRef.current = "#3b82f6";
                },
              },
              {
                color: "#f59e0b",
                onClickHandler: () => {
                  strokeColorRef.current = "#f59e0b";
                },
              },
            ]}
          />
        </Section>

        {/* Background */}
        <Section title="Background">
          <ColorRow
            colors={[
              {
                color: "transparent",
                onClickHandler: () =>
                  (backgroundColorRef.current = "transparent"),
              },
              {
                color: "#fee2e2",
                onClickHandler: () => (backgroundColorRef.current = "#fee2e2"),
              },
              {
                color: "#bbf7d0",
                onClickHandler: () => (backgroundColorRef.current = "#bbf7d0"),
              },
              {
                color: "#bfdbfe",
                onClickHandler: () => (backgroundColorRef.current = "#bfdbfe"),
              },
              {
                color: "#fef3c7",
                onClickHandler: () => (backgroundColorRef.current = "#fef3c7"),
              },
            ]}
          />
        </Section>

        {/* Fill */}
        {/* <Section title="Fill">
          <IconRow
            icons={[
              {
                icon: <SolidIcon></SolidIcon>,
                onClickHandler: async () => {
                  const pattern = await createSvgPattern(
                    `<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 20 20" class="" fill="none" stroke="${backgroundColorRef.current}" stroke-linecap="round" stroke-linejoin="round"><path d="M5.879 2.625h8.242a3.254 3.254 0 0 1 3.254 3.254v8.242a3.254 3.254 0 0 1-3.254 3.254H5.88a3.254 3.254 0 0 1-3.254-3.254V5.88a3.254 3.254 0 0 1 3.254-3.254Z" stroke="${backgroundColorRef.current}" stroke-width="1.25"></path><mask id="FillHachureIcon" maskUnits="userSpaceOnUse" x="2" y="2" width="16" height="16" style="mask-type: alpha;"><path d="M5.879 2.625h8.242a3.254 3.254 0 0 1 3.254 3.254v8.242a3.254 3.254 0 0 1-3.254 3.254H5.88a3.254 3.254 0 0 1-3.254-3.254V5.88a3.254 3.254 0 0 1 3.254-3.254Z" fill="currentColor" stroke="currentColor" stroke-width="1.25"></path></mask><g mask="url(#FillHachureIcon)"><path d="M2.258 15.156 15.156 2.258M7.324 20.222 20.222 7.325m-20.444 5.35L12.675-.222m-8.157 18.34L17.416 5.22" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`
                  );
                  fillPatternRef.current = pattern;
                },
              },
              {
                icon: <FillCrossHatchIcon />,
                onClickHandler: () => {
                  fillPatternRef.current = createHachurePattern(
                    backgroundColorRef.current
                  );
                },
              },
              { icon: <SquareIcon />, onClickHandler: () => {} },
            ]}
          />
        </Section> */}

        {/* Stroke width */}
        <Section title="Stroke width">
          <IconRow
            icons={[
              {
                icon: <ThinIcon />,
                onClickHandler: () => {
                  strokeWidthRef.current = 2;
                },
              },
              {
                icon: <BoldIcon />,
                onClickHandler: () => {
                  strokeWidthRef.current = 4;
                },
              },
              {
                icon: <ExtraThickLineIcon />,
                onClickHandler: () => {
                  strokeWidthRef.current = 6;
                },
              },
            ]}
          />
        </Section>

        {/* Stroke style */}
        <Section title="Stroke style">
          <IconRow
            icons={[
              {
                icon: <BoldIcon />,
                onClickHandler: () => (strokeStyleRef.current = null),
              },
              {
                icon: <DashLineIcon />,
                onClickHandler: () => (strokeStyleRef.current = [10, 5]),
              },
              {
                icon: <DottedLineIcon />,
                onClickHandler: () => (strokeStyleRef.current = [2, 2]),
              },
            ]}
          />
        </Section>

        {/* Edges */}
        <Section title="Edges">
          <IconRow
            icons={[
              {
                icon: <SharpIcon />,
                onClickHandler: () => (edgeRef.current = false),
              },
              {
                icon: <RoundedIcon />,
                onClickHandler: () => (edgeRef.current = true),
              },
            ]}
          />
        </Section>

        {/* Opacity */}
        <OpacitySlider />
      </div>
    </aside>
  );
}
