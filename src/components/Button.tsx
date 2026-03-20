import { MouseEventHandler, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Magnetic from '@/components/effects/Magnetic';
import gsap from 'gsap';

export default function Button({
  children,
  active,
  customButtonStyles,
  customFontStyles,
  reverse = false,
  onClick,
}: {
  children: string;
  active?: boolean;
  customButtonStyles?: string;
  customFontStyles?: string;
  reverse?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const circle = useRef(null);
  const timeline = useRef<GSAPTimeline>(null);
  let timeoutId: ReturnType<typeof setTimeout>;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' }, 'enter')
      .to(circle.current, { top: '-150%', width: '125%', duration: 0.25 }, 'exit');
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  const colors = {
    base: reverse ? 'bg-primary' : 'bg-background-2 text-foreground',
    hover: reverse ? 'bg-background-2 text-foreground' : 'bg-primary',
  };

  return (
    <Magnetic>
      <button
        className={twMerge(
          `relative w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 py-2 text-center ${
            active ? 'bg-primary text-white' : colors.base
          } transition-colors duration-400 ease-in hover:text-white`,
          customButtonStyles,
        )}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        onClick={onClick}
        title={`View Graph for the year ${children}`}
      >
        <p className={twMerge('relative z-10 text-sm font-medium', customFontStyles)}>{children}</p>
        <div
          ref={circle}
          className={`${colors.hover} absolute top-full left-1/2 h-[150%] w-full -translate-x-1/2 transform rounded-[50%]`}
        ></div>
      </button>
    </Magnetic>
  );
}
