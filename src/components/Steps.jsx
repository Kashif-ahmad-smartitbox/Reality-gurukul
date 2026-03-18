export default function Steps() {
  const steps = [
    {
      number: '1',
      title: 'Attend a Gurukul Preview Meet',
      sub: 'and experience the strength of the Gurukul ecosystem',
      description:
        'Join a Realty Gurukul introductory or monthly meet to understand how our community empowers brokers, builders, and investors through structured networking and learning.'
    },
    {
      number: '2',
      title: 'Interact with the Community',
      sub: 'and discover how Gurukul can accelerate your growth',
      description:
        'Meet Founder Members and active professionals, explore verified opportunities, and see how the Gurukul platform helps you build credibility and close better deals.'
    },
    {
      number: '3',
      title: 'Apply for Membership',
      sub: 'and become part of Realty Gurukul',
      description:
        'Submit your membership application and step into a high-quality professional community built on ethics, education, and collaborative success.'
    }
  ]

  return (
    <section className="min-h-[58vh] bg-white px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:min-h-[70vh] lg:pb-[70px] lg:pt-20">
      <div className="mx-auto max-w-[1180px] text-center">

        {/* Heading */}
        <h2 className="text-[clamp(1.9rem,5vw,3.9rem)] font-semibold leading-[1.1]">
          3 Steps to Become a Realty Gurukul
          <br />
          Member
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-8 mt-5 max-w-[720px] text-[clamp(1rem,2.1vw,1.125rem)] text-[#5f5f5f] sm:mb-10 sm:mt-6">
          Get connected with Realty Gurukul and experience the power of structured real estate growth in action.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative px-2 pt-2.5">

              {/* Line */}
              {idx !== steps.length - 1 && (
                <span className="absolute right-[-20px] top-9 hidden w-[80px] border-t border-[#c8c8c8] md:block" />
              )}

              {/* Number Circle */}
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#fa6a21] text-xl font-semibold text-white shadow-md sm:h-16 sm:w-16 sm:text-[22px]">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold leading-[1.25] text-black sm:mt-6 sm:text-[20px]">
                {step.title}
              </h3>

              {/* Orange sub text (NEW - from image) */}
              <p className="mt-2 text-sm font-medium text-[#fa6a21] sm:text-[14px]">
                {step.sub}
              </p>

              {/* Description */}
              <p className="mx-auto mt-3 max-w-[320px] text-[13px] leading-[1.65] text-[#5f5f5f] sm:text-[14px]">
                {step.description}
              </p>

            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className="mt-10 cursor-pointer rounded-full bg-[#fa6a21] px-8 py-3 text-sm font-semibold tracking-[0.8px] text-white transition-all hover:bg-[#eb5b15] hover:shadow-lg sm:mt-12 sm:px-10 sm:py-[14px]"
          type="button"
        >
          GET CONNECTED
        </button>

      </div>
    </section>
  )
}