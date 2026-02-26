import Hero from '@/components/Hero';
import ContributionGraph from '@/features/github';
import Projects from '@/features/projects';
import { Contact } from '@/features/contact';

export default function App() {
  return (
    <main className="overflow-hidden sm:mt-20 lg:mt-32">
      <Hero />
      <ContributionGraph />
      <Projects />
      <Contact />
    </main>
  );
}
