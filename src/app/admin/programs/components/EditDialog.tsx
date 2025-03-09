import { useState } from "react";
import { Program, useUpdateProgram } from "@/queries/program";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const EditDialog = ({
  initialData,
  onClose,
}: {
  initialData: Program;
  onClose: () => void;
}) => {
  const updateProgram = useUpdateProgram();
  const [form, setForm] = useState<Program>(initialData);
  const handleUpdate = async () => {
    await updateProgram.mutateAsync({
      ...form,
    });
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Update Program</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <Textarea
            placeholder="Comment"
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />
        </div>
        <Button onClick={handleUpdate}>Update</Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
