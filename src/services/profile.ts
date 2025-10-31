import type { Profile } from '@/types/profile';
import { client } from '@/sanityClient';

const PROFILE_QUERY = `*[
  _type == "profile"
][0]`;

export async function getProfile(): Promise<Profile> {
  return await client.fetch<Profile>(PROFILE_QUERY);
}
