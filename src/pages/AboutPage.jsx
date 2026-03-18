export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-45px)] bg-white px-4 pb-10 pt-8 sm:px-6 sm:pb-[52px] sm:pt-[38px]">
      <section className="mx-auto max-w-[1180px]">
        <p className="text-xs font-bold tracking-[1px] text-[#fa6a21]">ABOUT GURUKUL</p>
        <h1 className="mt-[10px] text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.12]">Purpose-Built Learning for Real Estate Professionals</h1>
        <p className="mt-[14px] max-w-[820px] text-[clamp(1rem,2.2vw,1.125rem)] leading-[1.5] text-[#515151]">
          Realty Gurukul is a practice-first ecosystem where ethical growth, market intelligence, and
          professional collaboration work together to produce long-term leadership.
        </p>
      </section>

      <section className="mx-auto mt-7 grid max-w-[1180px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-[10px] border border-[#dedede] border-l-4 border-l-[#fa6a21] bg-[#f7f7f7] p-5">
          <h2 className="text-xl font-semibold sm:text-2xl">Our Foundation</h2>
          <p className="mt-2 text-sm leading-[1.6] text-[#515151] sm:text-[15px]">
            Structured training, value-led mentoring, and a chapter-based community model designed to
            connect builders, advisors, investors, and channel professionals.
          </p>
        </article>
        <article className="rounded-[10px] border border-[#dedede] border-l-4 border-l-[#fa6a21] bg-[#f7f7f7] p-5">
          <h2 className="text-xl font-semibold sm:text-2xl">How We Work</h2>
          <p className="mt-2 text-sm leading-[1.6] text-[#515151] sm:text-[15px]">
            Every initiative follows a practical cycle: learn, apply, collaborate, and review outcomes.
            This creates measurable skill growth and more reliable professional partnerships.
          </p>
        </article>
        <article className="rounded-[10px] border border-[#dedede] border-l-4 border-l-[#fa6a21] bg-[#f7f7f7] p-5">
          <h2 className="text-xl font-semibold sm:text-2xl">Long-Term Vision</h2>
          <p className="mt-2 text-sm leading-[1.6] text-[#515151] sm:text-[15px]">
            Build India&apos;s most trusted growth network for real estate by combining mentorship, high
            standards, and consistent opportunity pathways.
          </p>
        </article>
      </section>
    </main>
  )
}
