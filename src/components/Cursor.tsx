import useMousePosition from '@/hooks/useMousePosition';
import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const [cursorType, setCursorType] = useState('auto');
  const cursorRef = useRef<HTMLDivElement>(null);
  const { x, y, target } = useMousePosition();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const cursorType = target?.computedStyleMap().get('cursor') as CSSUnitValue;
    setCursorType(cursorType?.value.toString());

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  }, [x, y]);

  useEffect(() => {
    if (!target) return;
    const computedStyle = window.getComputedStyle(target);

    const width = `${target.offsetWidth + 16}px`;
    const height = `${target.offsetHeight + 16}px`;

    if (cursorRef.current) {
      cursorRef.current.style.removeProperty('width');
      cursorRef.current.style.removeProperty('height');
      cursorRef.current.style.removeProperty('border-radius');
    }
    cursorRef.current?.classList.remove('bg-transparent');
    if (cursorType !== 'none') {
      if (cursorRef.current) {
        cursorRef.current.style.width = width;
        cursorRef.current.style.height = height;
        cursorRef.current.style.borderRadius = computedStyle.borderRadius;
      }
      cursorRef.current?.classList.add('bg-transparent');
    }
  }, [cursorType]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full transition-[width,height] duration-200 ease-out translate-x-[-50%] translate-y-[-50%] border border-primary bg-primary pointer-events-none"
    ></div>
  );
}
