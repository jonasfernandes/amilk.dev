import { githubKeysLevel } from '@/utils/constants/githubKeys';

export function getGitHubYears(joinYear: number | undefined): number[] {
  if (!joinYear) return [];

  const currentYear = new Date().getFullYear();
  const duration = currentYear - joinYear + 1;
  const years = Array.from({ length: duration }, (_year, i) => currentYear - i);
  return years;
}

export function getFakeContribution() {
  return Array.from({ length: 54 }, () => ({
    firstDay: new Date().toISOString(),
    contributionDays: Array.from({ length: 7 }, (_, index) => ({
      contributionCount: Math.floor(Math.random() * 10),
      contributionLevel: githubKeysLevel.NONE,
      date: new Date().toISOString(),
      weekday: index,
    })),
  }));
}

export function getFakeMonths() {
  return Array.from({ length: 12 }, () => ({
    firstDay: new Date().toISOString(),
    name: '',
    year: 0,
  }));
}
