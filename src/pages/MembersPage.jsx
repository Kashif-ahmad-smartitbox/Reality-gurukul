import MembershipForm from '../components/MembershipForm'

const benefits = [
  'Access curated chapter events and live sessions',
  'Peer networking with verified professionals',
  'Mentorship and practical market frameworks',
  'Collaboration opportunities across city chapters',
]

export default function MembersPage() {
  return (
    <main className="min-h-[calc(100vh-45px)] bg-[linear-gradient(180deg,#fff7f0_0%,#ffffff_26%,#fffdfb_100%)] px-4 pb-10 pt-8 sm:px-6 sm:pb-[52px] sm:pt-[38px]">
      <section className="mx-auto max-w-[1180px]">
        <p className="text-xs font-bold tracking-[1px] text-[#fa6a21]">REALTY GURUKUL MEMBERSHIP FORM</p>
        <h1 className="mt-[10px] max-w-[760px] text-[clamp(1.95rem,4vw,3.5rem)] leading-[1.08]">
          <strong>Join the Circle of Serious Real Estate Professionals</strong>
        </h1>
        <p className="mt-[14px] max-w-[760px] text-[clamp(1rem,2.2vw,1.125rem)] leading-[1.6] text-[#515151]">
          Learn. Connect. Grow. Become a part of Realty Gurukul and elevate your real estate journey.
        </p>
      </section>

      <section className="mx-auto mt-[30px] grid max-w-[1180px] gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-[28px] border border-[#ffd7bf] bg-[linear-gradient(180deg,#fa6a21_0%,#df5a17_100%)] p-6 text-white shadow-[0_22px_65px_rgba(250,106,33,0.26)] sm:p-8">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.2px] text-[#fff0e5]">
            Members Area
          </p>
          <h2 className="mt-5 text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.08]">
            Grow with a high-quality community built for action.
          </h2>
          <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-[#ffe6d6]">
            Limited Seats | High-Quality Community | First 100 Members Advantage
          </p>

          <div className="mt-8 rounded-[24px] border border-white/15 bg-black/10 p-5 backdrop-blur-sm">
            <h3 className="text-xl font-semibold">Member Benefits</h3>
            <ul className="mt-4 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-[1.6] text-[#fff0e7] sm:text-[15px]">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffd4af]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-[24px] border border-white/15 bg-white/10 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#ffe0cb]">Next Step</p>
            <p className="mt-2 text-sm leading-[1.7] text-[#fff7f2] sm:text-[15px]">
              Submit your form and proceed to registration desk today.
            </p>
          </div>
        </aside>

        <MembershipForm />
      </section>
    </main>
  )
}
