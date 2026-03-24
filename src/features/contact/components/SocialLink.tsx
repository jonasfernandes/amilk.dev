import Magnetic from '@/components/effects/Magnetic';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function SocialLink({
  children,
  url,
  classEffect,
}: {
  children: React.ReactNode;
  url: string;
  classEffect: string;
}) {
  return (
    <div
      className={twMerge(
        'bg-primary absolute h-12 w-12 rounded-full transition-all duration-500 ease-in-out sm:h-16 sm:w-16',
        classEffect,
      )}
    >
      <Magnetic>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full w-full cursor-pointer items-center justify-center text-2xl"
        >
          {children}
        </a>
      </Magnetic>
    </div>
  );
}
