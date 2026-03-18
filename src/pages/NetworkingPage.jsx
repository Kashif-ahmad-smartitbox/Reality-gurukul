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
    <main className="min-h-[calc(100vh-45px)] bg-white px-4 pb-10 pt-8 sm:px-6 sm:pb-[52px] sm:pt-[38px]">
      <section className="mx-auto max-w-[1180px]">
        <p className="text-xs font-bold tracking-[1px] text-[#fa6a21]">NETWORKING</p>
        <h1 className="mt-[10px] text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.12]">Real Relationships. Shared Momentum. Better Outcomes.</h1>
        <p className="mt-[14px] max-w-[820px] text-[clamp(1rem,2.2vw,1.125rem)] leading-[1.5] text-[#515151]">
          Networking at Realty Gurukul is structured and outcome-driven, helping members find aligned
          partners, opportunities, and trusted execution support.
        </p>
      </section>

      <section className="mx-auto mt-7 grid max-w-[1180px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tracks.map((track) => (
          <article
            className="rounded-[10px] border border-[#dedede] border-l-4 border-l-[#fa6a21] bg-[#f7f7f7] p-5"
            key={track.title}
          >
            <h2 className="text-xl font-semibold sm:text-2xl">{track.title}</h2>
            <p className="mt-2 text-sm leading-[1.6] text-[#515151] sm:text-[15px]">{track.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
