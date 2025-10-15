import { Link } from '@tanstack/react-router';
import ThemeSelector from '@/components/ThemeSelector';
import Magnetic from '@/components/effects/Magnetic';
import MyLink from '@/components/Link';

export default function Header() {
  return (
    <header className="p-4 flex gap-2 text-foreground justify-between items-center border-b border-zinc-200 dark:border-zinc-800">
      <div className="px-2 font-bold">
        <Link to="/" className="font-[Major_Mono] text-xl">
          Amilk
        </Link>
      </div>

      <nav className="flex flex-row gap-6">
        <Magnetic>
          <MyLink to="/demo/start/server-funcs">about</MyLink>
        </Magnetic>
        <Magnetic>
          <MyLink to="/demo/start/api-request">contact</MyLink>
        </Magnetic>
      </nav>

      <ThemeSelector />
    </header>
  );
}
