import { createFileRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Hero from '@/components/Hero';
import ContributionGraph from '@/components/GithubGraph';

export const Route = createFileRoute('/')({
  component: App,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="max-w-7xl mx-auto px-6 sm:px-16 lg:mt-32 mt-20">
        <Hero />
        <ContributionGraph />
      </main>
    </QueryClientProvider>
  );
}
