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

  return (
    <Wrapper>
      <h1 className="text-primary mb-8 text-3xl font-bold">About Me</h1>
      <p className="text-foreground-2 mb-4">
        I&apos;m a passionate software developer with experience in building web applications using
        modern technologies. I enjoy learning new programming languages and frameworks, and I&apos;m
        always looking for ways to improve my skills.
      </p>
      <h2 className="text-foreground-2 mb-4 text-2xl font-bold">Work Experience</h2>
      <ul className="grid list-inside list-disc gap-6 md:grid-cols-2 md:gap-12">
        {jobs.map((job) => {
          const from = formatDateToLocale(job.from, { month: 'short', year: 'numeric' });
          const to = formatDateToLocale(job.to, { month: 'short', year: 'numeric' });

          const imageJobUrl = job.image
            ? urlFor(job.image).width(100).height(100).url()
            : undefined;

          return (
            <li
              key={job._id}
              className="text-foreground-2 relative flex max-w-2xl items-start gap-x-8"
            >
              <div className="bg-github-container border-secondary after:bg-secondary relative grid min-h-20 min-w-20 place-items-center rounded-md border after:absolute after:top-[50%] after:left-19.75 after:h-px after:w-4">
                <img className="h-13 w-13 rounded-sm object-cover" src={imageJobUrl} />
              </div>
              <div className="before:bg-secondary relative flex h-full w-full flex-col items-start before:absolute before:top-0 before:-left-4 before:h-full before:w-px">
                <strong className="text-foreground font-mono text-xl tracking-tighter">
                  {job.company}
                </strong>
                <strong className="text-foreground">{job.title}</strong>
                <p className="mt-2 text-sm tracking-widest text-zinc-500 uppercase">
                  {from} - {to}
                </p>
                <p className="my-4 tracking-tight">{job.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
