import { createServerFn } from '@tanstack/react-start';
import type { Profile } from '@/types/profile';
import type { SSRError } from '@/types/common';
import { client } from '@/sanityClient';

const PROFILE_QUERY = `*[
  _type == "profile"
][0]`;

export async function loader(): Promise<Profile | SSRError> {
  try {
    return await client.fetch<Profile>(PROFILE_QUERY);
  } catch (error) {
    return {
      description: 'Profile not found',
      error: error as Error,
    };
  }
}

export const getProfile = createServerFn({
  method: 'GET',
}).handler(async () => await loader());
