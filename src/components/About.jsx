export default function About() {
  return (
    <section
      id="about"
      className="grid min-h-[57vh] items-center bg-[#ececec] px-6 py-[58px] max-[860px]:min-h-0"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="grid grid-cols-[300px_1fr] items-start gap-[42px] max-[860px]:grid-cols-1">
          <h2 className="text-[clamp(32px,5.3vw,62px)] leading-[0.95] tracking-[0.3px] text-[black]">
            ABOUT
            <br />
            <span className="inline-block text-[#fa6a21]">REALTY GURUKUL</span>
          </h2>
          <p className="max-w-[860px] text-[22px] leading-[1.4] text-[#3d3d3d]">
            <span className="inline-block text-[#fa6a21]">Realty Gurukul</span>{" "}
            is a professional real estate community focused on education,
            ethical practices, and collaborative growth. It connects brokers,
            builders, and investors through structured training, verified
            opportunities, and powerful networking. The platform empowers
            members to enhance credibility, close better deals, and build
            sustainable, long-term success in the evolving real estate market.
          </p>
        </div>
      </div>
    </section>
  );
}
