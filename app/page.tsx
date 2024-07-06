import GlobalAlert from "@/components/common/GlobalAlert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto h-full max-h-[calc(100vh-76px)] w-full max-w-4xl overflow-y-auto p-5 flex flex-col gap-8">
      <GlobalAlert />
      <Link href="/collection">
        <Button className="rounded-full font-medium">Browse collection</Button>
      </Link>
    </main>
  );
}
