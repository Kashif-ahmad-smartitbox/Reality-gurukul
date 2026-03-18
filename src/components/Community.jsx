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
      className="min-h-[52vh] bg-white px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-14 lg:min-h-[64vh] lg:pb-[72px] lg:pt-[62px]"
    >
      <div className="mx-auto max-w-[1180px]">
        
        {/* Heading */}
        <h2 className="text-[clamp(1.8rem,4.3vw,3.5rem)] leading-[1.12]">
          Join <span className="text-[#fa6a21]">Realty Gurukul</span> - The Emerging Real{' '}
          <span className="block sm:inline">Estate Growth Community</span>
        </h2>

        {/* Subtext */}
        <p className="mt-3 max-w-[760px] text-[clamp(0.98rem,2.2vw,1.125rem)] text-[#474747]">
          Discover how Realty Gurukul professionals connect, collaborate, and close better opportunities through
          structured learning and powerful networking.
        </p>

        {/* Section Title */}
        <div className="mt-9 sm:mt-10">
          <h3 className="text-xl font-semibold sm:text-2xl">
            Realty Gurukul at a Glance
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
          
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-h-[150px] rounded-lg border border-[#f29d6a] bg-[#f8f8f8] px-4 py-4 text-center transition hover:shadow-md sm:min-h-[160px] sm:py-5"
            >
              {/* Number */}
              <div className="font-[Georgia,'Times_New_Roman',serif] text-[clamp(30px,2.4vw,40px)] leading-[1.1] text-[#fa6a21]">
                {stat.number}
              </div>

              {/* Label */}
              <div className="mt-2 text-sm font-semibold leading-[1.35] text-[#5f5f5f] sm:text-[15px]">
                {stat.label}
              </div>

              {/* Description */}
              <p className="mt-3 text-[13px] leading-[1.45] text-[#7a7a7a] sm:text-[14px]">
                {stat.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}