import Day from '@/components/github/Day';
import { GitContributionWeek } from '@/types/github';

export default function Week({ week, offset }: { week: GitContributionWeek; offset: number }) {
  const { contributionDays } = week;
  const position = offset * 17;
  return (
    <g transform={`translate(${position}, 0)`}>
      {contributionDays.map((day, index) => (
        <Day
          key={index}
          date={day.date}
          level={day.contributionLevel}
          count={day.contributionCount}
          offset={offset}
          weekday={day.weekday}
        />
      ))}
    </g>
  );
}
