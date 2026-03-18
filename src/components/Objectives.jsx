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
    <section className="min-h-[50vh] bg-white px-4 py-12 sm:px-6 sm:py-14 lg:min-h-[56vh]">
      <div className="mx-auto max-w-[1180px] space-y-5 sm:space-y-6">

        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-4 rounded-xl border border-[#ffe2cf] bg-[#fffdfb] px-4 py-5 text-center shadow-sm transition hover:shadow-md sm:flex-row sm:items-start sm:gap-5 sm:px-6 sm:py-6 sm:text-left"
          >

            {/* ICON */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fa6a21] text-white sm:h-12 sm:w-12">
              {item.icon}
            </div>

            {/* CONTENT */}
            <div>
              <h3 className="text-xl font-semibold text-black sm:text-[22px]">
                {item.title}
              </h3>

              <p className="mt-1 max-w-[900px] text-justify text-[clamp(0.95rem,2vw,1.125rem)] leading-[1.6] text-[#555] sm:text-left">
                {item.description}
              </p>

              {/* BULLETS ONLY FOR OBJECTIVE */}
              {item.points && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-left text-[clamp(0.95rem,2vw,1.125rem)] text-[#555]">
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