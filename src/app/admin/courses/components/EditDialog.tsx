import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Course, UpdateCourseDto, useUpdateCourse } from "@/queries/course";
import TeacherSelect from "./TeacherSelect";

const EditDialog = ({
  initialData,
  onClose,
}: {
  initialData: Course;
  onClose: () => void;
}) => {
  const updateCourse = useUpdateCourse();
  const [form, setForm] = useState<UpdateCourseDto | null>(null);

  useEffect(() => {
    setForm({
      id: initialData.id,
      program_id: initialData.program_id,
      teacher_id: initialData.teacher_id,
      comment: initialData.comment,
    });
  }, [initialData]);

  const handleUpdate = async () => {
    if (!form) return;
    await updateCourse.mutateAsync({
      ...form,
    });
    onClose();
  };

  if (!form) return null;
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Course</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <TeacherSelect
            value={form.teacher_id}
            onChange={(value) => setForm({ ...form, teacher_id: value })}
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
