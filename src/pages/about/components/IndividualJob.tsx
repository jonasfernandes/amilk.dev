import { formatDateToLocale } from '@/utils/date';
import { urlFor } from '@/utils/sanityImageUrl';
import { Job } from '@/types/job';

export default function IndividualJob({ job }: { job: Job }) {
  const from = formatDateToLocale(job.from, { month: 'short', year: 'numeric' });
  const to = formatDateToLocale(job.to, { month: 'short', year: 'numeric' });

  const imageJobUrl = job.image ? urlFor(job.image).width(100).height(100).url() : undefined;

  return (
    <li key={job._id} className="text-foreground-2 relative flex max-w-2xl items-start gap-x-8">
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
}
