import { createContext, useContext, ReactNode } from 'react';
import useGithubData from '@/hooks/useGithubData';
import { GitContributionMonth, GitContributionWeek } from '@/types/github';

type GithubDataContextType = {
  loading: boolean;
  calendarYear: number | undefined;
  setCalendarYear: (year: number | undefined) => void;
  weeks: GitContributionWeek[];
  months: GitContributionMonth[];
  totalContributions: number;
  error: string | null;
};

const GithubDataContext = createContext<GithubDataContextType | undefined>(undefined);

export function GithubDataProvider({ children }: { children: ReactNode }) {
  const githubData = useGithubData();

  return <GithubDataContext.Provider value={githubData}>{children}</GithubDataContext.Provider>;
}

export function useGithubDataContext() {
  const context = useContext(GithubDataContext);
  if (context === undefined) {
    throw new Error('useGithubDataContext must be used within a GithubDataProvider');
  }
  return context;
}
