export type GithubData = {
  data: {
    user: {
      contributionsCollection: GitContributionsCollection;
    };
  };
};

export type GitContributionsCollection = {
  contributionYears: number[];
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
  contributionLevel: string;
  date: string;
  weekday: number;
};
