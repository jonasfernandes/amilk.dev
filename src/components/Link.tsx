import { Link } from '@tanstack/react-router';
import { useStickyElements } from '@/store/styckElements';

export default function MyLink({ to, children }: { to: string; children: React.ReactNode }) {
  const { setStickyElementsRef } = useStickyElements();

  return (
    <span className="group relative w-max">
      <Link className="px-1" to={to} ref={setStickyElementsRef}>
        {children}
      </Link>
    </span>
  );
}
