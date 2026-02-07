import { useState } from "react";
export default function OpacitySlider() {
  // return (
  //   // <div className="space-y-2 w-full slider-container">
  //   //   <p className="text-xs font-medium text-gray-600">Opacity</p>
  //   //   <input
  //   //     type="range"
  //   //     min="0"
  //   //     max="50"
  //   //     defaultValue="25"
  //   //     className="range-slider"
  //   //   />
  //   // </div>

  // // );

  const min = 0;
  const max = 100;
  const [value, setValue] = useState(25);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="range-slider"
        style={{
          background: `linear-gradient(
            to right,
            #3b82f6 0%,
            #3b82f6 ${percentage}%,
            #2a2a2a ${percentage}%,
            #2a2a2a 100%
          )`,
        }}
      />
    </div>
  );
}
