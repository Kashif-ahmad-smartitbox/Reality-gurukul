export default function Contact() {
  return (
    <section id="contact" className="grid min-h-[44vh] items-center bg-[#fa6a21] px-6 py-16 max-[860px]:min-h-0">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[1fr_minmax(260px,520px)] items-center max-[860px]:grid-cols-1">
        <div>
          <h2 className="max-w-[420px] text-[clamp(42px,5vw,72px)] leading-[0.98] text-white max-[860px]:mb-[18px]">LET&apos;S WORK TOGETHER.</h2>
        </div>

        <div className="grid gap-4 rounded-[22px] border border-[#f6d998] bg-white p-5 shadow-[0_16px_30px_rgba(101,55,0,0.22)] max-[520px]:p-4">
          <div className="rounded-2xl border-2 border-[#fff1cd] bg-[rgba(255,255,255,0.12)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]">
            <p className="inline-flex items-center rounded-full bg-[#fff1cd] px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.1px] text-[#8a4f00]">Primary Location</p>
            <h3 className="mt-3 text-xl font-semibold tracking-[0.2px] text-[black]">Mailing Address</h3>
            <p className="mt-1.5 max-w-[30ch] text-[20px] leading-[1.2] text-[#fa6a21] max-[1100px]:text-[20px] max-[520px]:text-[17px]">Address - 217 , Apollo Premier , Vijay Nagar Square  , Indore , MP 452001</p>
          </div>

          <div className="border-2 border-[#fff1cd] rounded-xl bg-[rgba(255,255,255,0.1)] px-4 py-3">
            <h3 className="text-lg font-medium text-[black]">Email Address</h3>
            <p className="mt-0.5 text-[20px] leading-[1.2] text-[#fa6a21] max-[1100px]:text-[20px] max-[520px]:text-[17px]">hello@realtyrealsite.com</p>
          </div>

          <div className="border-2 border-[#fff1cd] rounded-xl bg-[rgba(255,255,255,0.1)] px-4 py-3">
            <h3 className="text-lg font-medium text-[black]">Phone Number</h3>
            <p className="mt-0.5 text-[20px] leading-[1.2] text-[#fa6a21] max-[1100px]:text-[20px] max-[520px]:text-[17px]">(123) 456-7890</p>
          </div>
        </div>
      </div>
    </section>
  )
}
