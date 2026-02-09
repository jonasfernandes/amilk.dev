import { GithubData } from '@/types/github';

const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const query = `
  query($username: String!, $from: DateTime, $to: DateTime) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          months {
            firstDay
            name
            year
          }
          weeks {
            firstDay
            contributionDays {
              contributionCount
              contributionLevel
              date
              weekday
            }
          }
        }
      }
    }
  }
`;
export async function retrieveContributionData(
  userName: string,
  from: string | null,
  to: string | null,
): Promise<GithubData> {
  const variables = {
    username: userName,
    from: from,
    to: to,
  };

  const body = {
    query,
    variables,
  };

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  return res.json();
}
