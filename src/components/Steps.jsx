export default function Steps() {
  const steps = [
    {
      number: '1',
      title: 'Attend a Gurukul Preview Meet',
      description:
        'Join a focused introductory meeting to understand our community ecosystem and growth pathways.'
    },
    {
      number: '2',
      title: 'Interact with the Community',
      description:
        'Build trusted relationships with chapter members, share insights, and explore meaningful collaborations.'
    },
    {
      number: '3',
      title: 'Apply for Membership',
      description:
        'Complete your application and verification process to unlock exclusive resources and opportunities.'
    }
  ]

  return (
    <section className="min-h-[70vh] bg-[#ececec] px-6 pb-[70px] pt-20 max-[860px]:min-h-0">
      <div className="mx-auto max-w-[1180px] text-center">
        <h2 className="text-[clamp(42px,4.8vw,72px)] leading-[1.05]">
          3 Steps to Become a Realty Gurukul
          <br />
          Member
        </h2>
        <p className="mx-auto mb-[42px] mt-[18px] max-w-[720px] text-[15px] text-[#5f5f5f]">
          Get connected with Realty Gurukul and experience the power of structured real estate growth
          in action.
        </p>

        <div className="grid grid-cols-3 gap-6 max-[860px]:grid-cols-1">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative px-2 pt-[10px]">
              {idx !== steps.length - 1 && (
                <span className="absolute right-[-10px] top-[36px] w-[30px] border-t border-[#c8c8c8] max-[860px]:hidden" />
              )}
              <div className="mx-auto grid h-[52px] w-[52px] place-items-center rounded-full bg-[#fa6a21] text-[20px] font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-5 text-[21px] leading-[1.2]">{step.title}</h3>
              <p className="mt-3 text-[13px] leading-[1.5] text-[#5f5f5f]">{step.description}</p>
            </div>
          ))}
        </div>

        <button
          className="mt-[30px] cursor-pointer rounded-full bg-[#fa6a21] px-[34px] py-[13px] text-xs font-bold tracking-[0.9px] text-white transition-colors hover:bg-[#eb5b15]"
          type="button"
        >
          GET CONNECTED
        </button>
      </div>
    </section>
  )
}
