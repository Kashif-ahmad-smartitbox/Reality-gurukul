export default function ConnectPage() {
  return (
    <main className="min-h-[calc(100vh-45px)] bg-[#ececec] px-6 pb-[52px] pt-[38px] max-[520px]:px-4">
      <section className="mx-auto max-w-[1180px]">
        <p className="text-xs font-bold tracking-[1px] text-[#fa6a21]">CONNECT US</p>
        <h1 className="mt-[10px] text-[clamp(34px,4vw,56px)] leading-[1.07]">Let&apos;s Build the Next Chapter of Real Estate Leadership</h1>
        <p className="mt-[14px] max-w-[820px] text-[18px] leading-[1.45] text-[#515151]">
          Reach our team for chapter participation, collaborations, speaking requests, and strategic
          partnerships.
        </p>
      </section>

      <section className="mx-auto mt-[30px] grid max-w-[1180px] gap-[14px] rounded-[10px] bg-[#f8e4b2] p-6">
        <div>
          <h2 className="text-2xl font-semibold">Main Office</h2>
          <p className="mt-0.5 text-base text-[#3e3e3e]">123 Anywhere Street, Any City, ST 12345</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Email Address</h2>
          <p className="mt-0.5 text-base text-[#3e3e3e]">hello@realtygurukul.com</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Phone Number</h2>
          <p className="mt-0.5 text-base text-[#3e3e3e]">(123) 456-7890</p>
        </div>
      </section>
    </main>
  )
}
