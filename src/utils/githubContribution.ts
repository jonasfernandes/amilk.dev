import { githubKeysLevel } from '@/utils/constants/githubKeys';
import { memo } from 'motion/react';

export function getGitHubYears(joinYear: number | undefined): number[] {
  if (!joinYear) return [];

  const currentYear = new Date().getFullYear();
  const duration = currentYear - joinYear + 1;
  const years = Array.from({ length: duration }, (_year, i) => currentYear - i);
  return years;
}

let multipleDay = 0;

function getCorrectMonth(index: number) {
  return String(index).padStart(2, '0');
}

function getCorrectDay(index: number) {
  const day = index - 31 * multipleDay;

  if (index % 31 === 0) {
    multipleDay++;
  }
  return String(day).padStart(2, '0');
}

export const getFakeWeeks = memo(function () {
  multipleDay = 0;
  let month = 1;
  let days = 1;

  return Array.from({ length: 53 }, (_, indexArray) => ({
    firstDay: new Date().toISOString(),
    contributionDays: Array.from({ length: 7 }, (_, index) => {
      days = 7 * indexArray + (index + 1);
      const tmpMonth = month;
      if (days % 31 === 0) month++;

      return {
        contributionCount: Math.floor(Math.random() * 10),
        contributionLevel: githubKeysLevel.NONE,
        date: `${new Date().getFullYear()}-${getCorrectMonth(tmpMonth)}-${getCorrectDay(days)}T00:00:00Z`,
        weekday: index,
      };
    }),
  }));
});

export const getFakeMonths = memo(function () {
  return Array.from({ length: 12 }, (_, index: number) => ({
    firstDay: `${new Date().getFullYear()}-${getCorrectMonth(index + 1)}-01T00:00:00Z`,
    name: '',
    year: 0,
  }));
});
