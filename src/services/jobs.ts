import { client } from '@/sanityClient';
import { Job, JobApi } from '@/types/job';
import { storageKeys } from '@/utils/constants/storageKeys';
import { getDateWithoutTZ } from '@/utils/date';
import { LocalStorage } from '@/utils/localStorage';

const PROFILE_QUERY = `*[
  _type == "jobs"
]`;

export async function getJobs(): Promise<Job[]> {
  const currentLanguage = LocalStorage.get(storageKeys.LANGUAGE);
  const jobs = await client.fetch<JobApi[]>(PROFILE_QUERY);

  const updatedJobs = jobs.map((job) => {
    const [description] = job.description.filter((item) => item._key === currentLanguage);
    return {
      ...job,
      description: description.value,
      from: getDateWithoutTZ(job.from),
      to: getDateWithoutTZ(job.to),
    };
  });

  return updatedJobs.sort((a, b) => b.from.getTime() - a.from.getTime());
}
