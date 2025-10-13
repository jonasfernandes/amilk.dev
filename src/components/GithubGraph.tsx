'use client';

import GitHubCalendar from '@/components/GithubCalendar';
import Button from '@/components/Button';

import EmptyState from '@/components/EmptyState';
import { useEffect, useState } from 'react';
import { retrieveContributionData } from '@/services/github';

export default function ContributionGraph() {
  const [weeks, setWeeks] = useState([]);
  const [months, setMonths] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [contributionYears, setContributionYears] = useState([]);
  const [calendarYear, setCalendarYear] = useState<number | undefined>();

  const userName = import.meta.env.VITE_GITHUB_USERNAME;

  const getData = async () => {
    const {
      data: {
        user: {
          contributionsCollection: {
            contributionYears,
            contributionCalendar: { months, weeks, totalContributions },
          },
        },
      },
    } = await retrieveContributionData(
      userName,
      calendarYear ? `${calendarYear}-01-01T00:00:00Z` : null,
      calendarYear ? `${calendarYear}-12-31T23:59:59Z` : null,
    );

    setMonths(months);
    setWeeks(weeks);
    setTotalContributions(totalContributions);
    setContributionYears(contributionYears);
  };

  useEffect(() => {
    getData();
  }, [calendarYear]);

  if (!userName)
    return (
      <EmptyState
        title="Unable to load Contribution Graph"
        message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
      />
    );

  return (
    <div className="flex xl:flex-row flex-col gap-4">
      <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-fit max-h-fit">
        <GitHubCalendar
          weeks={weeks}
          months={months}
          totalContributions={totalContributions}
          year={calendarYear}
        />
      </div>
      <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
        {contributionYears.slice(0, 5).map((year) => (
          <Button
            key={year}
            active={calendarYear === year}
            onClick={() => setCalendarYear(year === calendarYear ? undefined : year)}
          >
            {year}
          </Button>
        ))}
      </div>
    </div>
  );
}
