import React from "react";
import Image from "next/image";

const features = [
  {
    title: "One-to-one International Tutors",
    desc: "Native-speaking instructors provide tailored language immersion for IELTS, TOEFL, SSAT and conversational fluency. Lessons combine exam strategy, authentic materials, and progress reporting.",
    image: "/feature-tutor.jpg",
  },
  {
    title: "University Application Planning",
    desc: "Strategic oversight with individualized admission roadmaps: subject selection, standardized-test optimization, portfolio guidance, and interview preparation.",
    image: "/feature-application.jpg",
  },
  {
    title: "Integrated Arts and Language Development",
    desc: "Fine arts, guzheng/piano, and multilingual studies taught with cross-disciplinary objectives: creativity, cultural literacy, and communication skills.",
    image: "/feature-arts.jpg",
  },
  {
    title: "High-impact STEM Preparation",
    desc: "Singapore Math, advanced problem-solving and math-contest courses focus on conceptual mastery, timed practice, and competition tactics.",
    image: "/feature-stem.jpg",
  },
  {
    title: "Comprehensive After-School Support",
    desc: "Structured homework supervision, guided reading, and enrichment activities reinforce daytime learning with reliable pick-up/drop-off service.",
    image: "/feature-afterschool.jpg",
  },
  {
    title: "Premium Learning Environment",
    desc: "Small cohorts, evidence-based curricula, and blended teaching tools create an efficient, high-quality pathway from foundation skills to international success.",
    image: "/feature-environment.jpg",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-[1120px] mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-rose-600 mb-4">
            Program Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Focused outcomes, measurable progress — Our courses are designed to
            deliver clear academic gains and lifelong skills
          </p>
        </div>

        {/* Grid of features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-rose-600 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
