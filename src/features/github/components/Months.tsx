import { GitContributionMonth } from '@/types/github';
import { normalizeMonthStyle } from '@/utils/date';
import useGithubData from '@/features/github/hook/useGithubData';
import i18n from '@/i18n';

export default function Months() {
  const { weeks, months } = useGithubData();

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
    const format = new Intl.DateTimeFormat(i18n.language, { month: 'short', timeZone: 'UTC' });
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
