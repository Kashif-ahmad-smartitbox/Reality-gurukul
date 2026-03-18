export default function LogoSection() {
  return (
    <section
      className="grid min-h-[35vh] items-center bg-white px-3 py-2 sm:min-h-[40vh] sm:px-4 sm:py-3 lg:min-h-[45vh] lg:px-6 lg:py-4"
      aria-label="Realty Gurukul logo section"
    >
      <div className="mx-auto flex w-full max-w-[1180px] justify-center">
        
        <img
          src="/brand-mark.png"
          alt="Realty Gurukul logo"
          className="w-[clamp(280px,92vw,560px)] sm:w-[clamp(380px,80vw,760px)] lg:w-[clamp(420px,42vw,700px)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] animate-logoZoom"
        />

      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes logoZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        .animate-logoZoom {
          animation: logoZoom 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}