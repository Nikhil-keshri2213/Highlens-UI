import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import Beams from "./background/Beams";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Beams
          beamWidth={2}
          beamHeight={20}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2.5}
          noiseIntensity={2}
          scale={0.3}
          rotation={30}
        />
      </div>
    <RouterProvider router={router} />
  </StrictMode>
);
