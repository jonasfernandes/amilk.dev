'use client';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, RefObject } from 'react';

interface SlideProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function Slide({ children, className, delay }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInview = useInView(ref as RefObject<Element>, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start('stop');
    }
  }, [controls, isInview]);

  return (
    <motion.div
      ref={ref}
      variants={{
        start: { opacity: 0, translateY: 10 },
        stop: { opacity: 1, translateY: 0 },
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.3,
        delay: delay,
        stiffness: 0.5,
      }}
      animate={controls}
      initial="start"
    >
      <div className={className}>{children}</div>
    </motion.div>
  );
}
