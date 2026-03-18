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
    <main className="bg-white pb-10 sm:pb-12">

      {/* 🔥 HERO WITH CURVE */}
      <section className="relative bg-[#fa6a21] px-4 pb-10 pt-8 text-center sm:px-6 sm:pb-12 sm:pt-10">
        <div className="mx-auto max-w-[1180px]">
          
          <p className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#ffe3ce]">
            Get In Touch
          </p>

          <h1 className="mt-2 text-[clamp(1.9rem,4.5vw,3rem)] font-semibold text-white">
            Contact Us
          </h1>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-[#ffd4af]" />
        </div>

        {/* 🔥 CURVED DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block h-[44px] w-full sm:h-[60px]"
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
      <section className="mx-auto max-w-[1180px] px-4 pt-8 sm:px-6 sm:pt-10">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">

          {/* Website */}
          <div className="rounded-2xl border border-[#ffe2cf] bg-[#fffdfb] px-5 py-6 text-center transition hover:-translate-y-1 hover:shadow-lg sm:px-6 sm:py-7">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3e8] text-[#fa6a21] sm:h-14 sm:w-14">
              <Globe size={22} />
            </div>

            <h2 className="mt-4 text-[15px] font-semibold text-[#a14607] sm:mt-5 sm:text-[16px]">
              Visit Website
            </h2>

            <p className="mt-1 text-xs text-[#6f4628] sm:text-[13px]">
              www.realtygurukul.com
            </p>

            <p className="mt-2 text-[11px] text-[#9f6a45] sm:text-[12px]">
              Explore our platform
            </p>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-[#ffe2cf] bg-[#fffdfb] px-5 py-6 text-center transition hover:-translate-y-1 hover:shadow-lg sm:px-6 sm:py-7">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3e8] text-[#fa6a21] sm:h-14 sm:w-14">
              <Mail size={22} />
            </div>

            <h2 className="mt-4 text-[15px] font-semibold text-[#a14607] sm:mt-5 sm:text-[16px]">
              Email Us
            </h2>

            <p className="mt-1 text-xs text-[#6f4628] sm:text-[13px]">
              info@realtygurukul.com
            </p>

            <p className="mt-2 text-[11px] text-[#9f6a45] sm:text-[12px]">
              We reply within 24 hours
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-2xl border border-[#ffe2cf] bg-[#fffdfb] px-5 py-6 text-center transition hover:-translate-y-1 hover:shadow-lg sm:px-6 sm:py-7">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3e8] text-[#fa6a21] sm:h-14 sm:w-14">
              <Phone size={22} />
            </div>

            <h2 className="mt-4 text-[15px] font-semibold text-[#a14607] sm:mt-5 sm:text-[16px]">
              Call Us
            </h2>

            <p className="mt-1 text-xs text-[#6f4628] sm:text-[13px]">
              +91 88399 25211
            </p>

            <p className="mt-2 text-[11px] text-[#9f6a45] sm:text-[12px]">
              Mon–Fri, 9am – 6pm
            </p>
          </div>

        </div>

        {/* 🔥 SOCIAL */}
        <section className="mt-10 text-center sm:mt-12">
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