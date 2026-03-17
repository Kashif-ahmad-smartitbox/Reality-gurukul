export default function ConnectPage() {
  return (
    <main className="min-h-[calc(100vh-74px)] bg-white pb-16">
      <section className="bg-[#fa6a21] px-6 py-14 max-[520px]:px-4">
        <div className="mx-auto max-w-[1180px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#ffe3ce]">Get In Touch</p>
          <h1 className="mt-2 text-[clamp(40px,5vw,72px)] font-black leading-[1] text-white">Contact Us</h1>
          <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-[#ffd4af]" />
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-[1180px] px-6 max-[520px]:px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[24px] border border-[#ffd9bd] bg-[#fffdfb] px-6 py-8 text-center shadow-[0_14px_24px_rgba(85,34,0,0.12)]">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff3e8] text-[#fa6a21]">
              <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h2 className="mt-6 text-[40px] font-semibold leading-[1] text-[#a14607] max-[900px]:text-[34px]">Visit Website</h2>
            <p className="mt-2 text-[27px] font-semibold leading-[1.1] text-[#6f4628] max-[900px]:text-[23px]">www.realtygurukul.com</p>
            <p className="mt-3 text-[20px] text-[#9f6a45] max-[900px]:text-[18px]">Explore our platform</p>
          </article>

          <article className="rounded-[24px] border border-[#ffd9bd] bg-[#fffdfb] px-6 py-8 text-center shadow-[0_14px_24px_rgba(85,34,0,0.12)]">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff3e8] text-[#fa6a21]">
              <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </div>
            <h2 className="mt-6 text-[40px] font-semibold leading-[1] text-[#a14607] max-[900px]:text-[34px]">Email Us</h2>
            <p className="mt-2 text-[27px] font-semibold leading-[1.1] text-[#6f4628] max-[900px]:text-[23px]">info@realtygurukul.com</p>
            <p className="mt-3 text-[20px] text-[#9f6a45] max-[900px]:text-[18px]">We reply within 24 hours</p>
          </article>

          <article className="rounded-[24px] border border-[#ffd9bd] bg-[#fffdfb] px-6 py-8 text-center shadow-[0_14px_24px_rgba(85,34,0,0.12)]">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff3e8] text-[#fa6a21]">
              <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.62 2.64a2 2 0 0 1-.45 2.11L8 9.85a16 16 0 0 0 6.15 6.15l1.38-1.28a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h2 className="mt-6 text-[40px] font-semibold leading-[1] text-[#a14607] max-[900px]:text-[34px]">Call Us</h2>
            <p className="mt-2 text-[27px] font-semibold leading-[1.1] text-[#6f4628] max-[900px]:text-[23px]">+91 883 99 252 11</p>
            <p className="mt-3 text-[20px] text-[#9f6a45] max-[900px]:text-[18px]">Mon-Fri, 9am - 6pm</p>
          </article>
        </div>

        <section className="mt-10 pb-2 text-center" aria-label="Connect on social media">
          <p className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#c55a17]">Connect On Social Media</p>
          <div className="mt-5 flex justify-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ffd9bd] bg-[#fff8f2] text-[#1877f2]">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 8h-2a3 3 0 0 0-3 3v2H8v3h2v5h3v-5h2.2l.8-3H13v-1.8c0-.84.22-1.2 1.1-1.2H16V8z" />
              </svg>
            </span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ffd9bd] bg-[#fff8f2] text-[#e4405f]">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ffd9bd] bg-[#fff8f2] text-[#ff0000]">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12s0-3.5-.45-5.2a2.9 2.9 0 0 0-2.05-2.05C17.8 4.3 12 4.3 12 4.3s-5.8 0-7.5.45A2.9 2.9 0 0 0 2.45 6.8C2 8.5 2 12 2 12s0 3.5.45 5.2a2.9 2.9 0 0 0 2.05 2.05C6.2 19.7 12 19.7 12 19.7s5.8 0 7.5-.45a2.9 2.9 0 0 0 2.05-2.05C22 15.5 22 12 22 12z" />
                <path d="m10 15 5-3-5-3z" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ffd9bd] bg-[#fff8f2] text-[#0a66c2]">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
          </div>
        </section>
      </section>
    </main>
  )
}
