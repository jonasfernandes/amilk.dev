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
      className={`rounded-lg text-center px-4 py-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 duration-100 text-sm font-medium ${
        active
          ? 'dark:bg-secondary-color bg-secondary-color dark:hover:border-transparent dark:text-zinc-800 text-white hover:border-transparent'
          : 'dark:bg-primary-bg bg-zinc-50 dark:text-white text-zinc-800'
      }`}
      title={`View Graph for the year ${children}`}
    >
      {children}
    </button>
  );
}
