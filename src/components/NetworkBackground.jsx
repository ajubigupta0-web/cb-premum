import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function NetworkBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="network-bg"
      init={particlesInit}
      options={{
        fullScreen: false,
        fpsLimit: 60,
        background: { color: { value: "transparent" } },

        particles: {
          number: { value: 100 },

          color: { value: "#6b7280" },

          shape: { type: "circle" },

          opacity: {
            value: { min: 0.25, max: 0.7 },
            animation: {
              enable: true,
              speed: 1.2,
              minimumValue: 0.2,
              sync: false,
            },
          },

          size: {
            value: { min: 1.5, max: 5 },
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 1,
              sync: false,
            },
          },

          move: {
            enable: true,
            speed: { min: 0.2, max: 0.6 },
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
          },

          links: {
            enable: true,
            distance: 120,
            color: "#9ca3af",
            opacity: 0.45,
            width: 0.8,
          },
        },

        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: { opacity: 0.7 },
            },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}