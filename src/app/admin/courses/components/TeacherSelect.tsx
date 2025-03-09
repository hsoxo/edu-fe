import { CommandList } from "@/components/ui/command";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { useState } from "react";
import { useTeachers } from "@/queries/teacher";

const TeacherSelect = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  const [open, setOpen] = useState(false);
  const { data: teachers } = useTeachers();
  const selectedTeacher = teachers?.items.find(
    (teacher) => teacher.id === value
  );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedTeacher ? `${selectedTeacher.name}` : "Select teacher..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[460px] p-0">
        <Command>
          <CommandInput placeholder="Search teacher..." />
          <CommandList>
            <CommandEmpty>No teacher found.</CommandEmpty>
            <CommandGroup>
              {teachers?.items.map((teacher) => (
                <CommandItem
                  className="cursor-pointer"
                  key={teacher.id}
                  value={teacher.id.toString()}
                  onSelect={(currentValue) => {
                    onChange(parseInt(currentValue));
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === teacher.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex flex-col">
                    <span className="text-md font-medium">{teacher.name}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default TeacherSelect;
