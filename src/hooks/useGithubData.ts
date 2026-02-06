import { retrieveContributionData } from '@/services/github';
import { GithubData } from '@/types/github';
import { getFakeContribution, getFakeMonths } from '@/utils/githubContribution';
import { useQuery } from '@tanstack/react-query';
import getErrorMessage from '@/utils/getError';
import { useGithubStore } from '@/store/github';

const userName = import.meta.env.VITE_GITHUB_USERNAME;

export default function useGithubData() {
  const { calendarYear } = useGithubStore();

  const to = calendarYear ? `${calendarYear}-01-01T00:00:00Z` : null;
  const from = calendarYear ? `${calendarYear}-12-31T23:59:59Z` : null;

  const { isPending, data, error } = useQuery({
    queryKey: [`githubData-${calendarYear}`, to, from],
    queryFn: () => retrieveContributionData(userName, to, from),
    staleTime: 1000 * 60 * 5, // 5 minutes cached
  });

  if (isPending) {
    return {
      loading: isPending,
      weeks: getFakeContribution(),
      months: getFakeMonths(),
    };
  }

  if (data?.errors || error) {
    return {
      error: data?.errors?.[0]?.message || getErrorMessage(error),
    };
  }

  const {
    user: {
      contributionsCollection: {
        contributionCalendar: { months, weeks, totalContributions },
      },
    },
  } = data?.data || ({} as GithubData['data']);

  return {
    loading: isPending,
    weeks,
    months,
    totalContributions,
  };
}
