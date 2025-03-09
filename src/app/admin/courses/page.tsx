"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Pencil, Trash, Eye } from "lucide-react";
import { useGetCourses, useDeleteCourse, Course } from "@/queries/course";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddButton from "./components/AddButton";
import dayjs from "dayjs";
import Link from "next/link";
import EditDialog from "./components/EditDialog";

export default function CoursePage() {
  const { data: courses } = useGetCourses();
  const deleteCourse = useDeleteCourse();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  const handleDelete = async () => {
    await deleteCourse.mutateAsync(deleteId!);
    setDeleteDialogOpen(false);
    setDeleteId(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Courses</h1>
        <AddButton />
      </div>

      {editingCourse && (
        <EditDialog
          initialData={editingCourse}
          onClose={() => setEditingCourse(null)}
        />
      )}

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Course</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Are you sure you want to delete this course?</p>
            <div className="flex gap-2">
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
              <Button
                variant="outline"
                onClick={() => setDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Program</TableHead>
              <TableHead>Teacher</TableHead>
              <TableHead>Comments</TableHead>
              <TableHead className="w-80">Schedule</TableHead>
              <TableHead className="text-right w-36">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses?.items.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.program.name}</TableCell>
                <TableCell>{course.teacher.name}</TableCell>
                <TableCell>{course.comment}</TableCell>
                <TableCell>
                  {course.lessons.map((lesson) => (
                    <div key={lesson.id} className="font-mono">
                      {dayjs(lesson.start_time).format("MM/DD")}{" "}
                      {dayjs(lesson.start_time).format("HH:mm")} -{" "}
                      {dayjs(lesson.end_time).format("HH:mm")}{" "}
                      {dayjs(lesson.start_time).format("ddd")}
                    </div>
                  ))}
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/admin/courses/${course.id}`}>
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setEditingCourse(course)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setDeleteDialogOpen(true);
                      setDeleteId(course.id);
                    }}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
