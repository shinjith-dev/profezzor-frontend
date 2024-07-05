import { kaushanScript } from "@/utils/fonts";
import ModeSwitch from "./ModeSwitch";
import Link from "next/link";
import { IconBookUpload, IconSearch } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto flex w-full max-w-3xl justify-between p-5">
        <Link href="/" className={`${kaushanScript.className} text-xl sm:text-2xl md:text-3xl`}>
          Profezzor
        </Link>

        <ul className="flex gap-2 items-center">
          <li>
            <Button size="sm" className="gap-1 rounded-full" variant="outline">
              <IconBookUpload size={16} /> Contribute
            </Button>
          </li>
          <li>
            <Button size="icon" variant='ghost' className="rounded-full">
              <IconSearch size={20} />
            </Button>
          </li>
          <li>
            <ModeSwitch />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
