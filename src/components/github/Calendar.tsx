'use client';

import Week from '@/components/github/Week';
import Months from '@/components/github/Months';
import { useGithubDataContext } from '@/context/GithubDataContext';
import Day from '@/components/github/Day';

export default function Calendar() {
  const { calendarYear, weeks, totalContributions, loading } = useGithubDataContext();

  const gitTotalMessage = `${loading ? '...' : totalContributions} contributions in ${calendarYear ? calendarYear : 'the last year'}`;

  return (
    <article className="flex flex-col gap-4">
      <div className="overflow-x-auto">
        <svg width="897" height="137" viewBox="0 0 897 137" className="">
          <Months />
          {weeks.map((week, index) => (
            <Week key={index} week={week} offset={index} />
          ))}
        </svg>
      </div>
      <footer className="flex flex-row justify-between">
        <div className="text-sm text-foreground">{gitTotalMessage}</div>
        <div className="flex flex-row items-center gap-1 text-sm text-foreground">
          <span className="mr-1">Less</span>
          <svg width="13" height="13">
            <Day date="" level="NONE" weekday={-1} offset={0} />
          </svg>
          <svg width="13" height="13">
            <Day date="" level="FIRST_QUARTILE" weekday={-1} offset={0} />
          </svg>
          <svg width="13" height="13">
            <Day date="" level="SECOND_QUARTILE" weekday={-1} offset={0} />
          </svg>
          <svg width="13" height="13">
            <Day date="" level="THIRD_QUARTILE" weekday={-1} offset={0} />
          </svg>
          <svg width="13" height="13">
            <Day date="" level="FOURTH_QUARTILE" weekday={-1} offset={0} />
          </svg>
          <span className="ml-1">More</span>
        </div>
      </footer>
    </article>
  );
}
