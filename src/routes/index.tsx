import { createFileRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Hero from '@/components/Hero';
import ContributionGraph from '@/features/github';
import { useEffect } from 'react';
import Experiences from '@/features/experiences';

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

async function activeScroll() {
  const LocomotiveScroll = (await import('locomotive-scroll')).default;
  new LocomotiveScroll();
}

function App() {
  useEffect(() => {
    activeScroll();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <main className="sm:mt-20 lg:mt-32">
        <Hero />
        <ContributionGraph />
        <Experiences />
      </main>
    </QueryClientProvider>
  );
}
