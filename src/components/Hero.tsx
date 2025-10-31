import { ErrorComponent } from '@tanstack/react-router';
import SaluteHand from '@/components/SaluteHand';
import { urlFor } from '@/utils/sanityImageUrl';
import Slide from '@/components/effects/Slide';
import { getProfile } from '@/services/profile';
import { useEffect, useState } from 'react';
import type { Profile } from '@/types/profile';

export default function Hero() {
  const [profile, setProfile] = useState<Profile>({} as Profile);

  async function fetchProfile() {
    const tempProfile = await getProfile();
    setProfile(tempProfile);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  if ('error' in profile) {
    return <ErrorComponent error={new Error(profile.description)} />;
  }

  const imageProfileUrl = profile.image ? urlFor(profile.image).width(300).height(300).url() : '';

  return (
    <section className="grid grid-cols-1 sm:grid-cols-[260px_minmax(10%,1fr)] lg:grid-cols-[320px_minmax(20%,1fr)] gap-12 sm-gap-8 lg:gap-12 mb-16 items-center">
      <div className="hidden sm:block p-4 rounded-full relative group w-[260px] h-[260px] lg:w-[320px] lg:h-[320px]">
        <img className="w-full h-full rounded-full" src={imageProfileUrl} />
        <span className="border-2 border-primary rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 w-[90%] h-[90%] group-hover:w-full group-hover:h-full"></span>
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full bg-primary rounded-full scale-100 group-hover:scale-0 transition-all duration-300"></span>
      </div>
      <div className="w-full">
        <p className="p-2 text-foreground-2 text-xl">
          Yo! <SaluteHand />, I’m <b>{profile.name}</b>
        </p>
        <Slide delay={0.1}>
          <h1 className="font-[Proxima_Nova_Bold] text-primary text-[5.5rem] lg:text-8xl tracking-tighter leading-20">
            Frontend <br />
            Developer.
          </h1>
        </Slide>
        <Slide delay={0.1}>
          <p className="pl-2 text-foreground-2 text-md mt-2 sm:mt-4">{profile.description}</p>
        </Slide>
      </div>
    </section>
  );
}
