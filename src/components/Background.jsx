import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-dark-900 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-800 via-dark-900 to-black opacity-80" />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: ["#00f3ff", "#bc13fe"] },
            links: { color: "#bc13fe", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 0.8, direction: "none", random: true, straight: false, outModes: "out" },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background;
