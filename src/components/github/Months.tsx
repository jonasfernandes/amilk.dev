import { GitContributionMonth } from '@/types/github';
import { normalizeMonthStyle } from '@/utils/date';
import { useI18nStore } from '@/store/i18n';
import useGithubData from '@/hooks/useGithubData';

export default function Months() {
  const { weeks, months } = useGithubData();
  const { currentLanguage } = useI18nStore();

  const getMonthOffset = (firstDay: string) => {
    const monthWeekDay =
      weeks?.reduce((acc: number, week) => {
        const { weekday } = week.contributionDays.find((day) => day.date === firstDay) || {};
        return weekday ? acc + weekday : acc;
      }, 0) || 0;

    const monthIndex =
      weeks?.findIndex((week) => week.contributionDays.find((day) => day.date === firstDay)) || 0;

    const monthOffset = monthWeekDay > 0 ? monthIndex + 1 : monthIndex;

    const finalPos = monthOffset * 17;
    return monthOffset > 0 ? finalPos : 0;
  };

  const getTranslatedMonth = (month: GitContributionMonth) => {
    const format = new Intl.DateTimeFormat(currentLanguage, { month: 'short', timeZone: 'UTC' });
    const result = format.format(new Date(month.firstDay));
    return normalizeMonthStyle(result);
  };

  const correctPlacementMonths = (month: GitContributionMonth) => {
    const correctOffset = getMonthOffset(month.firstDay);
    if (correctOffset > 870) {
      return 870;
    }

    return getMonthOffset(month.firstDay);
  };

  return (
    <g className="text-foreground">
      {months?.map((month, index) => (
        <text
          className="fill-current text-sm"
          key={index}
          x={correctPlacementMonths(month)}
          dominantBaseline="hanging"
        >
          {getTranslatedMonth(month)}
        </text>
      ))}
    </g>
  );
}
