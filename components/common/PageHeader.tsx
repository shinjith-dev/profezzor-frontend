import { Input } from '@/components/ui/input'
import { IconSearch } from '@tabler/icons-react';

type Props = {
  title: string;
  description?: string
}

export default function PageHeader({ title, description }: Props) {
  return (
    <div className="flex justify-between gap-8 items-end">
      <div className="w-max grow">
        <h3 className="text-2xl w-max sm:text-3xl md:text-4xl mb-1 font-bold">{title}</h3>
        <p className="text-sm w-max sm:text-base">{description}</p>
      </div>

      <div className='relative max-w-xs grow'>
        <Input className='w-full pl-10 rounded-full' placeholder='Search universities' />
        <IconSearch size={18} className='absolute top-1/2 left-3 -translate-y-1/2' />
      </div>
    </div>
  )
}
