import { useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface AIEvaluationSearchProps {
  onSearch: (uid: string) => void;
  trainees?: { name: string; uid: string }[];
}

export function AIEvaluationSearch({
  onSearch,
  trainees = [],
}: AIEvaluationSearchProps) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSelect = (currentUid: string) => {
    console.log("Selected trainee ID:", currentUid);
    setSelectedValue(currentUid);
    setOpen(false);

    // Also set the display value to the selected trainee's name
    const selectedTrainee = trainees.find(
      (trainee) => trainee.uid === currentUid
    );
    if (selectedTrainee) {
      setInputValue(selectedTrainee.name);
    }
  };

  // Get the filtered list based on input
  const filteredTrainees = trainees.filter((trainee) =>
    trainee.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">AI Evaluation Report</h2>
      <p className="text-sm text-gray-600 mb-4">Search your Trainee</p>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between border-b border-gray-300 bg-gray-50 focus:outline-none px-3 py-2 h-auto text-left"
              >
                {selectedValue
                  ? trainees.find((trainee) => trainee.uid === selectedValue)
                      ?.name
                  : "Select a trainee"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command shouldFilter={false}>
                {" "}
                {/* Disable built-in filtering */}
                <CommandInput
                  placeholder="Search trainee by name..."
                  value={inputValue}
                  onValueChange={setInputValue}
                />
                {filteredTrainees.length === 0 ? (
                  <CommandEmpty>No trainee found.</CommandEmpty>
                ) : (
                  <CommandGroup className="max-h-64 overflow-y-auto">
                    {filteredTrainees.map((trainee) => (
                      <CommandItem
                        key={trainee.uid}
                        value={trainee.name} // Use name for matching
                        onSelect={() => handleSelect(trainee.uid)}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedValue === trainee.uid
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {trainee.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <Button
          onClick={() => onSearch(selectedValue)}
          disabled={!selectedValue}
          className={cn(
            "text-white px-6 py-2 rounded",
            selectedValue
              ? "bg-[#8C1C1C] hover:bg-[#6d1616]"
              : "bg-gray-400 cursor-not-allowed"
          )}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
