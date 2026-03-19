import Wrapper from '@/components/Wrapper';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { slideUp } from './animation';
import Project from './components/project';
import Button from '@/components/Button';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const container = useRef(null);
  const description = useRef(null);
  const isInView = useInView(description);

  const phrase =
    'The combination of my passion for design, code & interaction positions me in a unique place in the web design world.';

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const height = useTransform(scrollYProgress, [0, 0.8], [70, 0]);

  return (
    <div
      ref={container}
      className="bg-secondary text-foreground-2 gap-h relative flex flex-col pt-36"
    >
      <Wrapper>
        <div className="flex flex-col gap-28">
          <div ref={description} className="relative z-10 w-[70%] leading-snug">
            {phrase.split(' ').map((word, index) => {
              return (
                <span key={index} className="mr-0.75 inline-flex overflow-hidden">
                  <motion.span
                    className="mr-0.75 text-3xl"
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? 'open' : 'closed'}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
            <div data-scroll data-scroll-speed="0.2" data-scroll-enable-touch-speed>
              <Link to="/about">
                <Button
                  customButtonStyles="bg-background absolute left-[calc(144%-220px)] h-45 w-45 rounded-full"
                  customFontStyles="text-lg"
                >
                  {t('projects.aboutme')}
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <ul className="flex flex-col [&:has(:hover)>*:not(:hover):not(hr)]:opacity-50">
              <Project title="Personal Site"></Project>
              <hr className="bg-foreground-2 my-6 h-px border-t-0" />
              <Project title="Plant App"></Project>
            </ul>
          </div>
        </div>
      </Wrapper>
      <motion.div style={{ height }} className="relative mt-25">
        <div className="bg-secondary absolute -left-[10%] z-10 h-[1550%] w-[120%] rounded-b-[50%]"></div>
      </motion.div>
    </div>
  );
}
