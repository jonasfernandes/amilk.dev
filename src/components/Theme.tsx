"use client";
import { useEffect, useState } from "react";
import SunIcon from "@/assets/icons/sun";
import MoonIcon from "@/assets/icons/moon";
import { LocalStorage } from "@/utils/localStorage";
import { storageKeys } from "@/utils/constants/storageKeys";

export default function Theme() {
  const [theme, setTheme] = useState('')

  function updateTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const localTheme = LocalStorage.get(storageKeys.THEME)
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

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
      className={`cursor-pointer text-primary rounded-full p-2 duration-300 transition-transform group: ${theme === 'dark' ? "-rotate-180" : "rotate-0"
        }`}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}