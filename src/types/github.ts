import { githubKeysLevel } from '@/utils/constants/githubKeys';

export type GithubData = {
  data: {
    user: {
      contributionsCollection: GitContributionsCollection;
    };
  };
  errors: {
    code: string;
    message: string;
    type: string;
  }[];
};

export type GitContributionsCollection = {
  contributionCalendar: GitContributionCalendar;
};

export type GitContributionCalendar = {
  weeks: GitContributionWeek[];
  months: GitContributionMonth[];
  totalContributions: number;
};

export type GitContributionMonth = {
  firstDay: string;
  name: string;
  year: number;
};

export type GitContributionWeek = {
  firstDay: string;
  contributionDays: GitContributionDay[];
};

export type GitContributionDay = {
  contributionCount: number;
  contributionLevel: keyof typeof githubKeysLevel;
  date: string;
  weekday: number;
};
