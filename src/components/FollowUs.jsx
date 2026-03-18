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
    <section className="bg-white pb-14 sm:pb-16">

      {/* 🔥 HEADER */}
      <section className="relative bg-[#fa6a21] px-4 pb-10 pt-8 text-center sm:px-6 sm:pb-12 sm:pt-10">
        <div className="mx-auto max-w-[1180px]">
          
          <p className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#ffe3ce]">
            Stay Connected
          </p>

          <h2 className="mt-2 text-[clamp(1.9rem,4.5vw,3rem)] font-semibold text-white">
            Follow Us
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-[#ffd4af]" />
        </div>

        {/* 🔥 CURVED SEPARATOR */}
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
      <div className="mx-auto max-w-[1180px] px-4 pt-8 sm:px-6 sm:pt-10">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {socials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-[#ffe2cf] bg-[#fffdfb] px-5 py-6 text-center transition hover:-translate-y-1 hover:shadow-lg sm:px-6 sm:py-7"
            >
              {/* Icon */}
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3e8] sm:h-14 sm:w-14 ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Name */}
              <h3 className="mt-4 text-[15px] font-semibold text-[#a14607] sm:mt-5 sm:text-[16px]">
                {item.name}
              </h3>

              {/* Handle */}
              <p className="mt-1 text-xs text-[#6f4628] sm:text-[13px]">
                {item.handle}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-[540px] text-center text-[13px] leading-[1.65] text-[#7a4a2a] sm:mt-10 sm:text-[14px]">
          Join our community of real estate professionals for updates, insights,
          and opportunities.
        </p>

      </div>
    </section>
  );
}