"use client";

import React, { useState, useEffect, useRef } from "react";
import { Canvas, Circle, FabricObject, Rect, Line, Pattern } from "fabric"; // Fabric.js v6+ import style [web:1]
import Sidebar from "@/components/sidebar";
import TopBar from "@/components/ToolBar";

const FabricCanvas = () => {
  const canvasRef = useRef(null);
  const [initialCanvas, setCanvas] = useState<Canvas | null>(null);
  const shapeRef = useRef<FabricObject>(null);
  const shape = useRef<"Rectangle" | "Circle" | "Pencil" | "" | "Line">("");

  const startX = useRef<number>(null);
  const startY = useRef<number>(null);
  const isDrawing = useRef<boolean>(null);
  const strokeColor = useRef<
    "#000000" | "#ef4444" | "#22c55e" | "#3b82f6" | "#f59e0b"
  >("#000000");
  const backgroundColor = useRef<
    "transparent" | "#fee2e2" | "#bbf7d0" | "#bfdbfe" | "#fef3c7"
  >("transparent");

  const fillPatternRef = useRef<Pattern | null>(null);
  const strokeWidthRef = useRef<number>(2);
  const strokeStyle = useRef<number[] | null>(null);
  const edge = useRef<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(true);
  // const [startX, setStartX] = useState(0);
  // const [startY, setStartY] = useState(0);
  // const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      const initialCanvas = new Canvas(canvasRef.current, {
        height: window.innerHeight,
        width: window.innerWidth,
      });
      initialCanvas.backgroundColor = "white";

      initialCanvas.renderAll();

      initialCanvas.on("mouse:wheel", function (opt) {
        const delta = opt.e.deltaY;
        let zoom = initialCanvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        initialCanvas.setZoom(zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });

      setCanvas(initialCanvas);
      return () => {
        initialCanvas.dispose();
      };
    }
  }, []);

  useEffect(() => {
    if (initialCanvas) {
      initialCanvas.on("mouse:down", (options) => {
        isDrawing.current = true;
        startX.current = options.pointer.x;
        startY.current = options.pointer.y;

        if (shape.current === "Rectangle") {
          const rect = new Rect({
            top: startY.current,
            left: startX.current,
            fill: fillPatternRef.current
              ? fillPatternRef.current
              : backgroundColor.current,
            stroke: strokeColor.current,
            strokeWidth: strokeWidthRef.current,
            strokeDashArray: strokeStyle.current,
          });
          shapeRef.current = rect;
          initialCanvas.add(rect);
        }

        if (shape.current === "Circle") {
          const circle = new Circle({
            left: startX.current,
            top: startY.current,
            radius: 1,
            fill: fillPatternRef.current
              ? fillPatternRef.current
              : backgroundColor.current,
            stroke: strokeColor.current,
            strokeWidth: strokeWidthRef.current,
            strokeDashArray: strokeStyle.current,
          });

          initialCanvas.add(circle);
          shapeRef.current = circle;
        }

        if (shape.current === "Line") {
          const line = new Line(
            [
              options.pointer.x,
              options.pointer.y,
              options.pointer.x,
              options.pointer.y,
            ],
            {
              stroke: "black",
              strokeWidth: 4,
              selectable: false,
              evented: false,
            }
          );

          // initialCanvas.isDrawingMode = true;
          // if (initialCanvas.freeDrawingBrush) {
          //   initialCanvas.freeDrawingBrush.color = "black";
          //   initialCanvas.freeDrawingBrush.width = 5;
          // }

          shapeRef.current = line;
          initialCanvas.add(line);
        }
      });

      // initialCanvas.on("path:created", function (e) {
      //   const path = e.path;
      //   path.selectable = true; // allow selection later
      //   path.evented = true;
      // });

      initialCanvas.on("mouse:move", (options) => {
        if (
          !isDrawing ||
          !shapeRef.current ||
          !startX.current ||
          !startY.current
        )
          return;

        if (shape.current === "Rectangle") {
          const width = options.pointer.x - startX.current;
          const height = options.pointer.y - startY.current;

          shapeRef.current.set({
            width: Math.abs(width),
            height: Math.abs(height),
            left: width < 0 ? options.pointer.x : startX.current,
            top: height < 0 ? options.pointer.y : startY.current,
            rx: edge.current ? 16 : 0, // horizontal radius
            ry: edge.current ? 16 : 0,
          });
        }

        if (shape.current === "Circle") {
          const dx = options.pointer.x - startX.current;
          const dy = options.pointer.y - startY.current;
          const radius = Math.sqrt(dx * dx + dy * dy);

          shapeRef.current.set({ radius });
        }

        if (shape.current === "Line") {
          const line = shapeRef.current as Line;

          line.set({
            x2: options.pointer.x,
            y2: options.pointer.y,
          });

          line.setCoords();
        }

        console.log("mouse move ", options);

        initialCanvas.renderAll();
      });

      initialCanvas.on("mouse:up", (options) => {
        if (shapeRef.current) {
          shapeRef.current.set({
            selectable: true,
            evented: true,
          });

          shapeRef.current.setCoords();
        }

        shapeRef.current = null;
        isDrawing.current = false;
        shape.current = "";
        initialCanvas.requestRenderAll();
      });
    }
  }, [initialCanvas]);

  return (
    <div className="relative flex">
      <canvas className="z-0" id="canvas" ref={canvasRef}></canvas>
      <Sidebar
        strokeColorRef={strokeColor}
        backgroundColorRef={backgroundColor}
        fillPatternRef={fillPatternRef}
        strokeWidthRef={strokeWidthRef}
        strokeStyleRef={strokeStyle}
        edgeRef={edge}
        isOpen={isOpen}
      ></Sidebar>
      <TopBar shape={shape}></TopBar>
    </div>
  );
};

export default FabricCanvas;
