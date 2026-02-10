'use client';

import Week from '@/features/github/components/Week';
import Months from '@/features/github/components/Months';
import Day from '@/features/github/components/Day';
import { useTranslation } from 'react-i18next';
import { useGithubStore } from '@/features/github/store/github';
import useGithubData from '@/features/github/hook/useGithubData';

export default function Calendar() {
  const { calendarYear } = useGithubStore();
  const { weeks, totalContributions, loading } = useGithubData();
  const { t } = useTranslation();

  const gitTranslatedMessage = calendarYear
    ? t('github.contributions_in', {
        count: totalContributions,
        year: calendarYear,
      })
    : t('github.the_last_year', { count: totalContributions });

  const gitTotalMessage = loading ? '...' : gitTranslatedMessage;

  return (
    <article className="flex max-w-full flex-col gap-4">
      <div className="overflow-x-auto">
        <svg width="898" height="139" viewBox="0 0 897 137" className="">
          <Months />
          {weeks?.map((week, index) => (
            <Week key={index} week={week} offset={index} />
          ))}
        </svg>
      </div>
      <footer className="flex flex-row justify-between">
        <div className="text-foreground text-sm">{gitTotalMessage}</div>
        <div className="text-foreground flex flex-row items-center gap-1 text-sm">
          <span className="mr-1">{t('github.less')}</span>
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
          <span className="ml-1">{t('github.more')}</span>
        </div>
      </footer>
    </article>
  );
}
