import Magnetic from '@/components/effects/Magnetic';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function SocialLink({
  children,
  classEffect,
}: {
  children: React.ReactNode;
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
        <div className="flex h-full w-full cursor-pointer items-center justify-center text-2xl">
          {children}
        </div>
      </Magnetic>
    </div>
  );
}
