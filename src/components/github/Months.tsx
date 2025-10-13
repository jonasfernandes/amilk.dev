export default function Months({ months, weeks }: { months: any; weeks: any }) {
  const getMonthOffset = (firstDay: string) => {
    const monthWeekDay = weeks.reduce((acc: number, week: any) => {
      const { weekday } = week.contributionDays.find((day: any) => day.date === firstDay) || {};
      return weekday ? acc + weekday : acc;
    }, 0);

    const monthIndex = weeks.findIndex((week: any) =>
      week.contributionDays.find((day: any) => day.date === firstDay),
    );

    const monthOffset = monthWeekDay > 0 ? monthIndex + 1 : monthIndex;

    return monthOffset > 0 ? monthOffset * 17 : 0;
  };

  return (
    <g className="">
      {months.map((month: any) => (
        <text key={month.firstDay} x={getMonthOffset(month.firstDay)} dominantBaseline="hanging">
          {month.name}
        </text>
      ))}
    </g>
  );
}
