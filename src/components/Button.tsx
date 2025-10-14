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
      className={`cursor-pointer rounded-lg text-center px-4 py-2 text-sm font-medium ${
        active ? 'bg-primary text-white' : 'bg-background text-foreground'
      }`}
      title={`View Graph for the year ${children}`}
    >
      {children}
    </button>
  );
}
