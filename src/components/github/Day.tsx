import { useGithubDataContext } from '@/context/GithubDataContext';
import { githubKeysLevel } from '@/utils/constants/githubKeys';

export default function Day({
  date,
  level,
  weekday,
  offset,
}: {
  date: string;
  level: string;
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
    ></rect>
  );
}
