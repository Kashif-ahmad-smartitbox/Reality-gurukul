export default function Contact() {
  return (
    <section id="contact" className="grid min-h-[44vh] items-center bg-[#fa6a21] px-6 py-16 max-[860px]:min-h-0">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[1fr_minmax(260px,520px)] items-center max-[860px]:grid-cols-1">
        <div>
          <h2 className="max-w-[420px] text-[clamp(42px,5vw,72px)] leading-[0.98] text-white max-[860px]:mb-[18px]">LET&apos;S WORK TOGETHER.</h2>
        </div>

        <div className="grid gap-[18px] bg-[#e3be70] px-9 py-[34px] max-[520px]:p-5">
          <div>
            <h3 className="text-lg font-medium text-[#fff7e6]">Mailing Address</h3>
            <p className="mt-0.5 text-2xl leading-[1.2] text-white max-[1100px]:text-[20px] max-[520px]:text-[17px]">123 Anywhere St. Any City, ST 12345</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#fff7e6]">Email Address</h3>
            <p className="mt-0.5 text-2xl leading-[1.2] text-white max-[1100px]:text-[20px] max-[520px]:text-[17px]">hello@realtyrealsite.com</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#fff7e6]">Phone Number</h3>
            <p className="mt-0.5 text-2xl leading-[1.2] text-white max-[1100px]:text-[20px] max-[520px]:text-[17px]">(123) 456-7890</p>
          </div>
        </div>
      </div>
    </section>
  )
}
