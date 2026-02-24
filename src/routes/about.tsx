import Wrapper from '@/components/Wrapper';
import { getJobs } from '@/services/jobs';
import { formatDateToLocale } from '@/utils/date';
import { urlFor } from '@/utils/sanityImageUrl';
import { createFileRoute } from '@tanstack/react-router';
import { use } from 'react';

const getJobsPromise = getJobs();

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  const jobs = use(getJobsPromise);
  console.log(jobs);

  return (
    <Wrapper>
      <h1 className="text-primary mb-8 text-3xl font-bold">About Me</h1>
      <p className="text-foreground-2 mb-4">
        I'm a passionate software developer with experience in building web applications using
        modern technologies. I enjoy learning new programming languages and frameworks, and I'm
        always looking for ways to improve my skills.
      </p>

      <h2 className="text-foreground-2 mb-4 text-2xl font-bold">Work Experience</h2>
      <ul className="list-inside list-disc">
        {jobs.map((job) => {
          const from = formatDateToLocale(job.from, { month: 'short', year: 'numeric' });
          const to = formatDateToLocale(job.to, { month: 'short', year: 'numeric' });

          const imageJobUrl = job.image
            ? urlFor(job.image).width(100).height(100).url()
            : undefined;

          return (
            <li key={job._id} className="text-foreground-2 mb-2">
              <img className="h-24 w-24 rounded-md object-cover" src={imageJobUrl} />
              <strong>{job.title}</strong> at {job.company} ({from}) - {to}
              <p>{job.description}</p>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
