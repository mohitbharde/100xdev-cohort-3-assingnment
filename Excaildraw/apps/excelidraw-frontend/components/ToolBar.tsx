"use client";

import {
  Lock,
  Hand,
  MousePointer,
  Square,
  Diamond,
  Circle as CircleIcon,
  ArrowRight,
  Minus,
  Pencil,
  Type,
  Image as ImageIcon,
  Eraser,
  Triangle,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

import {
  Rect,
  Circle as FabricCircle,
  Line,
  Polygon,
  FabricObject,
} from "fabric";

import { ReactNode, RefObject } from "react";

/* ------------------------------------------------------------------ */
/* Types */
/* ------------------------------------------------------------------ */

type Tool = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

interface TopBarProps {
  shape: RefObject<"Rectangle" | "Circle" | "Pencil" | "" | "Line">;
}

/* ------------------------------------------------------------------ */
/* Component */
/* ------------------------------------------------------------------ */

export default function TopBar({ shape }: TopBarProps) {
  // ---------------------------------------------------------------------------------
  //                   function to assign the object to shapeRef
  // ---------------------------------------------------------------------------------

  const tools: Tool[] = [
    {
      icon: Lock,
      label: "Lock",
    },
    {
      icon: Hand,
      label: "Pan",
    },
    {
      icon: MousePointer,
      label: "Select",
    },
    {
      icon: Square,
      label: "Rectangle",
    },
    {
      icon: Diamond,
      label: "Diamond",
    },
    {
      icon: CircleIcon,
      label: "Ellipse",
    },
    {
      icon: Minus,
      label: "Line",
    },
    {
      icon: ArrowRight,
      label: "Arrow",
    },
    {
      icon: Pencil,
      label: "Draw",
    },
    {
      icon: Type,
      label: "Text",
    },
    {
      icon: ImageIcon,
      label: "Image",
    },
    {
      icon: Eraser,
      label: "Eraser",
    },
    {
      icon: Triangle,
      label: "More",
    },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 rounded-xl bg-zinc-900/90 px-3 py-2 shadow-lg backdrop-blur">
          {tools.map(({ icon: Icon, label }) => (
            <ToolButton
              key={label}
              icon={<Icon className="h-5 w-5" />}
              label={label}
              shapetypeRef={shape}
            />
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}

/* ------------------------------------------------------------------ */
/* Tool Button */
/* ------------------------------------------------------------------ */

interface ToolButtonProps {
  icon: ReactNode;
  label: string;
  shapetypeRef: RefObject<"Rectangle" | "Circle" | "Pencil" | "" | "Line">;
}

function ToolButton({ icon, label, shapetypeRef }: ToolButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
          onClick={() => {
            if (label === "Rectangle") {
              shapetypeRef.current = "Rectangle";
            } else if (label === "Ellipse") {
              shapetypeRef.current = "Circle";
            } else if (label === "Line") {
              shapetypeRef.current = "Line";
            }
          }}
        >
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-xs">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
