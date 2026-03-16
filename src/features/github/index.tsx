import GitHubCalendar from '@/features/github/components/Calendar';
import Button from '@/components/Button';
import EmptyState from '@/components/EmptyState';
import { getGitHubYears } from '@/utils/githubContribution';
import Slide from '@/components/effects/Slide';
import { useTranslation } from 'react-i18next';
import { useGithubStore } from '@/features/github/store/github';
import useGithubData from '@/features/github/hook/useGithubData';
import Wrapper from '@/components/Wrapper';

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
    <Slide delay={0.6}>
      <Wrapper>
        <div className="flex flex-col gap-4">
          <p className="text-foreground-2 font-[Proxima_Nova_Bold] text-3xl">{t('github.title')}</p>
          <div className="flex flex-col gap-4 xl:flex-row">
            <div className="bg-github-container flex justify-center rounded-lg border border-zinc-200 p-4 sm:p-8 xl:grow xl:justify-center xl:px-4 dark:border-zinc-800">
              <GitHubCalendar />
            </div>
            <div className="flex flex-row justify-start gap-3 xl:flex-col">
              {years.slice(0, 5).map((year) => (
                <div key={year}>
                  <Button
                    active={calendarYear === year}
                    onClick={() => setCalendarYear(year === calendarYear ? undefined : year)}
                  >
                    {year.toString()}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </Slide>
  );
}
