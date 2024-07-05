type Props = {
  title: string;
  description?: string
}

export default function PageHeader({ title, description }: Props) {
  return (
    <>
      <h3 className="text-2xl sm:text-3xl md:text-4xl mb-1 font-bold">{title}</h3>
      <p className="text-sm sm:text-base">{description}</p>
    </>
  )
}
