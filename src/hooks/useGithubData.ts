import { retrieveContributionData } from '@/services/github';
import { useEffect, useState } from 'react';
import { GitContributionMonth, GitContributionWeek } from '@/types/github';

export default function useGithubData() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>();
  const [weeks, setWeeks] = useState<GitContributionWeek[]>([]);
  const [months, setMonths] = useState<GitContributionMonth[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [contributionYears, setContributionYears] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const userName = import.meta.env.VITE_GITHUB_USERNAME;

  const getData = async () => {
    setLoading(true);
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
    setLoading(false);

    setMonths(months);
    setWeeks(weeks);
    setTotalContributions(totalContributions);
    setContributionYears(contributionYears);
  };

  useEffect(() => {
    getData();
  }, [calendarYear]);

  return {
    loading,
    calendarYear,
    setCalendarYear,
    weeks,
    months,
    totalContributions,
    contributionYears,
  };
}
