'use client';
import { useEffect } from 'react';
import SunIcon from '@/assets/icons/Sun';
import MoonIcon from '@/assets/icons/Moon';
import Magnetic from '@/components/effects/Magnetic';
import { useThemeStore } from '@/store/theme';
import { useIsMounted } from '@/hooks/useIsMounted';

export default function ThemeSelector() {
  const { theme, setTheme } = useThemeStore();
  const isMounted = useIsMounted();

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
  }, [theme]);

  if (!isMounted)
    return (
      <span className="p-2">
        <span className="bg-foreground/10 border-foreground/30 flex h-5.5 w-5.5 animate-pulse rounded-full border"></span>
      </span>
    );

  return (
    <Magnetic>
      <div className="flex">
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
