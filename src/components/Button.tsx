import { MouseEventHandler } from 'react';
import Magnetic from '@/components/effects/Magnetic';
import { useStickyElements } from '@/store/styckElements';
import { motion } from 'framer-motion';

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
      <motion.button
        onClick={onClick}
        className={`w-full cursor-pointer rounded-lg text-center px-4 py-2 text-sm font-medium ${
          active ? 'bg-primary text-white' : 'bg-background-2 text-foreground'
        }`}
        title={`View Graph for the year ${children}`}
        ref={setStickyElementsRef}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
    </Magnetic>
  );
}
