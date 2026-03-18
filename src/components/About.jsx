export default function About() {
  return (
    <section
      id="about"
      className="grid min-h-[44vh] items-center bg-white px-4 py-12 sm:px-6 sm:py-14 lg:min-h-[57vh]"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="grid grid-cols-1 items-start gap-8 text-center lg:grid-cols-[280px_1fr] lg:gap-10 lg:text-left">
          {/* LEFT */}
          <h2 className="text-[clamp(1.8rem,4.8vw,3rem)] leading-[1.05] tracking-[0.3px] text-black">
            <span className="block">ABOUT</span>
            <span className="block text-[#fa6a21]">REALTY GURUKUL</span>
          </h2>

          {/* RIGHT */}
          <p className="mx-auto max-w-[900px] text-justify text-[clamp(1rem,2.4vw,1.25rem)] leading-[1.6] text-[#3d3d3d] sm:mx-0 sm:text-left">
            <span className="font-medium text-[#fa6a21]">Realty Gurukul</span>{" "}
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