'use client';

import Week from '@/components/github/Week';
import Months from '@/components/github/Months';

export default function GithubCalendar({
  weeks,
  months,
  totalContributions,
  year,
}: {
  weeks: any;
  months: any;
  totalContributions: number;
  year: number | undefined;
}) {
  const gitTotalMessage = `${totalContributions} contributions in ${year ? year : 'the last year'}`;

  return (
    <article className="flex flex-col gap-4">
      <div className="">
        <svg width="897" height="137" viewBox="0 0 897 137" className="">
          <Months months={months} weeks={weeks} />
          {weeks.map((week: any, index) => (
            <Week key={week.firstDay} week={week} offset={index} />
          ))}
        </svg>
      </div>
      <footer className="flex flex-row justify-between">
        <div className="">{gitTotalMessage}</div>
        <div className="flex flex-row items-center">
          <span className="mr-2">Less</span>
          <svg width="13" height="13">
            <rect width="13" height="13" fill="#161b22" rx="2" ry="2"></rect>
          </svg>
          <svg width="13" height="13">
            <rect width="13" height="13" fill="#0e4429" rx="2" ry="2"></rect>
          </svg>
          <svg width="13" height="13">
            <rect width="13" height="13" fill="#006d32" rx="2" ry="2"></rect>
          </svg>
          <svg width="13" height="13">
            <rect width="13" height="13" fill="#26a641" rx="2" ry="2"></rect>
          </svg>
          <svg width="13" height="13">
            <rect width="13" height="13" fill="#39d353" rx="2" ry="2"></rect>
          </svg>
          <span className="ml-2">More</span>
        </div>
      </footer>
    </article>
  );
}
