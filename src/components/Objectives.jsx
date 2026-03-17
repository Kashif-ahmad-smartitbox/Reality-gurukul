export default function Objectives() {
  const items = [
    {
      title: 'Objective',
      description:
        'To educate, empower, and elevate real estate professionals by providing practical knowledge, ethical practices, and growth-oriented guidance for long-term success in the real estate ecosystem.'
    },
    {
      title: 'Mission',
      description:
        'To build a trusted ecosystem for real estate professionals where advisors, builders, and investors grow together through structured and influential real estate learning and networking.'
    },
    {
      title: 'Vision',
      description:
        'To build a trusted ecosystem for real estate professionals where advisors, builders, and investors grow together. To become the leading future-focused and influential real estate learning and networking platform.'
    }
  ]

  return (
    <section className="min-h-[48vh] bg-[#ececec] px-6 pb-14 max-[860px]:min-h-0">
      <div className="mx-auto max-w-[1180px]">
        <div className="mt-[10px] grid gap-[14px]">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="grid grid-cols-[48px_1fr] items-start gap-[14px] rounded-[10px] bg-[#f4f4f4] px-[18px] py-4"
            >
              <div
                className="grid h-9 w-9 place-items-center rounded-lg bg-[#fa6a21] text-[17px] font-extrabold text-white"
                aria-hidden="true"
              >
                {idx + 1}
              </div>
              <div>
                <h3 className="mb-[5px] text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-[1.45] text-[#505050]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
