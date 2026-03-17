'use client';
import { useEffect } from 'react';
import SunIcon from '@/assets/icons/Sun';
import MoonIcon from '@/assets/icons/Moon';
import Magnetic from '@/components/effects/Magnetic';
import { useThemeStore } from '@/store/theme';

export default function ThemeSelector() {
  const { theme, setTheme } = useThemeStore();

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
