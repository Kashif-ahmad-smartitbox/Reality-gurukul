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
      className="scroll-mt-20 overflow-hidden sm:scroll-mt-24"
      style={{
        background: "linear-gradient(to bottom, #fa6a21 60%, #ffe0cc 100%)",
      }}
    >
      <div className="mx-auto grid min-h-[70vh] max-w-[1180px] items-center px-4 pb-8 pt-4 sm:px-6 sm:pb-12 sm:pt-8 lg:min-h-[75vh] lg:pb-16 lg:pt-10">
        <div className="grid grid-cols-1 items-center gap-4 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,500px)] lg:gap-10">
          {/* LEFT SIDE */}
          <div className="text-center sm:text-left">
            <div className="relative">
              {/* Invisible text (prevents layout shift) */}
              <h1 className="pointer-events-none w-full whitespace-pre-line text-center text-[clamp(2rem,7.5vw,3.75rem)] font-semibold leading-[1.15] tracking-[0.4px] text-white opacity-0 sm:text-left">
                {fullText}
              </h1>

              {/* Animated text */}
              <h1 className="absolute left-0 top-0 w-full whitespace-pre-line text-center text-[clamp(2rem,7.5vw,3.75rem)] font-semibold leading-[1.15] tracking-[0.4px] text-white sm:text-left">
                {displayedText}

                {/* Arrow appears after typing */}
                {displayedText === fullText && (
                  <span className="relative -top-1 ml-2 inline-flex h-10 w-14 items-center justify-center rounded-lg bg-white align-baseline sm:ml-3 sm:h-11 sm:w-16 sm:rounded-xl lg:ml-4 lg:h-12 lg:w-20 animate-fadeIn">
                    {" "}
                    <ArrowRight className="h-6 w-6 text-[#fa6a21] sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  </span>
                )}
              </h1>
            </div>

            <p className="hidden mx-auto mt-8 max-w-[450px] text-justify text-[clamp(1.05rem,2.7vw,1.5rem)] leading-[1.35] text-white sm:mx-0 sm:block sm:text-left">
              Structured learning, verified opportunities, and powerful
              networking, all in one ecosystem.
            </p>
          </div>

          {/* RIGHT SIDE (LOGO) */}
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 lg:items-end lg:justify-end">
            <img
              src="/brand-mark.png"
              alt="Realty Gurukul brand mark"
              className="w-[min(100%,420px)] sm:w-[min(100%,460px)] lg:w-[min(100%,500px)] drop-shadow-[0_7px_10px_rgba(0,0,0,0.2)] animate-zoom"
            />

            <p className="max-w-[450px] text-center text-[clamp(1.05rem,2.7vw,1.5rem)] leading-[1.35] text-white sm:hidden">
              Structured learning, verified opportunities, and powerful
              networking, all in one ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Skyline Background */}
      <div
        aria-label="City skyline background"
        className="min-h-[36vh] bg-cover bg-center sm:min-h-[42vh] lg:min-h-[62vh]"
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
