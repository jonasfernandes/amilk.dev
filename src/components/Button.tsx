import { MouseEventHandler } from 'react';
import Magnetic from '@/components/effects/Magnetic';
import { useStickyElements } from '@/store/styckElements';

export default function Button({
  children,
  active,
  onClick,
}: {
  children: string;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const { setStickyElementsRef } = useStickyElements();

  return (
    <Magnetic>
      <button
        onClick={onClick}
        className={`cursor-pointer rounded-lg text-center px-4 py-2 text-sm font-medium ${
          active ? 'bg-primary text-white' : 'bg-background-2 text-foreground'
        }`}
        title={`View Graph for the year ${children}`}
        ref={setStickyElementsRef}
      >
        {children}
      </button>
    </Magnetic>
  );
}
