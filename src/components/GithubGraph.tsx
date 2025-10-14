'use client';

import GitHubCalendar from '@/components/GithubCalendar';
import Button from '@/components/Button';
import { GithubDataProvider, useGithubDataContext } from '@/context/GithubDataContext';
import EmptyState from './EmptyState';
import { getGitHubYears } from '@/utils/calculate-years';

function ContributionGraphContent() {
  const { calendarYear, setCalendarYear, error } = useGithubDataContext();
  const joinYear = Number(import.meta.env.VITE_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);

  if (error) {
    return <EmptyState title="" message={error} />;
  }

  return (
    <div className="flex flex-col xl:flex-row gap-4 justify-center px-8">
      <div className="bg-github-container border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-fit max-h-fit">
        <GitHubCalendar />
      </div>
      <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
        {years.slice(0, 5).map((year) => (
          <Button
            key={year}
            active={calendarYear === year}
            onClick={() => setCalendarYear(year === calendarYear ? undefined : year)}
          >
            {year.toString()}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default function ContributionGraph() {
  return (
    <GithubDataProvider>
      <ContributionGraphContent />
    </GithubDataProvider>
  );
}
