export default function About() {
  return (
    <section id="about" className="grid min-h-[57vh] items-center bg-[#ececec] px-6 py-[58px] max-[860px]:min-h-0">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="grid grid-cols-[300px_1fr] items-start gap-[42px] max-[860px]:grid-cols-1">
          <h2 className="text-[clamp(48px,5.3vw,74px)] leading-[0.95] tracking-[0.3px] text-[black]">
            ABOUT
            <br />
            <span className="inline-block text-[#fa6a21]">REALTY GURUKUL</span>
          </h2>
          <p className="max-w-[760px] text-[22px] leading-[1.4] text-[#3d3d3d]">
            <span className="inline-block text-[#fa6a21]">Realty Gurukul</span> is a professional real estate community focused on education, ethical
            practices, active engagement, and investor-driven opportunities through structured
            training, verified networking, and practical market insights.
          </p>
        </div>
      </div>
    </section>
  )
}
