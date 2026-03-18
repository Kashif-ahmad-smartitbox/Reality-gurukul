export default function LogoSection() {
  return (
    <section
      className="grid min-h-[42vh] items-center bg-[#ececec] px-6 py-6 max-[860px]:min-h-0"
      aria-label="Realty Gurukul logo section"
    >
      <div className="mx-auto flex w-full max-w-[1180px] justify-center">
        
        <img
          src="/brand-mark.png"
          alt="Realty Gurukul logo"
          className="w-[min(420px,72vw)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] animate-logoZoom"
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