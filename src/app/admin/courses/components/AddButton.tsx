import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus, Trash } from "lucide-react";
import { toast } from "sonner";
import { CreateCourseDto, Recurring, useCreateCourse } from "@/queries/course";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProgramSelect from "./ProgramSelect";
import TeacherSelect from "./TeacherSelect";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import dayjs from "dayjs";

interface ScheduleForm {
  date: Date | undefined;
  start_time: Date | undefined;
  end_time: Date | undefined;
  recurring: Recurring | null;
  recurring_end_date: Date | undefined;
}

interface CreateCourseForm extends Omit<CreateCourseDto, "schedule"> {
  schedule: ScheduleForm[];
}

const endOfToday = new Date();
endOfToday.setHours(23, 59, 59, 999);

const at9amOfToday = new Date();
at9amOfToday.setHours(9, 0, 0, 0);

const at10amOfToday = new Date();
at10amOfToday.setHours(10, 0, 0, 0);

const AddButton = () => {
  const createCourse = useCreateCourse();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<CreateCourseForm>({
    program_id: 0,
    teacher_id: 0,
    schedule: [
      {
        date: at9amOfToday,
        start_time: at9amOfToday,
        end_time: at10amOfToday,
        recurring: null,
        recurring_end_date: undefined,
      },
    ],
  });

  const handleCreate = async () => {
    const schedule = form.schedule.map((s) => ({
      date: dayjs(s.date).format("YYYY-MM-DD"),
      start_time: dayjs(s.start_time).format("HH:mm"),
      end_time: dayjs(s.end_time).format("HH:mm"),
      recurring: s.recurring,
      recurring_end_date: s.recurring_end_date
        ? dayjs(s.recurring_end_date).format("YYYY-MM-DD")
        : null,
    }));

    await createCourse.mutateAsync({ ...form, schedule });
    toast.success("创建成功");
    setOpen(false);
    setForm({
      program_id: 0,
      teacher_id: 0,
      schedule: [],
    });
  };

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setForm({
        program_id: 0,
        teacher_id: 0,
        schedule: [],
      });
    }
  };

  const handleScheduleChange = (
    index: number,
    field: keyof ScheduleForm,
    value: string | Date | null | number
  ) => {
    setForm({
      ...form,
      schedule: form.schedule.map((s, i) =>
        i === index ? { ...s, [field]: value } : s
      ),
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="flex items-center">
          <Plus className="mr-2" size={18} />
          Create
        </Button>
      </DialogTrigger>
      <DialogContent size="xl">
        <DialogHeader>
          <DialogTitle>Create Course</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <ProgramSelect
            value={form.program_id}
            onChange={(value) => setForm({ ...form, program_id: value })}
          />
          <TeacherSelect
            value={form.teacher_id}
            onChange={(value) => setForm({ ...form, teacher_id: value })}
          />
          <div>
            <div className="text-sm font-medium pb-2">Schedule</div>
            <div className="flex flex-col gap-2">
              {form.schedule.map((schedule, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <DatePicker
                      placeholderText="Select a date"
                      selected={schedule.date}
                      onChange={(date) =>
                        handleScheduleChange(index, "date", date)
                      }
                      dateFormat="yyyy-MM-dd"
                      className="w-42 rounded-md border px-3 py-2"
                    />
                    <DatePicker
                      selected={schedule.start_time}
                      onChange={(date) =>
                        handleScheduleChange(index, "start_time", date)
                      }
                      placeholderText="Start"
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={10}
                      timeCaption="Time"
                      dateFormat="HH:mm"
                      className="w-24 rounded-md border px-3 py-2"
                      showTimeCaption={false}
                    />
                    <span> - </span>
                    <DatePicker
                      selected={schedule.end_time}
                      onChange={(date) =>
                        handleScheduleChange(index, "end_time", date)
                      }
                      placeholderText="End"
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={10}
                      timeCaption="Time"
                      minTime={schedule.start_time}
                      maxTime={endOfToday}
                      dateFormat="HH:mm"
                      className="w-24 rounded-md border px-3 py-2"
                      showTimeCaption={false}
                    />
                    <div className="w-40">
                      <Select
                        value={schedule.recurring || ""}
                        onValueChange={(value) =>
                          handleScheduleChange(index, "recurring", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Recurring Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="weekdays">Weekdays</SelectItem>
                          <SelectItem value="weekends">Weekends</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {schedule.recurring && schedule.recurring !== "none" && (
                      <DatePicker
                        placeholderText="Recurring End Date"
                        selected={schedule.recurring_end_date}
                        onChange={(date) =>
                          handleScheduleChange(
                            index,
                            "recurring_end_date",
                            date
                          )
                        }
                        dateFormat="yyyy-MM-dd"
                        className="w-42 rounded-md border px-3 py-2"
                      />
                    )}
                  </div>
                  {form.schedule.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setForm({
                          ...form,
                          schedule: form.schedule.filter((_, i) => i !== index),
                        })
                      }
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-2">
              <Button
                onClick={() =>
                  setForm({
                    ...form,
                    schedule: [
                      ...form.schedule,
                      {
                        date: undefined,
                        start_time: undefined,
                        end_time: undefined,
                        recurring: null,
                        recurring_end_date: undefined,
                      },
                    ],
                  })
                }
              >
                <Plus className="mr-2" size={18} />
                Add Schedule
              </Button>
            </div>
          </div>
          <Button onClick={handleCreate}>Add</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddButton;
