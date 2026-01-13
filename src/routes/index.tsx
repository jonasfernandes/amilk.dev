import { createFileRoute } from '@tanstack/react-router';

import Hero from '@/components/Hero';
import ContributionGraph from '@/components/GithubGraph';
import { getProfile } from '@/services/profile';
import { LocalStorage } from '@/utils/localStorage';
import { storageKeys } from '@/utils/constants/storageKeys';
import type { Profile } from '@/types/profile';

async function fetchProfile(): Promise<Profile> {
  const currentLanguage = LocalStorage.get(storageKeys.LANGUAGE);

  const tempProfile = await getProfile();
  const [description] = tempProfile.description.filter((item) => item._key === currentLanguage);

  return { ...tempProfile, description: description.value };
}

export const Route = createFileRoute('/')({
  component: App,
  loader: fetchProfile,
});

function App() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-16 lg:mt-32 mt-20">
      <Hero />
      <ContributionGraph />
    </main>
  );
}
