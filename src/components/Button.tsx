import { MouseEventHandler, useEffect, useRef } from 'react';
import Magnetic from '@/components/effects/Magnetic';
import gsap from 'gsap';

export default function Button({
  children,
  active,
  onClick,
}: {
  children: string;
  active?: boolean;
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

  return (
    <Magnetic>
      <button
        className={`relative w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 py-2 text-center ${
          active ? 'bg-primary text-white' : 'bg-background-2 text-foreground'
        } transition-colors duration-400 ease-in hover:text-white`}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        onClick={onClick}
        title={`View Graph for the year ${children}`}
      >
        <p className="relative z-10 text-sm font-medium">{children}</p>
        <div
          ref={circle}
          className="bg-primary absolute top-full left-1/2 h-[150%] w-full -translate-x-1/2 transform rounded-[50%]"
        ></div>
      </button>
    </Magnetic>
  );
}
