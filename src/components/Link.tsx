import { Link } from '@tanstack/react-router';

export default function MyLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <p className="group relative w-max">
      <Link to={to}>{children}</Link>
      <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-full group-hover:left-0 ease-out"></span>
    </p>
  );
}
