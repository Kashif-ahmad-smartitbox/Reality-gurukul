export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-45px)] bg-white px-6 pb-[52px] pt-[38px] max-[520px]:px-4">
      <section className="mx-auto max-w-[1180px]">
        <p className="text-xs font-bold tracking-[1px] text-[#fa6a21]">ABOUT GURUKUL</p>
        <h1 className="mt-[10px] text-[clamp(34px,4vw,56px)] leading-[1.07]">Purpose-Built Learning for Real Estate Professionals</h1>
        <p className="mt-[14px] max-w-[820px] text-[18px] leading-[1.45] text-[#515151]">
          Realty Gurukul is a practice-first ecosystem where ethical growth, market intelligence, and
          professional collaboration work together to produce long-term leadership.
        </p>
      </section>

      <section className="mx-auto mt-7 grid max-w-[1180px] grid-cols-3 gap-4 max-[860px]:grid-cols-1">
        <article className="rounded-[10px] border border-[#dedede] border-l-4 border-l-[#fa6a21] bg-[#f7f7f7] p-5">
          <h2 className="text-2xl font-semibold">Our Foundation</h2>
          <p className="mt-2 text-[15px] leading-[1.45] text-[#515151]">
            Structured training, value-led mentoring, and a chapter-based community model designed to
            connect builders, advisors, investors, and channel professionals.
          </p>
        </article>
        <article className="rounded-[10px] border border-[#dedede] border-l-4 border-l-[#fa6a21] bg-[#f7f7f7] p-5">
          <h2 className="text-2xl font-semibold">How We Work</h2>
          <p className="mt-2 text-[15px] leading-[1.45] text-[#515151]">
            Every initiative follows a practical cycle: learn, apply, collaborate, and review outcomes.
            This creates measurable skill growth and more reliable professional partnerships.
          </p>
        </article>
        <article className="rounded-[10px] border border-[#dedede] border-l-4 border-l-[#fa6a21] bg-[#f7f7f7] p-5">
          <h2 className="text-2xl font-semibold">Long-Term Vision</h2>
          <p className="mt-2 text-[15px] leading-[1.45] text-[#515151]">
            Build India&apos;s most trusted growth network for real estate by combining mentorship, high
            standards, and consistent opportunity pathways.
          </p>
        </article>
      </section>
    </main>
  )
}
