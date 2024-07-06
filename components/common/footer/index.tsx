import Link from "next/link";
import ModeSwitch from "./ModeSwitch";
import { Button } from "@/components/ui/button";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-screen">
      <div className="relative mx-auto max-w-4xl flex justify-between gap-4 px-5 py-3">
        <h6 className="text-sm text-text-subtle">
          Created and maintained by <Link href="https://github.com/shinjith-dev/profezzor-frontend" className="text-primary">Team Professor</Link>
        </h6>

        <ul className="flex gap-2 items-center">
          <li>
            <Link href="https://github.com/shinjith-dev/profezzor-frontend">
              <Button size="icon" className="rounded-full" variant={"ghost"}>
                <IconBrandGithub size={18} />
              </Button>
            </Link>
          </li>
          <li>
            <ModeSwitch />
          </li>
        </ul>
      </div>
    </footer>
  );
}
