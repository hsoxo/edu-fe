import React from "react";
import { User, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "My daughter's reading level jumped two grades in six months — the instructors set clear goals and delivered.",
    author: "Parent of Primary Student",
  },
  {
    quote:
      "The AP tutoring and university application guidance were decisive — I received offers from three top universities.",
    author: "High School Graduate",
  },
  {
    quote:
      "Each lesson includes targeted feedback and a clear plan. The one-on-one sessions boosted my son's speaking confidence.",
    author: "Parent",
  },
  {
    quote:
      "Small class sizes, clear expectations, and regular mock tests helped me perform under pressure and improve my scores.",
    author: "Student",
  },
];

const reasons = [
  "Proven outcomes",
  "Professional educators",
  "Tailored plans",
  "Dependable logistics",
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-rose-50 py-20">
      <div className="max-w-[1120px] mx-auto px-4 grid lg:grid-cols-3 gap-12 items-start">
        {/* Left testimonials */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Parent & Student Feedback
          </h2>
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 flex-shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-700 italic mb-2">&quot;{t.quote}&quot;</p>
                  <p className="text-sm text-gray-500">{t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right reasons */}
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mb-4">
            <Star className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Why Families Trust VanLearn
          </h3>
          <ul className="text-gray-700 space-y-3 mb-6">
            {reasons.map((reason, i) => (
              <li key={i} className="flex space-x-2">
                <span className="text-rose-500">•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed">
            Real families recommend{" "}
            <span className="font-semibold text-rose-600">VanLearn</span> for
            steady, measurable improvement in their children’s academic
            performance and confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
