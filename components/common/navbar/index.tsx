import { kaushanScript } from "@/utils/fonts";
import Link from "next/link";
import { IconBookUpload } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import GlobalSearch from "../global-search";

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto flex w-full max-w-4xl justify-between p-5">
        <Link
          href="/"
          className={`${kaushanScript.className} text-xl sm:text-2xl md:text-3xl`}
        >
          Profezzor
        </Link>

        <ul className="flex items-center gap-2">
          <li>
            <GlobalSearch />
          </li>
          <li>
            <Button size="sm" className="gap-1 rounded-full">
              <IconBookUpload size={16} /> Contribute
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
