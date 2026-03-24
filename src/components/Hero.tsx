import { ErrorComponent } from '@tanstack/react-router';
import SaluteHand from '@/components/SaluteHand';
import { urlFor } from '@/utils/sanityImageUrl';
import Slide from '@/components/effects/Slide';
import { Trans } from 'react-i18next';
import { getProfile } from '@/services/profile';
import { Activity, use } from 'react';
import Wrapper from './Wrapper';
import { isMobile } from 'react-device-detect';

const getProfilePromise = getProfile();

export default function Hero() {
  const profile = use(getProfilePromise);

  if ('error' in profile) {
    return <ErrorComponent error={new Error(profile.description)} />;
  }

  const imageProfileUrl = profile.image
    ? urlFor(profile.image).width(300).height(300).url()
    : undefined;

  return (
    <Wrapper>
      <section className="sm-gap-8 mb-32 grid grid-cols-1 items-center gap-12 sm:grid-cols-[260px_minmax(10%,1fr)] lg:grid-cols-[320px_minmax(20%,1fr)] lg:gap-12">
        <Slide delay={0.2}>
          <div className="group relative hidden h-74 w-74 rounded-full p-4 sm:block md:h-65 md:w-65 lg:h-80 lg:w-80">
            <img className="h-full w-full rounded-full" src={imageProfileUrl} />
            <Activity mode={isMobile ? 'hidden' : 'visible'}>
              <span className="border-primary absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 group-hover:h-full group-hover:w-full"></span>
              <span className="bg-primary absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full transition-all duration-300 group-hover:scale-0"></span>
            </Activity>
          </div>
        </Slide>
        <div className="w-full">
          <Slide delay={0.4}>
            <p className="text-foreground-2 p-2 text-xl">
              <Trans
                i18nKey="hero.greeting"
                values={{ name: profile.name }}
                components={{ 1: <SaluteHand />, 2: <b /> }}
              />
            </p>
            <h1 className="text-primary font-[Proxima_Nova_Bold] text-[5.5rem] leading-20 tracking-tighter lg:text-8xl">
              <Trans i18nKey="hero.title" components={{ 1: <br /> }} />
            </h1>
            <p className="text-foreground-2 text-md mt-2 pl-2 sm:mt-4">{profile.description}</p>
          </Slide>
        </div>
      </section>
    </Wrapper>
  );
}
