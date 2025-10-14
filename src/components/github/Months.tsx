'use client';

import { useGithubDataContext } from '@/context/GithubDataContext';

export default function Months() {
  const { weeks, months } = useGithubDataContext();

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

  return (
    <g className="text-foreground">
      {months.map((month) => (
        <text
          className="fill-current text-sm"
          key={month.firstDay}
          x={getMonthOffset(month.firstDay)}
          dominantBaseline="hanging"
        >
          {month.name}
        </text>
      ))}
    </g>
  );
}
