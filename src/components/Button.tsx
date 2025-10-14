import { MouseEventHandler } from 'react';

export default function Button({
  children,
  active,
  onClick,
}: {
  children: string;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-lg text-center px-4 py-2 border border-transparent hover:border-background-2 transition-[border-color] duration-300 text-sm font-medium ${
        active ? 'bg-primary text-white' : 'bg-background text-foreground'
      }`}
      title={`View Graph for the year ${children}`}
    >
      {children}
    </button>
  );
}
