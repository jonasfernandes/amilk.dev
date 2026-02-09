export default function Indicator({ pos = 'top' }: { pos?: 'top' | 'bottom' }) {
  let posTmp: string;
  switch (pos) {
    case 'top':
      posTmp = 'top-8';
      break;
    default:
      posTmp = 'top-14';
  }
  return (
    <div
      className={`bg-foreground-2 ease-[cubic-bezier(0.76, 0, 0.24, 1)] absolute left-1/2 h-1.25 w-1.25 translate-x-[-50%] scale-0 rounded-[50%] transition-transform duration-200 group-hover:scale-100 ${posTmp}`}
    ></div>
  );
}
