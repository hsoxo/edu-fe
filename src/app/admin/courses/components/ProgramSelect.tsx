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
import { usePrograms } from "@/queries/program";

const ProgramSelect = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  const [open, setOpen] = useState(false);
  const { data: programs } = usePrograms();
  const selectedProgram = programs?.items.find(
    (program) => program.id === value
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
          {selectedProgram ? `${selectedProgram.name}` : "Select program..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[460px] p-0">
        <Command>
          <CommandInput placeholder="Search program..." />
          <CommandList>
            <CommandEmpty>No program found.</CommandEmpty>
            <CommandGroup>
              {programs?.items.map((program) => (
                <CommandItem
                  className="cursor-pointer"
                  key={program.id}
                  value={program.id.toString()}
                  onSelect={(currentValue) => {
                    onChange(parseInt(currentValue));
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === program.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-500">
                      {program.category}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-md font-medium">
                        {program.name}
                      </span>
                    </div>
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

export default ProgramSelect;
