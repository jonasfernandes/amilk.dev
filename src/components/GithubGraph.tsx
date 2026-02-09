import GitHubCalendar from '@/components/github/Calendar';
import Button from '@/components/Button';
import EmptyState from './EmptyState';
import { getGitHubYears } from '@/utils/githubContribution';
import Slide from '@/components/effects/Slide';
import { useTranslation } from 'react-i18next';
import { useGithubStore } from '@/store/github';
import useGithubData from '@/hooks/useGithubData';

export default function ContributionGraph() {
  const { calendarYear, setCalendarYear } = useGithubStore();
  const { error } = useGithubData();
  const { t } = useTranslation();

  const joinYear = Number(import.meta.env.VITE_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);

  if (error) {
    return <EmptyState title="" message={error} />;
  }

  return (
    <section className="flex flex-col gap-4 lg:items-center">
      <Slide delay={0.5}>
        <p className="text-foreground-2 font-[Proxima_Nova_Bold] text-3xl">{t('github.title')}</p>
        <div className="mt-4 flex flex-col gap-4 xl:flex-row">
          <div className="bg-github-container max-h-fit max-w-fit rounded-lg border border-zinc-200 p-8 dark:border-zinc-800">
            <GitHubCalendar />
          </div>
          <div className="flex flex-row justify-start gap-3 xl:flex-col">
            {years.slice(0, 5).map((year) => (
              <Button
                key={year}
                active={calendarYear === year}
                onClick={() => setCalendarYear(year === calendarYear ? undefined : year)}
              >
                {year.toString()}
              </Button>
            ))}
          </div>
        </div>
      </Slide>
    </section>
  );
}
