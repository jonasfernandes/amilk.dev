import Hero from '@/components/Hero';
import ContributionGraph from '@/features/github';
import Projects from '@/features/projects';
import Contact from '@/features/contact';
import LocomotiveScrollWrapper from '@/components/LocomotiveScrollWrapper';

export default function App() {
  return (
    <main className="overflow-hidden">
      <LocomotiveScrollWrapper>
        <div className="pb-36 sm:pt-20 lg:pt-32">
          <Hero />
          <ContributionGraph />
        </div>
        <Projects />
        <Contact />
      </LocomotiveScrollWrapper>
    </main>
  );
}
