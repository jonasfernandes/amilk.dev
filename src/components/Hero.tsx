import { ErrorComponent } from '@tanstack/react-router';
import type { Profile } from '@/types/profile';
import type { SSRError } from '@/types/common';
import SaluteHand from '@/components/SaluteHand';
import { urlFor } from '@/utils/sanityImageUrl';

export default function Hero({ profile }: { profile: Profile | SSRError }) {
  if ('error' in profile) {
    return <ErrorComponent error={new Error(profile.description)} />;
  }

  const imageProfileUrl = profile.image ? urlFor(profile.image).width(300).height(300).url() : '';

  return (
    <section className="flex flex-row items-center gap-12 sm-gap-8 lg:gap-12 w-full lg:mb-16 mb-10">
      <div className="hidden sm:block p-4 rounded-full relative group w-[60%] sm:w-[40%]">
        <img className="rounded-full overflow-hidden w-full h-full" src={imageProfileUrl} alt="" />
        <span className="border-2 border-primary rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 w-[90%] h-[90%] group-hover:w-full group-hover:h-full"></span>
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full bg-primary rounded-full scale-100 group-hover:scale-0 transition-all duration-300"></span>
      </div>
      <div className="w-[100%] sm:w-[60%]">
        <p className="p-2 text-foreground-2 text-xl">
          Yo! <SaluteHand />, I’m <b>{profile.name}</b>
        </p>
        <h1 className="font-[Proxima_Nova_Bold] text-primary text-8xl sm:text-8xl tracking-tighter leading-20">
          Frontend <br />
          Developer.
        </h1>
        <p className="p-2 text-foreground-2 text-md mt-2 sm:mt-4">{profile.description}</p>
      </div>
    </section>
  );
}
