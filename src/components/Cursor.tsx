import { useStickyElements } from '@/store/styckElements';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState('none');
  const [targetEl, setTargetEl] = useState<HTMLElement | null>(null);
  const [borderRadius, setBorderRadius] = useState('50%');
  const { stickyElementsRef } = useStickyElements();

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const cursorSize = {
    w: useMotionValue(12),
    h: useMotionValue(12),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  function handleMouseMove(e: MouseEvent) {
    const { clientX, clientY } = e;
    const target = e.target as HTMLElement;
    setTargetEl(target);

    const stickyElement = stickyElementsRef.find(
      (ref) => ref.current === target || ref.current === target?.closest('.ref-sticky'),
    );

    if (!target) return;

    const cursorType = window.getComputedStyle(target).cursor;
    setCursorType(cursorType);

    const {
      left = 0,
      top = 0,
      height = 0,
      width = 0,
    } = stickyElement?.current?.getBoundingClientRect() || {};

    const center = { x: left + width / 2, y: top + height / 2 };

    if (stickyElement) {
      const distance = { x: clientX - center.x, y: clientY - center.y };

      mouse.x.set(center.x - cursorSize.w.get() / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize.h.get() / 2 + distance.y * 0.1);
    } else {
      mouse.x.set(clientX - cursorSize.w.get() / 2);
      mouse.y.set(clientY - cursorSize.h.get() / 2);
    }
  }

  useEffect(() => {
    if (cursorType !== 'auto' && targetEl) {
      const computedStyle = window.getComputedStyle(targetEl);

      cursorSize.w.set(targetEl.offsetWidth + 16);
      cursorSize.h.set(targetEl.offsetHeight + 16);
      setBorderRadius(computedStyle.borderRadius);

      cursorRef.current?.classList.add('bg-transparent');
    } else {
      cursorSize.w.set(12);
      cursorSize.h.set(12);
      setBorderRadius('50%');

      cursorRef.current?.classList.remove('bg-transparent');
    }
  }, [cursorType]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [stickyElementsRef]);

  return (
    <motion.div
      ref={cursorRef}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={{
        width: cursorSize.w.get(),
        height: cursorSize.h.get(),
        borderRadius: borderRadius,
      }}
      className="fixed w-[12px] h-[12px] rounded-full border border-primary bg-primary transition-[background-color] duration-300 pointer-events-none"
    ></motion.div>
  );
}
