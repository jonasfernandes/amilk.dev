"use client";
import { useState } from "react";
import SunIcon from "@/assets/icons/sun";
import MoonIcon from "@/assets/icons/moon";

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
  }


  return (
    <button
      onClick={toggleTheme}
      className={`rounded-full p-2 duration-300 transition-transform group: ${darkMode ? "-rotate-180" : "rotate-0"
        }`}
      aria-label="Toggle Theme"
    >
      {darkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}