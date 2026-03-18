export default function Community() {
  const stats = [
    {
      number: '10+',
      label: 'Founder Members',
      desc: 'Driving the vision and leadership of the Gurukul ecosystem'
    },
    {
      number: '100+',
      label: 'Active Members per Chapter',
      desc: 'Carefully curated professionals committed to growth'
    },
    {
      number: '10+',
      label: 'Mandated Projects',
      desc: 'Verified opportunities from reputed developers'
    },
    {
      number: '10,000',
      label: 'Property Propositions',
      desc: 'Access to a strong and expanding inventory pool'
    },
    {
      number: 'Unlimited',
      label: 'Learning Opportunities',
      desc: 'Continuous trainings, coaching sessions, and expert insights'
    }
  ];

  return (
    <section
      id="community"
      className="min-h-[64vh] bg-[#ececec] px-6 pb-[72px] pt-[62px] max-[860px]:min-h-0"
    >
      <div className="mx-auto max-w-[1180px]">
        
        {/* Heading */}
        <h2 className="text-[clamp(34px,4.1vw,56px)] leading-[1.07]">
          Join <span className="text-[#fa6a21]">Realty Gurukul</span> - The Emerging Real
          <br />
          Estate Growth Community
        </h2>

        {/* Subtext */}
        <p className="mt-2.5 max-w-[760px] text-[13px] text-[#474747]">
          Discover how Realty Gurukul professionals connect, collaborate, and close better opportunities through
          structured learning and powerful networking.
        </p>

        {/* Section Title */}
        <div className="mt-[42px]">
          <h3 className="text-2xl font-semibold">
            Realty Gurukul at a Glance
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="mt-[18px] grid grid-cols-5 gap-[14px] max-[1100px]:grid-cols-3 max-[860px]:grid-cols-2 max-[520px]:grid-cols-1">
          
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-h-[160px] rounded-lg border border-[#f29d6a] bg-[#f8f8f8] px-4 py-5 text-center transition hover:shadow-md"
            >
              {/* Number */}
              <div className="font-[Georgia,'Times_New_Roman',serif] text-[clamp(30px,2.4vw,40px)] leading-[1.1] text-[#fa6a21]">
                {stat.number}
              </div>

              {/* Label */}
              <div className="mt-2 text-[12px] leading-[1.3] font-semibold text-[#5f5f5f]">
                {stat.label}
              </div>

              {/* Description */}
              <p className="mt-3 text-[11px] leading-[1.4] text-[#7a7a7a]">
                {stat.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}