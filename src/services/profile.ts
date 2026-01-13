import type { ProfileApi } from '@/types/profile';
import { client } from '@/sanityClient';

const PROFILE_QUERY = `*[
  _type == "profile"
][0]`;

export async function getProfile(): Promise<ProfileApi> {
  return await client.fetch<ProfileApi>(PROFILE_QUERY);
}
