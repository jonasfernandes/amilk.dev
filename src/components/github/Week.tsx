import Day from '@/components/github/Day';

export default function Week({ week, offset }: { week: any; offset: number }) {
  const { contributionDays } = week;
  const position = offset * 17;
  return (
    <g transform={`translate(${position}, 0)`}>
      {contributionDays.map((day: any) => (
        <Day
          key={day.date}
          date={day.date}
          level={day.contributionLevel}
          offset={offset}
          weekday={day.weekday}
        />
      ))}
    </g>
  );
}
