import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: { color: "#0f172a" },
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" },
          move: { enable: true, speed: 1 },
          size: { value: 2 }
        }
      }}
    />
  );
}