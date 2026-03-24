import Magnetic from '@/components/effects/Magnetic';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import SocialLink from './SocialLink';

export default function ContactLinks() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      effect:
        'sm:peer-checked:-translate-x-29 sm:peer-checked:-translate-y-25 peer-checked:-translate-x-18 peer-checked:-translate-y-19',
      icon: <FaGithub className="text-2xl sm:text-3xl" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      effect: 'sm:peer-checked:-translate-y-38 peer-checked:-translate-y-26',
      icon: <FaLinkedin className="text-2xl sm:text-3xl" />,
    },
    {
      name: 'Email',
      url: 'https://instagram.com',
      effect:
        'sm:peer-checked:translate-x-29 sm:peer-checked:-translate-y-25 peer-checked:translate-x-18 peer-checked:-translate-y-19',
      icon: <MdAlternateEmail className="text-2xl sm:text-3xl" />,
    },
  ];

  return (
    <>
      <svg className="absolute hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        className="group relative flex items-center justify-center"
        style={{ filter: "url('#goo')" }}
      >
        <input type="checkbox" value="Get in touch" id="contact-checkbox" className="peer hidden" />
        <Magnetic>
          <label
            htmlFor="contact-checkbox"
            className="bg-primary text-foreground-2 z-10 flex h-28 w-28 cursor-pointer items-center justify-center rounded-full text-base font-light sm:h-48 sm:w-48"
          >
            Get in touch
          </label>
        </Magnetic>

        {socialLinks.map((social) => (
          <SocialLink key={social.name} classEffect={social.effect}>
            {social.icon}
          </SocialLink>
        ))}
      </div>
    </>
  );
}
