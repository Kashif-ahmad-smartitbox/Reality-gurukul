export default function Hero() {
  return (
    <section id="home" className="bg-[#fa6a21]">
      <div className="mx-auto grid min-h-[60vh] max-w-[1180px] items-center px-6 pb-9 pt-[42px] max-[860px]:min-h-0 max-[860px]:pt-[34px]">
        <div className="grid grid-cols-[minmax(320px,1fr)_minmax(320px,500px)] items-center gap-[34px] max-[860px]:grid-cols-1">
          <div>
            <h1 className="text-[clamp(42px,5vw,74px)] font-black leading-[1.05] tracking-[0.4px] text-white">
              THE FUTURE OF
              <br />
              REAL ESTATE
              <br />
              NETWORKING
              <br />
              IS HERE
            </h1>
            <p className="mt-[22px] max-w-[460px] text-[26px] leading-[1.25] text-[#ffe2d0] max-[1100px]:text-[22px]">
              Structured learning, verified opportunities, and powerful networking, all in one
              ecosystem.
            </p>
          </div>
          <div className="flex justify-center max-[860px]:justify-start">
            <img
              src="/brand-mark.svg"
              alt="Realty Gurukul brand mark"
              className="w-[min(100%,420px)] drop-shadow-[0_7px_10px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>
      </div>
      <div
        aria-label="City skyline background"
        className="min-h-[42vh] bg-cover bg-center max-[520px]:min-h-[230px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,125,53,0.08), rgba(0,0,0,0.25)), url('/skyline.svg')"
        }}
      />
    </section>
  )
}
