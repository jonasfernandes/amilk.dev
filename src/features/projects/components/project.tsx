export default function Project({ title }: { title: string }) {
  return (
    <li className="group flex cursor-pointer items-center justify-between px-16 py-8 transition-all hover:opacity-50">
      <h2 className="text-[60px] tracking-tighter transition-all duration-400 group-hover:-translate-x-2.5">
        {title}
      </h2>
      <span className="transition-all duration-400 group-hover:translate-x-2.5">
        Design & Development
      </span>
    </li>
  );
}
