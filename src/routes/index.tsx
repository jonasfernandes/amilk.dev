import { createFileRoute } from '@tanstack/react-router';

import Hero from '@/components/Hero';
import ContributionGraph from '@/components/GithubGraph';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-16 lg:mt-32 mt-20">
      <Hero />
      <ContributionGraph />
    </main>
  );
}
