import { createFileRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Hero from '@/components/Hero';
import ContributionGraph from '@/features/github';

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
      <main className="mx-auto mt-20 max-w-6xl px-6 sm:px-16 lg:mt-32">
        <Hero />
        <ContributionGraph />
      </main>
    </QueryClientProvider>
  );
}
