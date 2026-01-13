import { retrieveContributionData } from '@/services/github';
import { useEffect, useState } from 'react';
import { GitContributionMonth, GitContributionWeek } from '@/types/github';
import { getFakeContribution, getFakeMonths } from '@/utils/githubContribution';
import getErrorMessage from '@/utils/getError';

export default function useGithubData() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>();
  const [weeks, setWeeks] = useState<GitContributionWeek[]>([]);
  const [months, setMonths] = useState<GitContributionMonth[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userName = import.meta.env.VITE_GITHUB_USERNAME;

  const getData = async () => {
    setWeeks(getFakeContribution());
    setMonths(getFakeMonths());
    setLoading(true);

    try {
      const { errors, data } = await retrieveContributionData(
        userName,
        calendarYear ? `${calendarYear}-01-01T00:00:00Z` : null,
        calendarYear ? `${calendarYear}-12-31T23:59:59Z` : null,
      );

      if (errors) {
        setError(errors[0].message);
        return;
      }

      const {
        user: {
          contributionsCollection: {
            contributionCalendar: { months, weeks, totalContributions },
          },
        },
      } = data;

      setMonths(months.length > 12 ? months.slice(1, months.length) : months);
      setWeeks(weeks);
      setTotalContributions(totalContributions);
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [calendarYear]);

  return {
    error,
    loading,
    calendarYear,
    setCalendarYear,
    weeks,
    months,
    totalContributions,
  };
}
