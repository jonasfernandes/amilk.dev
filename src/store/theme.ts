import { storageKeys } from '@/utils/constants/storageKeys';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type themeStore = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const useThemeStore = create<themeStore>()(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => {
        set(() => ({ theme }));
      },
    }),
    {
      name: storageKeys.THEME,
    },
  ),
);
