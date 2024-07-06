"use client";
import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { IconSearch } from "@tabler/icons-react";

export default function GlobalSearch() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        size="icon"
        variant="ghost"
        className="rounded-full"
      >
        <IconSearch size={20} />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search course, department or anything..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {/* <CommandGroup heading="Suggestions"> */}
          {/*   <CommandItem> */}
          {/*     <Calendar className="mr-2 h-4 w-4" /> */}
          {/*     <span>Calendar</span> */}
          {/*   </CommandItem> */}
          {/*   <CommandItem> */}
          {/*     <Smile className="mr-2 h-4 w-4" /> */}
          {/*     <span>Search Emoji</span> */}
          {/*   </CommandItem> */}
          {/*   <CommandItem> */}
          {/*     <Calculator className="mr-2 h-4 w-4" /> */}
          {/*     <span>Calculator</span> */}
          {/*   </CommandItem> */}
          {/* </CommandGroup> */}
          {/* <CommandSeparator /> */}
        </CommandList>
      </CommandDialog>
    </>
  );
}
