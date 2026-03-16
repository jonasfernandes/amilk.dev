import { create } from 'zustand';

type githubStore = {
  calendarYear: number | undefined;
  setCalendarYear: (year: number | undefined) => void;
};

export const useGithubStore = create<githubStore>((set) => ({
  calendarYear: undefined,
  setCalendarYear: (year) => {
    set(() => ({ calendarYear: year }));
  },
}));
