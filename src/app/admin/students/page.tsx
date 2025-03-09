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
import { Pencil, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddButton from "./components/AddButton";
import EditDialog from "./components/EditDialog";
import { useStudents, useDeleteStudent, Student } from "@/queries/student";

export default function StudentPage() {
  const { data: students } = useStudents();
  const deleteStudent = useDeleteStudent();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const handleDelete = async () => {
    await deleteStudent.mutateAsync(deleteId!);
    setDeleteDialogOpen(false);
    setDeleteId(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Students</h1>
        <AddButton />
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Student</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Are you sure you want to delete this student?</p>
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

      {editingStudent && (
        <EditDialog
          initialData={editingStudent}
          onClose={() => setEditingStudent(null)}
        />
      )}

      <div className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Sex</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead className="text-right w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students?.items.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.sex}</TableCell>
                <TableCell>{student.comment}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setEditingStudent(student)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setDeleteDialogOpen(true);
                      setDeleteId(student.id);
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
