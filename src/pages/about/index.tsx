import Wrapper from '@/components/Wrapper';
import { getJobs } from '@/services/jobs';
import { useQuery } from '@tanstack/react-query';
import Skeleton from './components/Skeleton';
import IndividualJob from './components/IndividualJob';
import LocomotiveScrollWrapper from '@/components/LocomotiveScrollWrapper';

export default function About() {
  const { isPending, data } = useQuery({
    queryKey: [`jobs`],
    queryFn: () => getJobs(),
    staleTime: Infinity,
  });

  return (
    <LocomotiveScrollWrapper>
      <Wrapper>
        <h1 className="text-primary mb-8 text-3xl font-bold">About Me</h1>
        <p className="text-foreground-2 mb-4">
          I&apos;m a passionate software developer with experience in building web applications
          using modern technologies. I enjoy learning new programming languages and frameworks, and
          I&apos;m always looking for ways to improve my skills.
        </p>
        <h2 className="text-foreground-2 mb-4 text-2xl font-bold">Work Experience</h2>
        <ul className="grid list-inside list-disc gap-6 md:grid-cols-2 md:gap-12">
          {isPending ? <Skeleton /> : data?.map((job) => <IndividualJob key={job._id} job={job} />)}
        </ul>
      </Wrapper>
    </LocomotiveScrollWrapper>
  );
}
