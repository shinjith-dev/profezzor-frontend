import { kaushanScript } from "@/utils/fonts";
import ModeSwitch from "./ModeSwitch";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto flex w-full max-w-3xl justify-between p-5">
        <Link href="/" className={`${kaushanScript.className} text-3xl`}>
          Profezzor
        </Link>

        <ul>
          <li>
            <ModeSwitch />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
