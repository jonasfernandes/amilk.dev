"use client";
import { useEffect, useState } from "react";
import SunIcon from "@/assets/icons/sun";
import MoonIcon from "@/assets/icons/moon";
import { LocalStorage } from "@/utils/localStorage";
import { storageKeys } from "@/utils/constants/storageKeys";

export default function ThemeSelector() {
  const [theme, setTheme] = useState(LocalStorage.get(storageKeys.THEME) ?? 'dark')

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

    LocalStorage.set(storageKeys.THEME, theme === 'dark' ? 'dark' : 'light')
  }, [theme])

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