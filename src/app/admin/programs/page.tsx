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
import { usePrograms, useDeleteProgram, Program } from "@/queries/program";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddButton from "./components/AddButton";
import EditDialog from "./components/EditDialog";

export default function Course() {
  const { data: programs } = usePrograms();
  const deleteProgram = useDeleteProgram();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [editingProgram, setEditingProgram] = useState<Program | null>(null);

  const handleDelete = async () => {
    await deleteProgram.mutateAsync(deleteId!);
    setDeleteDialogOpen(false);
    setDeleteId(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Programs</h1>
        <AddButton />
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Program</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Are you sure you want to delete this program?</p>
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

      {editingProgram && (
        <EditDialog
          initialData={editingProgram}
          onClose={() => setEditingProgram(null)}
        />
      )}

      <div className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Program</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead className="text-right w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {programs?.items.map((program) => (
              <TableRow key={program.id}>
                <TableCell>{program.category}</TableCell>
                <TableCell>{program.name}</TableCell>
                <TableCell>{program.description}</TableCell>
                <TableCell>{program.comment}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setEditingProgram(program)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setDeleteDialogOpen(true);
                      setDeleteId(program.id);
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
