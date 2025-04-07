
// Animation utility classes for reuse
export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

export const scaleAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const slideInFromLeft = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const slideInFromRight = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
