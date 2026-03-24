import { Activity, use, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { getProfile } from '@/services/profile';
import { urlFor } from '@/utils/sanityImageUrl';
import Wrapper from '@/components/Wrapper';
import ContactLinks from './components/ContactLinks';
import { isMobile } from 'react-device-detect';

const getProfilePromise = getProfile();

export default function Contact() {
  const profile = use(getProfilePromise);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  const imageProfileUrl = profile.image
    ? urlFor(profile.image).width(300).height(300).url()
    : undefined;
  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="bg-background text-foreground-2 bg-noise relative"
    >
      <Wrapper>
        <div className="w-full pt-38 pb-48 sm:pt-58 sm:pb-68">
          <div className="border-foreground-2 relative border-b pb-24">
            <span className="flex items-center gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-full">
                <img className="object-cover" alt={'image'} src={imageProfileUrl} />
              </div>
              <h2 className="m-0 text-6xl font-light">Let&apos;s work</h2>
            </span>
            <h2 className="m-0 text-6xl font-light">together</h2>
            <motion.div
              style={{ x }}
              className="absolute top-[calc(100%-40px)] left-[calc(100%-240px)] z-10 sm:top-[calc(100%-75px)] sm:left-[calc(100%-400px)]"
            >
              <ContactLinks />
            </motion.div>
            <Activity mode={isMobile ? 'hidden' : 'visible'}>
              <motion.svg
                style={{ rotate: 90, scale: 2 }}
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[30%] sm:left-full"
              >
                <path
                  d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                  fill="white"
                />
              </motion.svg>
            </Activity>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}
