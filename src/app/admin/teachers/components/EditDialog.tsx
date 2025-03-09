import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Teacher, useUpdateTeacher } from "@/queries/teacher";

const EditDialog = ({
  initialData,
  onClose,
}: {
  initialData: Teacher;
  onClose: () => void;
}) => {
  const updateTeacher = useUpdateTeacher();
  const [form, setForm] = useState<Teacher>(initialData);
  const handleUpdate = async () => {
    await updateTeacher.mutateAsync({
      ...form,
    });
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Teacher</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <Input
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
