import { createFileRoute } from '@tanstack/react-router';

import { getProfile } from '@/services/profile';
import Hero from '@/components/Hero';
import ContributionGraph from '@/components/GithubGraph';

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => await getProfile(),
});

function App() {
  const profile = Route.useLoaderData();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-16 mt-10">
      <Hero profile={profile} />
      <ContributionGraph />
    </main>
  );
}
