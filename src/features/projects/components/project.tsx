export default function Project({ title }: { title: string }) {
  return (
    <li className="group hover:text-foreground flex cursor-pointer flex-col px-16 py-4 transition-all sm:flex-row sm:items-center sm:justify-between sm:py-8">
      <h2 className="text-5xl tracking-tighter transition-all duration-400 group-hover:-translate-x-2.5">
        {title}
      </h2>
      <span className="transition-all duration-400 group-hover:translate-x-2.5">
        Design & Development
      </span>
    </li>
  );
}
