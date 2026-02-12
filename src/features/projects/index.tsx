import Wrapper from '@/components/Wrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const container = useRef(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className="bg-foreground-2 gap-h mt-30 flex flex-col py-30">
      <Wrapper>
        <div className="flex flex-row gap-1">
          <p className="text-background text-xl font-bold">Some</p>
          <p className="text-background text-xl font-bold">projects</p>
          <p className="text-background text-xl font-bold">im</p>
          <p className="text-background text-xl font-bold">working</p>
          <p className="text-background text-xl font-bold">on</p>
        </div>
      </Wrapper>
      <motion.div style={{ height }} className="relative mt-25">
        <div className="bg-foreground-2 shadow-[0px 60px 50px rgba(0, 0, 0, 0.748);] absolute -left-[10%] z-10 h-[1550%] w-[120%] rounded-b-[50%]"></div>
      </motion.div>
    </div>
  );
}
