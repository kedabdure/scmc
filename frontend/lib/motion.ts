import type { Variants, Transition } from "framer-motion";

// Lateral-inspired motion configuration
export const motionEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const motionDuration = {
  fast: 0.3,
  base: 0.55,
  slow: 0.8,
};

export const pageTransition: Transition = {
  duration: motionDuration.base,
  ease: motionEasing,
};

// Core animation variants matching Lateral design
export const fadeInUp: Variants = {
  hidden: { opacity: 0.001, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.base,
      ease: motionEasing,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: motionDuration.base,
      ease: motionEasing,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionDuration.base,
      ease: motionEasing,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionDuration.base,
      ease: motionEasing,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionDuration.base,
      ease: motionEasing,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};
