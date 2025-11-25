import { Link } from '@tanstack/react-router';
import ThemeSelector from '@/components/ThemeSelector';
import Magnetic from '@/components/effects/Magnetic';
import MyLink from '@/components/Link';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="p-4 flex gap-2 text-foreground justify-between items-center border-b border-zinc-200 dark:border-zinc-800">
      <div className="font-bold">
        <Link to="/" className="font-[Major_Mono] text-xl px-2 py-1">
          Amilk
        </Link>
      </div>

      <nav className="flex flex-row gap-6">
        <Magnetic>
          <MyLink to="/">{t('menu.about')}</MyLink>
        </Magnetic>
        <Magnetic>
          <MyLink to="/">{t('menu.contact')}</MyLink>
        </Magnetic>
      </nav>

      <ThemeSelector />
    </header>
  );
}
