import { create } from 'zustand';

interface githubStore {
  calendarYear: number | undefined;
  setCalendarYear: (year: number | undefined) => void;
}

export const useGithubStore = create<githubStore>((set) => ({
  calendarYear: undefined,
  setCalendarYear: (year) => {
    set(() => ({ calendarYear: year }));
  },
}));
