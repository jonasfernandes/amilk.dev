import Magnetic from '@/components/effects/Magnetic';

const ContactLinks = () => {
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

        <div
          className={`bg-primary absolute h-16 w-16 rounded-full transition-all duration-500 ease-in-out peer-checked:-translate-x-30 peer-checked:-translate-y-24 peer-checked:scale-110`}
        />

        <div
          className={`bg-primary absolute h-16 w-16 rounded-full transition-all duration-500 ease-in-out peer-checked:-translate-y-38 peer-checked:scale-110`}
        />

        <div
          className={`bg-primary absolute h-16 w-16 rounded-full transition-all duration-500 ease-in-out peer-checked:translate-x-30 peer-checked:-translate-y-24 peer-checked:scale-110`}
        />
      </div>
    </>
  );
};

export default ContactLinks;
