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
    <section className="min-h-[70vh] bg-white px-6 pb-[70px] pt-20 max-[860px]:min-h-0">
      <div className="mx-auto max-w-[1180px] text-center">

        {/* Heading */}
        <h2 className="text-[clamp(42px,4.8vw,72px)] font-semibold leading-[1.05]">
          3 Steps to Become a Realty Gurukul
          <br />
          Member
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-[42px] mt-[28px] max-w-[720px] text-[15px] text-[#5f5f5f]">
          Get connected with Realty Gurukul and experience the power of structured real estate growth in action.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-3 gap-6 max-[860px]:grid-cols-1">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative px-2 pt-[10px]">

              {/* Line */}
              {idx !== steps.length - 1 && (
                <span className="absolute right-[-20px] top-[36px] w-[80px] border-t border-[#c8c8c8] max-[860px]:hidden" />
              )}

              {/* Number Circle */}
              <div className="mx-auto grid h-[64px] w-[64px] place-items-center rounded-full bg-[#fa6a21] text-[22px] font-semibold text-white shadow-md">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-[20px] font-semibold leading-[1.2] text-black">
                {step.title}
              </h3>

              {/* Orange sub text (NEW - from image) */}
              <p className="mt-2 text-[13px] font-medium text-[#fa6a21]">
                {step.sub}
              </p>

              {/* Description */}
              <p className="mt-3 text-[14px] leading-[1.6] text-[#5f5f5f] max-w-[320px] mx-auto">
                {step.description}
              </p>

            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className="mt-[50px] cursor-pointer rounded-full bg-[#fa6a21] px-[40px] py-[14px] text-sm font-semibold tracking-[0.8px] text-white transition-all hover:bg-[#eb5b15] hover:shadow-lg"
          type="button"
        >
          GET CONNECTED
        </button>

      </div>
    </section>
  )
}