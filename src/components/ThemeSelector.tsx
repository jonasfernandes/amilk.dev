"use client";
import { useEffect, useState } from "react";
import SunIcon from "@/assets/icons/sun";
import MoonIcon from "@/assets/icons/moon";
import { LocalStorage } from "@/utils/localStorage";
import { storageKeys } from "@/utils/constants/storageKeys";

export default function ThemeSelector() {
  const [theme, setTheme] = useState('')
  const [hasMounted, setHasMounted] = useState(false);

  function updateTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }

    if (theme) {
      LocalStorage.set(storageKeys.THEME, theme === 'dark' ? 'dark' : 'light')
    }
  }, [theme])

  useEffect(() => {
    const localTheme = LocalStorage.get(storageKeys.THEME)

    if (localTheme) {
      setTheme(localTheme)
    }

    setHasMounted(true)
  }, []);

  if (!hasMounted)
    return (
      <span className="p-2">
        <span className="flex animate-pulse w-[22px] h-[22px] rounded-full bg-foreground/10 border border-foreground/30"></span>
      </span>
    );

  return (
    <button
      onClick={updateTheme}
      className={`cursor-pointer text-foreground rounded-full p-2 duration-300 transition-transform group: ${theme === 'dark' ? "rotate-0" : "-rotate-180"
        }`}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}