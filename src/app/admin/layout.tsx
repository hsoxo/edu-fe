"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Toaster } from "sonner";

export default function ProjectLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-5 space-y-4">
        <h2 className="text-xl font-bold">管理后台</h2>
        <nav className="space-y-2">
          {[
            { href: "programs", label: "Programs" },
            { href: "teachers", label: "Teachers" },
            { href: "courses", label: "Courses" },
            { href: "students", label: "Students" },
            { href: "student-attendance", label: "Student Attendance" },
            { href: "approvals", label: "Approvals" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={`/admin/${href}`}
              className={`block p-2 rounded ${
                pathname.endsWith(href) ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <Toaster />
        {children}
      </main>
    </div>
  );
}
