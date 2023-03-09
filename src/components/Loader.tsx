import React from "react";

import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load flex flex-col w-full h-full">
        <p className="text-center">Loading</p>
        <div className="w-[300px] h-3 rounded-3xl">
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#915eff",
              borderRadius: "24px",
            }}
          />
        </div>
      </span>
    </Html>
  );
};

export default Loader;
