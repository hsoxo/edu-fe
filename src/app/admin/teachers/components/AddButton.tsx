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
import { CreateTeacherDto, useCreateTeacher } from "@/queries/teacher";

const AddButton = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<CreateTeacherDto>({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const createTeacher = useCreateTeacher();
  const handleCreate = async () => {
    await createTeacher.mutateAsync(form);
    toast.success("创建成功");
    setOpen(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      comment: "",
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
          <DialogTitle>Create Teacher</DialogTitle>
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
        <Button onClick={handleCreate}>Add</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddButton;
