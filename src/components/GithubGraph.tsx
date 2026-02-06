import GitHubCalendar from '@/components/github/Calendar';
import Button from '@/components/Button';
import { GithubDataProvider, useGithubDataContext } from '@/context/GithubDataContext';
import EmptyState from './EmptyState';
import { getGitHubYears } from '@/utils/githubContribution';
import Slide from '@/components/effects/Slide';
import { useTranslation } from 'react-i18next';

function ContributionGraphContent() {
  const { calendarYear, setCalendarYear, error } = useGithubDataContext();
  const { t } = useTranslation();

  const joinYear = Number(import.meta.env.VITE_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);

  if (error) {
    return <EmptyState title="" message={error} />;
  }

  return (
    <section className="flex flex-col gap-4 lg:items-center">
      <Slide delay={0.5}>
        <p className="font-[Proxima_Nova_Bold] text-3xl text-foreground-2">{t('github.title')}</p>
        <div className="flex flex-col xl:flex-row gap-4 mt-4">
          <div className="bg-github-container border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-fit max-h-fit">
            <GitHubCalendar />
          </div>
          <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-3">
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

export default function ContributionGraph() {
  return (
    <GithubDataProvider>
      <ContributionGraphContent />
    </GithubDataProvider>
  );
}
