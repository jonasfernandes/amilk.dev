import { Link } from '@tanstack/react-router';
import ThemeSelector from '@/components/ThemeSelector';
import Magnetic from '@/components/effects/Magnetic';
import { useTranslation } from 'react-i18next';
import Indicator from './Indicator';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="text-foreground flex items-center justify-between gap-2 p-4">
      <div className="font-bold">
        <Link to="/" className="px-2 py-1 font-[Major_Mono] text-xl">
          Amilk
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <nav className="flex flex-row">
          <Magnetic>
            <div className="group relative">
              <Link className="px-4 py-2" to="/about">
                {t('menu.about')}
              </Link>
              <Indicator />
            </div>
          </Magnetic>
          <Magnetic>
            <div className="group relative">
              <Link className="px-4 py-2" to="/">
                {t('menu.contact')}
              </Link>
              <Indicator />
            </div>
          </Magnetic>
        </nav>

        <ThemeSelector />
      </div>
    </header>
  );
}
