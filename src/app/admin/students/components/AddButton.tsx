import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { CreateStudentDto, useCreateStudent } from "@/queries/student";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const AddButton = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<CreateStudentDto>({
    name: "",
    email: "",
    phone: "",
    comment: "",
    age: 0,
    sex: "",
  });
  const createStudent = useCreateStudent();
  const handleCreate = async () => {
    await createStudent.mutateAsync(form);
    toast.success("创建成功");
    setOpen(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      comment: "",
      age: 0,
      sex: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center">
          <Plus className="mr-2" size={18} />
          Create
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Student</DialogTitle>
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
            type="number"
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
        <Button onClick={handleCreate}>Add</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddButton;
