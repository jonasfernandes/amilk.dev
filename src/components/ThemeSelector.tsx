'use client';
import { useEffect, useState } from 'react';
import SunIcon from '@/assets/icons/Sun';
import MoonIcon from '@/assets/icons/Moon';
import { LocalStorage } from '@/utils/localStorage';
import { storageKeys } from '@/utils/constants/storageKeys';
import Magnetic from '@/components/effects/Magnetic';

export default function ThemeSelector() {
  const [theme, setTheme] = useState('');
  const [hasMounted, setHasMounted] = useState(false);

  function updateTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }

    if (theme) {
      LocalStorage.set(storageKeys.THEME, theme === 'dark' ? 'dark' : 'light');
    }
  }, [theme]);

  useEffect(() => {
    const localTheme = LocalStorage.get(storageKeys.THEME);

    if (localTheme) {
      setTheme(localTheme);
    }

    setHasMounted(true);
  }, []);

  if (!hasMounted)
    return (
      <span className="p-2">
        <span className="bg-foreground/10 border-foreground/30 flex h-[22px] w-[22px] animate-pulse rounded-full border"></span>
      </span>
    );

  return (
    <Magnetic>
      <div>
        <button
          onClick={updateTheme}
          className={`text-foreground hover:text-primary group: cursor-pointer rounded-full p-2 transition-all duration-300 ${
            theme === 'dark' ? 'rotate-0' : '-rotate-180'
          }`}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </Magnetic>
  );
}
