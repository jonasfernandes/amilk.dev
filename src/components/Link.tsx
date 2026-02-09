import { Link } from '@tanstack/react-router';

export default function MyLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <span className="group relative w-max">
      <Link className="px-1" to={to}>
        {children}
      </Link>
    </span>
  );
}
