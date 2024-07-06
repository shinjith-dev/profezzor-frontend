import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";

type Props = {
  title: string;
  description?: string;
  searchLabel?: string;
};

export default function PageHeader({
  title,
  description,
  searchLabel = "Search",
}: Props) {
  return (
    <div className="flex items-center justify-between gap-8">
      <div className="w-max grow">
        <h3 className="mb-1 w-max text-2xl font-bold sm:text-3xl md:text-4xl">
          {title}
        </h3>
        <p className="w-max text-sm sm:text-base">{description}</p>
      </div>

      <div className="relative max-w-xs grow">
        <Input
          className="w-full rounded-full pl-10"
          placeholder={searchLabel}
        />
        <IconSearch
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
