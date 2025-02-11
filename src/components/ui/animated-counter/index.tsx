import React, { useRef, useEffect } from "react";

type AnimatedCounter = {
  value: number;
  animationDuration?: number;
  animationStyle?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
};

const AnimatedCounter = ({ value, animationDuration = 500, animationStyle = "linear" }: AnimatedCounter) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const [currentValue, setCurrentValue] = React.useState(0);
  let animationFrameId: number;

  const startAnimation = () => {
    const startValue = 0;
    const animationStep = (value - startValue) / (animationDuration / 10);

    const animate = () => {
      const prevValue = counterRef.current?.textContent as unknown as number;
      if (prevValue < value) {
        setCurrentValue((prevValue) => prevValue + animationStep);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    animate();
  };

  useEffect(() => {
    startAnimation();
  }, [value]);

  return (
    <span
      ref={counterRef}
      style={{
        transition: `all ${animationDuration}ms ${animationStyle}`,
      }}
    >
      {currentValue}
    </span>
  );
};

export default AnimatedCounter;
