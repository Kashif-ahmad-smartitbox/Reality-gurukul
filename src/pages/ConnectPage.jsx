import {
  Globe,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Linkedin
} from "lucide-react";

export default function ConnectPage() {
  return (
    <main className="bg-white pb-10">

      {/* 🔥 HERO WITH CURVE */}
      <section className="bg-[#fa6a21] px-6 pt-14 pb-20 text-center relative">
        <div className="mx-auto max-w-[1180px]">
          
          <p className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#ffe3ce]">
            Get In Touch
          </p>

          <h1 className="mt-2 text-[clamp(28px,4vw,48px)] font-semibold text-white">
            Contact Us
          </h1>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-[#ffd4af]" />
        </div>

        {/* 🔥 CURVED DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[60px]"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C300,100 1100,0 1440,60 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* 🔥 CARDS SECTION */}
      <section className="mx-auto max-w-[1180px] px-6 pt-10">

        <div className="grid gap-6 md:grid-cols-3">

          {/* Website */}
          <div className="rounded-2xl border border-[#ffe2cf] bg-[#fffdfb] px-6 py-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff3e8] text-[#fa6a21]">
              <Globe size={22} />
            </div>

            <h2 className="mt-5 text-[16px] font-semibold text-[#a14607]">
              Visit Website
            </h2>

            <p className="mt-1 text-[13px] text-[#6f4628]">
              www.realtygurukul.com
            </p>

            <p className="mt-2 text-[12px] text-[#9f6a45]">
              Explore our platform
            </p>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-[#ffe2cf] bg-[#fffdfb] px-6 py-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff3e8] text-[#fa6a21]">
              <Mail size={22} />
            </div>

            <h2 className="mt-5 text-[16px] font-semibold text-[#a14607]">
              Email Us
            </h2>

            <p className="mt-1 text-[13px] text-[#6f4628]">
              info@realtygurukul.com
            </p>

            <p className="mt-2 text-[12px] text-[#9f6a45]">
              We reply within 24 hours
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-2xl border border-[#ffe2cf] bg-[#fffdfb] px-6 py-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff3e8] text-[#fa6a21]">
              <Phone size={22} />
            </div>

            <h2 className="mt-5 text-[16px] font-semibold text-[#a14607]">
              Call Us
            </h2>

            <p className="mt-1 text-[13px] text-[#6f4628]">
              +91 88399 25211
            </p>

            <p className="mt-2 text-[12px] text-[#9f6a45]">
              Mon–Fri, 9am – 6pm
            </p>
          </div>

        </div>

        {/* 🔥 SOCIAL */}
        <section className="mt-12 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#c55a17]">
            Connect On Social Media
          </p>

          <div className="mt-4 flex justify-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffd9bd] bg-[#fff8f2] text-[#1877f2] hover:scale-105 transition">
              <Facebook size={18} />
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffd9bd] bg-[#fff8f2] text-[#e4405f] hover:scale-105 transition">
              <Instagram size={18} />
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffd9bd] bg-[#fff8f2] text-[#ff0000] hover:scale-105 transition">
              <Youtube size={18} />
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffd9bd] bg-[#fff8f2] text-[#0a66c2] hover:scale-105 transition">
              <Linkedin size={18} />
            </div>

          </div>
        </section>

      </section>
    </main>
  );
}