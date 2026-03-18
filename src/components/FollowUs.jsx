import { Facebook, Instagram, Youtube } from "lucide-react";

export default function FollowUs() {
  const socials = [
    {
      name: "Facebook",
      handle: "/realtygurukul",
      icon: <Facebook size={20} />,
      color: "text-[#1877f2]"
    },
    {
      name: "Instagram",
      handle: "@realtygurukul",
      icon: <Instagram size={20} />,
      color: "text-[#e4405f]"
    },
    {
      name: "YouTube",
      handle: "Realty Gurukul",
      icon: <Youtube size={20} />,
      color: "text-[#ff0000]"
    }
  ];

  return (
    <main className="bg-white pb-16">

      {/* 🔥 HEADER */}
      <section className="bg-[#fa6a21] px-6 pt-14 pb-20 text-center relative">
        <div className="mx-auto max-w-[1180px]">
          
          <p className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#ffe3ce]">
            Stay Connected
          </p>

          <h1 className="mt-2 text-[clamp(28px,4vw,48px)] font-semibold text-white">
            Follow Us
          </h1>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-[#ffd4af]" />
        </div>

        {/* 🔥 CURVED SEPARATOR */}
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
          {socials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-[#ffe2cf] bg-[#fffdfb] px-6 py-7 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff3e8] ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Name */}
              <h3 className="mt-5 text-[16px] font-semibold text-[#a14607]">
                {item.name}
              </h3>

              {/* Handle */}
              <p className="mt-1 text-[13px] text-[#6f4628]">
                {item.handle}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-[520px] text-center text-[14px] leading-[1.6] text-[#7a4a2a]">
          Join our community of real estate professionals for updates, insights,
          and opportunities.
        </p>

      </section>
    </main>
  );
}