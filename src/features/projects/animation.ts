type SlideUpState = {
  y: string;
  transition?: {
    duration: number;
    delay?: number;
  };
};

type SlideUp = {
  initial: SlideUpState;
  open: (i: number) => SlideUpState;
  closed: SlideUpState;
};

export const slideUp: SlideUp = {
  initial: {
    y: '100%',
  },
  open: (i: number): SlideUpState => ({
    y: '0%',
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: '100%',
    transition: { duration: 0.5 },
  },
};
