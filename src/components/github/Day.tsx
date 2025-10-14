import { useGithubDataContext } from '@/context/GithubDataContext';
import { githubKeysLevel } from '@/utils/constants/githubKeys';
import Tooltip from '@/components/github/Tooltip';

export default function Day({
  date,
  level,
  count,
  weekday,
  offset,
}: {
  date: string;
  level: string;
  count: number;
  weekday: number;
  offset: number;
}) {
  const { loading } = useGithubDataContext();

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
    if (day > 3 && day < 21) return 'th';
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
    const day = new Date(date).getDate();
    const month = new Date(date).toLocaleString('en-us', { month: 'short' });

    return `${month} ${day}${getSuffix(day)}`;
  }

  const hasWeekDay = weekday >= 0;
  const position = hasWeekDay ? weekday * 17 + 22 : 0;
  const hasLoader = loading && hasWeekDay;

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
      <title>{`${count ? count : 'No'} contributions on ${formatDateWithSuffix()}`}</title>
    </rect>
  );
}
