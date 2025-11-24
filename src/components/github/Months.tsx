'use client';

import { useGithubDataContext } from '@/context/GithubDataContext';
import { GitContributionMonth } from '@/types/github';
import { normalizeMonthStyle } from '@/utils/date';
import { useI18nContext } from '@/context/I18nContext';

export default function Months() {
  const { weeks, months } = useGithubDataContext();
  const { currentLanguage } = useI18nContext();

  const getMonthOffset = (firstDay: string) => {
    const monthWeekDay = weeks.reduce((acc: number, week) => {
      const { weekday } = week.contributionDays.find((day) => day.date === firstDay) || {};
      return weekday ? acc + weekday : acc;
    }, 0);

    const monthIndex = weeks.findIndex((week) =>
      week.contributionDays.find((day) => day.date === firstDay),
    );

    const monthOffset = monthWeekDay > 0 ? monthIndex + 1 : monthIndex;

    return monthOffset > 0 ? monthOffset * 17 : 0;
  };

  const getTranslatedMonth = (month: GitContributionMonth) => {
    const format = new Intl.DateTimeFormat(currentLanguage, { month: 'short', timeZone: 'UTC' });
    const result = format.format(new Date(month.firstDay));
    return normalizeMonthStyle(result);
  };

  return (
    <g className="text-foreground">
      {months.map((month, index) => (
        <text
          className="fill-current text-sm"
          key={index}
          x={getMonthOffset(month.firstDay)}
          dominantBaseline="hanging"
        >
          {getTranslatedMonth(month)}
        </text>
      ))}
    </g>
  );
}
