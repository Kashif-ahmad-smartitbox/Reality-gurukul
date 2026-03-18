import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = `THE FUTURE OF
REAL ESTATE
NETWORKING
IS HERE`;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #fa6a21 60%, #ffe0cc 100%)",
      }}
    >
      <div className="mx-auto grid min-h-[75vh] max-w-[1180px] items-center px-6 pb-25 pt-[70px] max-[860px]:min-h-0 max-[860px]:pt-[34px]">
        <div className="grid grid-cols-[minmax(320px,1fr)_minmax(320px,500px)] items-center gap-[34px] max-[860px]:grid-cols-1">
          {/* LEFT SIDE */}
          <div>
            <div className="relative">
              {/* Invisible text (prevents layout shift) */}
              <h1 className="whitespace-pre-line text-[60px] font-semibold leading-[1.3] tracking-[0.4px] text-white opacity-0 pointer-events-none">
                THE FUTURE OF REAL ESTATE NETWORKING IS HERE
              </h1>

              {/* Animated text */}
              <h1 className="absolute top-0 left-0 whitespace-pre-line text-[60px] font-semibold leading-[1.3] tracking-[0.4px] text-white">
                {displayedText}

                {/* Arrow appears after typing */}
                {displayedText === fullText && (
                  <span className="inline-flex items-center justify-center ml-4 w-22 h-12 rounded-xl bg-white align-baseline relative -top-1 animate-fadeIn">
                    {" "}
                    <ArrowRight className="w-10 h-10 text-[#fa6a21]" />
                  </span>
                )}
              </h1>
            </div>

            <p className="mt-[42px] max-w-[500px] text-[25px] leading-[1.25] text-white max-[1100px]:text-[22px]">
              Structured learning, verified opportunities, and powerful
              networking, all in one ecosystem.
            </p>
          </div>

          {/* RIGHT SIDE (LOGO) */}
          <div className="flex justify-center max-[860px]:justify-start">
            <img
              src="/brand-mark.png"
              alt="Realty Gurukul brand mark"
              className="w-[min(100%,500px)] drop-shadow-[0_7px_10px_rgba(0,0,0,0.2)] animate-zoom"
            />
          </div>
        </div>
      </div>

      {/* Skyline Background */}
      <div
        aria-label="City skyline background"
        className="min-h-[70vh] bg-cover bg-center max-[520px]:min-h-[230px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,125,53,0.08), rgba(0,0,0,0.25)), url('/skyline.jpeg')",
        }}
      />

      {/* Animations */}
      <style jsx>{`
        @keyframes zoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .animate-zoom {
          animation: zoom 3s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
