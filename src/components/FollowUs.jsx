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
    <main className="bg-white pb-14">

      {/* 🔥 HEADER (TALL like Connect page) */}
      <section className="bg-[#fa6a21] px-6 py-14">
        <div className="mx-auto max-w-[1180px] text-center">
          
          <p className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#ffe3ce]">
            Stay Connected
          </p>

          <h1 className="mt-2 text-[clamp(28px,4vw,48px)] font-semibold text-white">
            Follow Us
          </h1>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-[#ffd4af]" />
        </div>
      </section>

      {/* 🔥 CARDS (OVERLAP FIXED) */}
      <section className="mx-auto -mt-10 max-w-[1180px] px-6">

        <div className="grid gap-5 md:grid-cols-3">
          {socials.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-[#ffd9bd] bg-[#fffdfb] px-5 py-6 text-center shadow-md transition hover:shadow-lg"
            >
              {/* Icon */}
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3e8] ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Name */}
              <h3 className="mt-4 text-[16px] font-semibold text-[#a14607]">
                {item.name}
              </h3>

              {/* Handle */}
              <p className="mt-1 text-[13px] text-[#6f4628]">
                {item.handle}
              </p>
            </div>
          ))}
        </div>

        {/* Description BELOW cards (like proper flow) */}
        <p className="mx-auto mt-8 max-w-[520px] text-center text-[14px] leading-[1.5] text-[#7a4a2a]">
          Join our community of real estate professionals for updates, insights,
          and opportunities.
        </p>

      </section>
    </main>
  );
}