import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { tsParticles } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadSlim(tsParticles).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#22c55e" },
          links: {
            color: "#22c55e",
            distance: 150,
            enable: true,
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            density: { enable: true },
            value: 60,
          },
          opacity: { value: { min: 0.05, max: 0.25 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
