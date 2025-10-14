import { Link } from '@tanstack/react-router';

export default function MyLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <p className="group relative w-max">
      <Link to={to}>{children}</Link>
    </p>
  );
}
