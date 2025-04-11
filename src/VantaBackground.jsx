import { useEffect, useRef, useState } from "react";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.THREE) {
      setVantaEffect(
        window.VANTA.GLOBE({
          el: vantaRef.current,
          THREE: window.THREE,
          backgroundColor: 0x0d0d0d,
          color: 0xff3f81,
          color2:0xffffff,
          size: 1
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
  );
};

export default VantaBackground;
