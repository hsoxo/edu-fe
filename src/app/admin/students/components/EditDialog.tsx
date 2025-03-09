import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Student, useUpdateStudent } from "@/queries/student";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const EditDialog = ({
  initialData,
  onClose,
}: {
  initialData: Student;
  onClose: () => void;
}) => {
  const updateStudent = useUpdateStudent();
  const [form, setForm] = useState<Student>(initialData);
  const handleUpdate = async () => {
    await updateStudent.mutateAsync({
      ...form,
    });
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Student</DialogTitle>
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
          <Input
            placeholder="Age"
            value={form.age || ""}
            onChange={(e) =>
              setForm({ ...form, age: parseInt(e.target.value) })
            }
          />
          <Select
            value={form.sex}
            onValueChange={(value) => setForm({ ...form, sex: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="M">Male</SelectItem>
              <SelectItem value="F">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleUpdate}>Update</Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
