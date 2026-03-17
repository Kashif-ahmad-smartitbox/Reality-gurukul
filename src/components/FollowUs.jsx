export default function FollowUs() {
  const socials = [
    {
      name: 'Facebook',
      handle: '/realtygurukul',
      iconClass: 'text-[#1877f2]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 8h-2a3 3 0 0 0-3 3v2H8v3h2v5h3v-5h2.2l.8-3H13v-1.8c0-.84.22-1.2 1.1-1.2H16V8z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      handle: '@realtygurukul',
      iconClass: 'text-[#e4405f]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      handle: 'Realty Gurukul',
      iconClass: 'text-[#ff0000]',
      icon: (
        <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12s0-3.5-.45-5.2a2.9 2.9 0 0 0-2.05-2.05C17.8 4.3 12 4.3 12 4.3s-5.8 0-7.5.45A2.9 2.9 0 0 0 2.45 6.8C2 8.5 2 12 2 12s0 3.5.45 5.2a2.9 2.9 0 0 0 2.05 2.05C6.2 19.7 12 19.7 12 19.7s5.8 0 7.5-.45a2.9 2.9 0 0 0 2.05-2.05C22 15.5 22 12 22 12z" />
          <path d="m10 15 5-3-5-3z" fill="currentColor" stroke="none" />
        </svg>
      )
    }
  ]

  return (
    <section className="bg-white px-6 py-16 max-[520px]:px-4">
      <div className="mx-auto max-w-[1180px]">
        <p className="text-center text-[13px] font-bold uppercase tracking-[1.2px] text-[#c55a17]">Stay Connected</p>
        <h2 className="mt-2 text-center text-[clamp(40px,5vw,72px)] font-black leading-[1] text-[#fa6a21]">Follow Us</h2>
        <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-[#fa6a21]" />
        <p className="mx-auto mt-6 max-w-[740px] text-center text-[clamp(18px,2.2vw,34px)] leading-[1.35] text-[#a14f1f] max-[640px]:text-[24px] max-[520px]:text-[20px]">
          Join our community of real estate professionals for daily updates and insights.
        </p>

        <div className="mt-11 grid gap-8 md:grid-cols-3 max-[767px]:gap-5">
          {socials.map((item) => (
            <article
              key={item.name}
              className="rounded-[26px] border border-[#ffd9bd] bg-white p-8 text-center shadow-[0_16px_28px_rgba(85,34,0,0.12)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 ${item.iconClass}`}>
                {item.icon}
              </div>
              <h3 className="mt-7 text-[40px] font-semibold leading-[1] text-[#a14607] max-[900px]:text-[38px]">
                {item.name}
              </h3>
              <p className="mt-2 text-[30px] font-medium leading-[1.05] text-[#6f4628] max-[900px]:text-[28px] max-[520px]:text-[22px]">
                {item.handle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
