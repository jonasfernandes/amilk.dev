import { githubKeysLevel } from '@/utils/constants/githubKeys';

export default function Cells({
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
  const getLevelColor = () => {
    switch (level) {
      case githubKeysLevel.NONE:
        return '#161b22';
      case githubKeysLevel.FIRST_QUARTILE:
        return '#0e4429';
      case githubKeysLevel.SECOND_QUARTILE:
        return '#006d32';
      case githubKeysLevel.THIRD_QUARTILE:
        return '#26a641';
      case githubKeysLevel.FOURTH_QUARTILE:
        return '#39d353';
    }
  };

  const position = weekday * 17 + 22;

  return (
    <rect
      x="0"
      y={position}
      width="13"
      height="13"
      rx="2"
      ry="2"
      fill={getLevelColor()}
      data-date={date}
      data-level={level}
      style={{
        animation: 'loadingGithub 1.75s ease-in-out infinite',
        animationDelay: `${offset * 20 + weekday * 20}ms`,
      }}
    ></rect>
  );
}
