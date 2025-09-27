import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <Image
              src="/images/logo.png"
              alt="VanLearn Education"
              width={60}
              height={60}
            />
            <Link href="/" className="text-2xl font-bold text-gray-900">
              <div className="text-xl text-rose-600 font-semibold">
                温学国际
              </div>
              <div className="text-sm text-gray-500 -mt-1">
                VanLearn International
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-gray-600">
            <Link
              href="/course-overview"
              className="font-semibold px-4 py-2 rounded hover:text-rose-600 hover:bg-rose-100 transition-colors"
            >
              Course Overview
            </Link>
            <Link
              href="/after-school"
              className="font-semibold px-4 py-2 rounded hover:text-rose-600 hover:bg-rose-100 transition-colors"
            >
              After School Services
            </Link>
            <Link
              href="#contact"
              className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors"
            >
              Book Trial
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
