import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-[1120px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-600 mb-12">
              Founder of Vanlearn Education
            </h2>
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Certified IELTS & TOEFL Instructor | CERTESL Qualified
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              With extensive teaching and training experience, our founder has
              served as a lead Reading & Writing instructor at renowned
              institutions such as{" "}
              <span className="font-medium">
                New Oriental Education and Longre Training School in China
              </span>
              .
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              He specializes in:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <span className="font-semibold">IELTS & TOEFL:</span> Foundation,
                Intensive, and Advanced preparation
              </li>
              <li>
                <span className="font-semibold">Adult ESL and Young Learner EAL</span>
              </li>
              <li>
                <span className="font-semibold">English Reading & Writing:</span>{" "}
                Academic and creative development
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Passionate about education and research, he is dedicated to helping
              students at all levels achieve their goals with clear strategies,
              engaging lessons, and proven results.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[70%] md:w-[60%] lg:w-[75%] max-w-sm">
              <Image
                src="/founder-removebg.png"
                alt="Founder of Vanlearn International Education"
                width={400}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      <div className="border-t border-white/20 py-4">
        <div className="max-w-[1120px] mx-auto px-6 text-center text-sm text-black/80">
          © {new Date().getFullYear()} Wenxue International. All rights reserved.
        </div>
      </div>
    </div>
  );
}
