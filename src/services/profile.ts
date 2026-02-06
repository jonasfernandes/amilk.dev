import type { Profile, ProfileApi } from '@/types/profile';
import { client } from '@/sanityClient';
import { storageKeys } from '@/utils/constants/storageKeys';
import { LocalStorage } from '@/utils/localStorage';

const PROFILE_QUERY = `*[
  _type == "profile"
][0]`;

export async function getProfile(): Promise<Profile> {
  const currentLanguage = LocalStorage.get(storageKeys.LANGUAGE);
  const profile = await client.fetch<ProfileApi>(PROFILE_QUERY);

  const [description] = profile.description.filter((item) => item._key === currentLanguage);

  return { ...profile, description: description.value };
}
