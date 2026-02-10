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
      <main className="mx-auto max-w-6xl px-3 sm:mt-20 sm:px-6 md:px-16 lg:mt-32">
        <Hero />
        <ContributionGraph />
      </main>
    </QueryClientProvider>
  );
}
