'use client';
import { useEffect, useState } from 'react';
import SunIcon from '@/assets/icons/Sun';
import MoonIcon from '@/assets/icons/Moon';
import { LocalStorage } from '@/utils/localStorage';
import { storageKeys } from '@/utils/constants/storageKeys';
import Magnetic from '@/components/effects/Magnetic';
import { useStickyElements } from '@/store/styckElements';

export default function ThemeSelector() {
  const [theme, setTheme] = useState('');
  const [hasMounted, setHasMounted] = useState(false);
  const { setStickyElementsRef } = useStickyElements();

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
        <span className="flex animate-pulse w-[22px] h-[22px] rounded-full bg-foreground/10 border border-foreground/30"></span>
      </span>
    );

  return (
    <Magnetic>
      <button
        onClick={updateTheme}
        className={`ref-sticky cursor-pointer text-foreground rounded-full p-2 duration-300 transition-all group: ${
          theme === 'dark' ? 'rotate-0' : '-rotate-180'
        }`}
        ref={setStickyElementsRef}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </button>
    </Magnetic>
  );
}
