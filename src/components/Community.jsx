export default function Community() {
  const stats = [
    { number: '10+', label: 'Founder Members' },
    { number: '100+', label: 'Active Members per Chapter' },
    { number: '10+', label: 'Mandated Projects' },
    { number: '10,000', label: 'Property Propositions' },
    { number: 'Unlimited', label: 'Learning Opportunities' }
  ]

  return (
    <section id="community" className="min-h-[64vh] bg-[#ececec] px-6 pb-[72px] pt-[62px] max-[860px]:min-h-0">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-[clamp(34px,4.1vw,56px)] leading-[1.07]">
          Join Realty Gurukul - The Emerging Real
          <br />
          Estate Growth Community
        </h2>
        <p className="mt-2.5 max-w-[760px] text-[13px] text-[#474747]">
          Discover how Realty Gurukul professionals connect, collaborate, and close better
          opportunities through structured learning and networking.
        </p>

        <div className="mt-[42px]">
          <h3 className="text-2xl font-semibold">Realty Gurukul at a Glance</h3>
        </div>

        <div className="mt-[18px] grid grid-cols-5 gap-[14px] max-[1100px]:grid-cols-3 max-[860px]:grid-cols-2 max-[520px]:grid-cols-1">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-h-[130px] rounded-lg border border-[#f29d6a] bg-[#f8f8f8] px-3 py-4 text-center"
            >
              <div className="font-[Georgia,'Times_New_Roman',serif] text-[clamp(30px,2.4vw,40px)] leading-[1.1] text-[#fa6a21]">
                {stat.number}
              </div>
              <div className="mt-2 text-[11px] leading-[1.32] text-[#5f5f5f]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
