import { createFileRoute } from '@tanstack/react-router';

import Hero from '@/components/Hero';
import ContributionGraph from '@/features/github';
import Projects from '@/features/projects';
import { Contact } from '@/features/contact';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <main className="sm:mt-20 lg:mt-32">
      <Hero />
      <ContributionGraph />
      <Projects />
      <Contact />
    </main>
  );
}
