import { Link } from '@tanstack/react-router'
import Theme from './Theme';

export default function Header() {

  return (
    <header className="p-4 flex gap-2 bg-white text-black justify-between items-center">
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
