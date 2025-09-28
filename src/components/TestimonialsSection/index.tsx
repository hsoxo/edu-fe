"use client"
import dynamic from "next/dynamic"

// 动态导入，禁用 SSR
const TestimonialsSection = dynamic(() => import("./Components"), {
  ssr: false,
})

export default TestimonialsSection
