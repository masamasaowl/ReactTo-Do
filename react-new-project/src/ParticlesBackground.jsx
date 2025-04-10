import { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 1.5 },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            out_mode: "out"
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
          }
        },
        retina_detect: true
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -1,
        top: 0,
        left: 0,
        background: "#000"
      }}
    />
  );
};

export default ParticlesBackground;
