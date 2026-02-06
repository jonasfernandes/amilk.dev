import { useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function Magnetic({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const {
      height = 0,
      width = 0,
      left = 0,
      top = 0,
      right = 0,
      bottom = 0,
    } = ref.current?.getBoundingClientRect() || {};

    if (left && top) {
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    } else {
      const middleX = clientX - (right + width / 2);
      const middleY = clientY - (bottom + height / 2);
      setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      className={className}
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 350, damping: 5, mass: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
