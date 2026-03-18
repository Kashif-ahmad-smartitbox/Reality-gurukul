const tracks = [
  {
    title: 'Chapter Meetups',
    text: 'City-level gatherings for deal intelligence, relationship building, and on-ground collaboration.',
  },
  {
    title: 'Masterclass Series',
    text: 'Focused sessions with practitioners covering sales systems, legal basics, and market cycles.',
  },
  {
    title: 'Strategic Circles',
    text: 'Smaller peer groups where members solve business challenges and co-create growth plans.',
  },
]

export default function NetworkingPage() {
  return (
    <main className="min-h-[calc(100vh-45px)] bg-white px-6 pb-[52px] pt-[38px] max-[520px]:px-4">
      <section className="mx-auto max-w-[1180px]">
        <p className="text-xs font-bold tracking-[1px] text-[#fa6a21]">NETWORKING</p>
        <h1 className="mt-[10px] text-[clamp(34px,4vw,56px)] leading-[1.07]">Real Relationships. Shared Momentum. Better Outcomes.</h1>
        <p className="mt-[14px] max-w-[820px] text-[18px] leading-[1.45] text-[#515151]">
          Networking at Realty Gurukul is structured and outcome-driven, helping members find aligned
          partners, opportunities, and trusted execution support.
        </p>
      </section>

      <section className="mx-auto mt-7 grid max-w-[1180px] grid-cols-3 gap-4 max-[860px]:grid-cols-1">
        {tracks.map((track) => (
          <article
            className="rounded-[10px] border border-[#dedede] border-l-4 border-l-[#fa6a21] bg-[#f7f7f7] p-5"
            key={track.title}
          >
            <h2 className="text-2xl font-semibold">{track.title}</h2>
            <p className="mt-2 text-[15px] leading-[1.45] text-[#515151]">{track.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
