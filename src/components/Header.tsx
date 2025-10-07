import { Link } from '@tanstack/react-router'
import Theme from './Theme';

export default function Header() {

  return (
    <header className="p-4 flex gap-2 text-foreground justify-between items-center border-b border-zinc-200 dark:border-zinc-800">
      <div className="px-2 font-bold">
        <Link to="/" className='font-[Major_Mono] text-xl'>Amilk</Link>
      </div>

      <nav className="flex flex-row">
        <div className="px-2">
          <Link to="/demo/start/server-funcs">about</Link>
        </div>

        <div className="px-2">
          <Link to="/demo/start/api-request">contact</Link>
        </div>
      </nav>

      <Theme />
    </header>
  )
}
