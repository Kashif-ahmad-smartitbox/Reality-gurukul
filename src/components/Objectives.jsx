import { Lightbulb, Target, Star } from "lucide-react";

export default function Objectives() {
  const items = [
    {
      title: "Objective",
      icon: <Lightbulb size={20} />,
      description:
        "To educate, empower, and elevate real estate professionals by providing practical knowledge, ethical practices, and growth-oriented guidance, creating a strong foundation for long-term success in the real estate ecosystem.",
      points: [
        "Structured training",
        "Builder interaction",
        "Market exposure",
        "Sales skill development"
      ]
    },
    {
      title: "Mission",
      icon: <Target size={20} />,
      description:
        "To build a trusted ecosystem for real estate professionals where advisors, builders and investors grow together. To become India's most trusted and influential real estate learning & networking platform, nurturing knowledgeable professionals who shape the future of real estate with integrity, innovation, and impact."
    },
    {
      title: "Vision",
      icon: <Star size={20} />,
      description:
        "To build a trusted ecosystem for real estate professionals where advisors, builders and investors grow together. To become India's most trusted and influential real estate learning & networking platform, nurturing knowledgeable professionals who shape the future of real estate with integrity, innovation, and impact."
    }
  ];

  return (
    <section className="min-h-[56vh] bg-[#ececec] px-6 py-[58px] max-[860px]:min-h-0">
      <div className="mx-auto max-w-[1180px] space-y-10">

        {items.map((item) => (
          <div key={item.title} className="flex gap-5 items-start">

            {/* ICON */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fa6a21] text-white shadow-sm">
              {item.icon}
            </div>

            {/* CONTENT */}
            <div>
              <h3 className="text-[20px] font-semibold text-black">
                {item.title}
              </h3>

              <p className="mt-1 text-[14px] leading-[1.6] text-[#555] max-w-[900px]">
                {item.description}
              </p>

              {/* BULLETS ONLY FOR OBJECTIVE */}
              {item.points && (
                <ul className="mt-2 list-disc pl-5 text-[14px] text-[#555] space-y-1">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}