"use client";
import { use } from "react";
import { useGetCourse } from "@/queries/course";

interface CoursePageProps {
  params: Promise<{
    courseId: string;
  }>;
}

const CoursePage = ({ params }: CoursePageProps) => {
  const { courseId } = use(params);
  const { data: course } = useGetCourse(parseInt(courseId));
  console.log(course);
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Course</h1>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Program</h1>
          <p>{course?.program.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
