import { githubKeysLevel } from '@/utils/constants/githubKeys';
import { useTranslation } from 'react-i18next';
import { useI18nStore } from '@/store/i18n';
import useGithubData from '@/hooks/useGithubData';

export default function Day({
  date,
  level,
  count,
  weekday,
  offset,
}: {
  date: string;
  level: string;
  count?: number;
  weekday: number;
  offset: number;
}) {
  const { loading } = useGithubData();
  const { currentLanguage } = useI18nStore();
  const { t } = useTranslation();

  const getLevelColor = () => {
    switch (level) {
      case githubKeysLevel.NONE:
        return 'fill-github-level-0';
      case githubKeysLevel.FIRST_QUARTILE:
        return 'fill-github-level-1';
      case githubKeysLevel.SECOND_QUARTILE:
        return 'fill-github-level-2';
      case githubKeysLevel.THIRD_QUARTILE:
        return 'fill-github-level-3';
      case githubKeysLevel.FOURTH_QUARTILE:
        return 'fill-github-level-4';
    }
  };

  function getSuffix(day: number) {
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  function formatDateWithSuffix() {
    if (!date) return '';

    const dateWithoutTZ = new Date(date).toISOString().slice(0, -1);
    const day = new Date(dateWithoutTZ).getDate();
    const formattedDate = new Date(dateWithoutTZ).toLocaleString(currentLanguage, {
      day: 'numeric',
      month: 'short',
    });

    return `${formattedDate}${currentLanguage === 'en' ? getSuffix(day) : ''}`;
  }

  const hasWeekDay = weekday >= 0;
  const position = hasWeekDay ? weekday * 17 + 22 : 0;
  const hasLoader = loading && hasWeekDay;
  const contributionsText = count
    ? t('github.contributions_on', { count, date: formatDateWithSuffix() })
    : t('github.no_contributions_on', { date: formatDateWithSuffix() });

  return (
    <rect
      x="0"
      y={position}
      width="13"
      height="13"
      rx="2"
      ry="2"
      data-date={date}
      data-level={level}
      className={`${getLevelColor()} stroke-github-cell-stroke ${hasLoader ? 'animate-loading-git' : ''}`}
      style={{
        animationDelay: `${offset * 20 + weekday * 20}ms`,
      }}
      data-tooltip-target="tooltip-default"
    >
      <title>{contributionsText}</title>
    </rect>
  );
}
