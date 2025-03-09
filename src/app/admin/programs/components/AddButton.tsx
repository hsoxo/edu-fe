import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CreateProgramDto, useCreateProgram } from "@/queries/program";
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
import { Textarea } from "@/components/ui/textarea";
const AddButton = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<CreateProgramDto>({
    category: "",
    name: "",
    description: "",
    comment: "",
  });
  const createProgram = useCreateProgram();
  const handleCreate = async () => {
    await createProgram.mutateAsync(form);
    toast.success("创建成功");
    setOpen(false);
    setForm({
      category: "",
      name: "",
      description: "",
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
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Create Program</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
          <Input
            placeholder="Program"
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
        <Button onClick={handleCreate}>Add</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddButton;
