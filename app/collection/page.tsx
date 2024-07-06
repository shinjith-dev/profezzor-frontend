import GlobalAlert from "@/components/common/GlobalAlert";
import PageHeader from "@/components/common/PageHeader";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function Collection() {
  return (
    <main className="mx-auto flex h-full max-h-[calc(100vh-76px)] w-full max-w-4xl flex-col gap-4 overflow-y-auto p-5">
      <GlobalAlert />
      <PageHeader
        title="Universities"
        description="Choose the university that you belong to"
        searchLabel="Search universities"
      />
      <Table>
        <TableCaption>
          Can&rsquo;t find your university? Let&rsquo;s add it,{" "}
          <Link href="/" className="text-primary">
            Click here
          </Link>
          .
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="px-0">Name</TableHead>
            <TableHead className="w-28 px-0">Code</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="px-0 font-medium">
              APJ Abdul Kalam Technological Univeristy (KTU)
            </TableCell>
            <TableCell className="px-0 text-text-subtle">KTU</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="px-0 font-medium">
              Kannur University
            </TableCell>
            <TableCell className="px-0 text-text-subtle">KUK</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="px-0 font-medium">
              Calicut University
            </TableCell>
            <TableCell className="px-0 text-text-subtle">CUK</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
