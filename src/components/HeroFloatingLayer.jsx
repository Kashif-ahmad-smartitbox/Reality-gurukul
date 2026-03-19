import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FLOATING_PHRASES = [
  "Structured Learning Programs",
  "Verified Opportunities",
  "Powerful Networking",
  "Skill-Based Growth",
  "Industry-Relevant Content",
  "Community Support",
  "All-in-One Platform",
  "Faster Career Growth",
];

const BRANCH_PATHS = [
  { x: [0, -70, -150, -230], y: [0, -10, -26, -34] },
  { x: [0, -66, -142, -214], y: [0, 8, 20, 28] },
  { x: [0, -58, -126, -190], y: [0, 18, 36, 48] },
  { x: [0, 68, 144, 218], y: [0, -8, -20, -26] },
  { x: [0, 62, 132, 202], y: [0, 10, 22, 34] },
  { x: [0, 56, 120, 184], y: [0, 20, 36, 50] },
  { x: [0, -40, -70, -98], y: [0, -74, -150, -214] },
  { x: [0, 44, 78, 108], y: [0, -58, -122, -182] },
];
const EASE_PREMIUM = [0.22, 1, 0.36, 1];

export default function HeroFloatingLayer() {
  const [spreadMultiplier, setSpreadMultiplier] = useState(1);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const updateSpread = (event) => {
      setSpreadMultiplier(event.matches ? 1.35 : 1);
    };

    updateSpread(media);
    media.addEventListener("change", updateSpread);

    return () => media.removeEventListener("change", updateSpread);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden [--origin-x:50%] [--origin-y:62%] sm:[--origin-x:54%] sm:[--origin-y:60%] lg:[--origin-x:79%] lg:[--origin-y:49%]"
    >
      {FLOATING_PHRASES.map((phrase, index) => {
        const basePath = BRANCH_PATHS[index];
        const path = {
          x: basePath.x.map((value) => value * spreadMultiplier),
          y: basePath.y,
        };

        const isUpperTrack = index >= 6;
        const duration = isUpperTrack ? (index === 6 ? 7.2 : 8.4) : 7.2;
        const repeatDelay = isUpperTrack ? (index === 6 ? 1.8 : 2.1) : 1.8;
        const delay = isUpperTrack ? (index === 6 ? 3.3 : 4.5) : index * 0.55;

        return (
          <motion.span
            key={`${phrase}-${index}`}
            className="absolute block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(0.68rem,1.05vw,1rem)] font-medium tracking-[0.2px] text-white will-change-[transform,opacity]"
            style={{
              left: "var(--origin-x)",
              top: "calc(var(--origin-y) - 50px)",
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.95 }}
            animate={{
              x: path.x,
              y: path.y,
              opacity: [0, 1, 1, 0],
              scale: [0.95, 1, 1, 0.98],
            }}
            transition={{
              duration,
              ease: EASE_PREMIUM,
              times: [0, 0.28, 0.78, 1],
              repeat: Infinity,
              repeatDelay,
              delay,
            }}
          >
            {phrase}
          </motion.span>
        );
      })}
    </div>
  );
}
