const benefits = [
  'Access curated chapter events and live sessions',
  'Peer networking with verified professionals',
  'Mentorship and practical market frameworks',
  'Collaboration opportunities across city chapters',
]

export default function MembersPage() {
  return (
    <main className="min-h-[calc(100vh-45px)] bg-[#ececec] px-6 pb-[52px] pt-[38px] max-[520px]:px-4">
      <section className="mx-auto max-w-[1180px]">
        <p className="text-xs font-bold tracking-[1px] text-[#fa6a21]">MEMBERS AREA</p>
        <h1 className="mt-[10px] text-[clamp(34px,4vw,56px)] leading-[1.07]">Membership Pathways That Reward Consistent Participation</h1>
        <p className="mt-[14px] max-w-[820px] text-[18px] leading-[1.45] text-[#515151]">
          Join a high-accountability community where members learn, contribute, and grow through
          practical engagement instead of passive consumption.
        </p>
      </section>

      <section className="mx-auto mt-[30px] max-w-[1180px] rounded-[10px] border border-[#e0e0e0] bg-[#fafafa] p-5">
        <h2 className="text-[28px] font-semibold">Member Benefits</h2>
        <ul className="mt-3 list-disc pl-5">
          {benefits.map((benefit) => (
            <li key={benefit} className="my-2 text-[15px] text-[#515151]">{benefit}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
