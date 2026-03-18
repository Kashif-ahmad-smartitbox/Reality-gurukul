const benefits = [
  'Access curated chapter events and live sessions',
  'Peer networking with verified professionals',
  'Mentorship and practical market frameworks',
  'Collaboration opportunities across city chapters',
]

export default function MembersPage() {
  return (
    <main className="min-h-[calc(100vh-45px)] bg-white px-4 pb-10 pt-8 sm:px-6 sm:pb-[52px] sm:pt-[38px]">
      <section className="mx-auto max-w-[1180px]">
        <p className="text-xs font-bold tracking-[1px] text-[#fa6a21]">MEMBERS AREA</p>
        <h1 className="mt-[10px] text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.12]">Membership Pathways That Reward Consistent Participation</h1>
        <p className="mt-[14px] max-w-[820px] text-[clamp(1rem,2.2vw,1.125rem)] leading-[1.5] text-[#515151]">
          Join a high-accountability community where members learn, contribute, and grow through
          practical engagement instead of passive consumption.
        </p>
      </section>

      <section className="mx-auto mt-[30px] max-w-[1180px] rounded-[10px] border border-[#e0e0e0] bg-[#fafafa] p-4 sm:p-5">
        <h2 className="text-2xl font-semibold sm:text-[28px]">Member Benefits</h2>
        <ul className="mt-3 list-disc pl-5">
          {benefits.map((benefit) => (
            <li key={benefit} className="my-2 text-sm text-[#515151] sm:text-[15px]">{benefit}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
