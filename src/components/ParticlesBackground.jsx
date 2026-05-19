import Particles from "@tsparticles/react"
import { loadFull } from "tsparticles"

function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadFull(engine)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          background: {
            color: "#000000"
          },
          particles: {
            number: { value: 60 },
            color: { value: "#3b82f6" },
            links: {
              enable: true,
              color: "#3b82f6",
              distance: 150,
              opacity: 0.3
            },
            move: {
              enable: true,
              speed: 1
            },
            size: {
              value: 2
            }
          }
        }}
      />
    </div>
  )
}

export default ParticlesBackground
