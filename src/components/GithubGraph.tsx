'use client';

import GitHubCalendar from '@/components/GithubCalendar';
import Button from '@/components/Button';
import { GithubDataProvider, useGithubDataContext } from '@/context/GithubDataContext';

function ContributionGraphContent() {
  const { calendarYear, setCalendarYear, contributionYears } = useGithubDataContext();

  return (
    <div className="flex xl:flex-row flex-col gap-4">
      <div className="bg-github-container border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-fit max-h-fit">
        <GitHubCalendar />
      </div>
      <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
        {contributionYears.slice(0, 5).map((year) => (
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
