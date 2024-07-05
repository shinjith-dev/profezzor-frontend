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
} from "@/components/ui/table"
import Link from "next/link";

export default function Collection() {
  return (
    <main className="mx-auto h-full max-h-[calc(100vh-76px)] w-full max-w-3xl overflow-y-auto p-5 flex flex-col gap-4">
      <GlobalAlert />
      <PageHeader title="Universities" description="Choose the university that you belong to" />
      <Table>
        <TableCaption>Can&rsquo;t find your university? Let&rsquo;s add it, <Link href="/" className="text-primary">Click here</Link>.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="px-0">Name</TableHead>
            <TableHead className="w-28 px-0">Code</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium px-0">APJ Abdul Kalam Technological Univeristy (KTU)</TableCell>
            <TableCell className="text-text-subtle px-0">KTU</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium px-0">Kannur University</TableCell>
            <TableCell className="text-text-subtle px-0">KUK</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium px-0">Calicut University</TableCell>
            <TableCell className="text-text-subtle px-0">CUK</TableCell>
          </TableRow>


        </TableBody>
      </Table>
    </main>
  );
} 
