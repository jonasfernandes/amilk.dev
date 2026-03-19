export default function Project({ title }: { title: string }) {
  return (
    <li className="group hover:text-foreground flex cursor-pointer items-center justify-between px-16 py-8 transition-all">
      <h2 className="text-[50px] tracking-tighter transition-all duration-400 group-hover:-translate-x-2.5">
        {title}
      </h2>
      <span className="transition-all duration-400 group-hover:translate-x-2.5">
        Design & Development
      </span>
    </li>
  );
}
