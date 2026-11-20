import type { Easing } from "motion/react";

export const EASE: Easing = [0.76, 0, 0.24, 1];

export const transition = {
    duration: 1,
    ease: EASE,
} as const;

export const menuAnim = {
    initial: { x: "-100%" },
    animate: { x: "0%" },
    exit: { x: "-100%" },
} as const;

export const imgVariants = {
    initial: {
        scale: 1.05,
    },
    hover: {
        scale: 1.15,
        transition: { duration: 0.5 },
    },
} as const;

export const bgFillVariants = {
    initial: { height: 0 },
    hover: { height: "100%", transition: { duration: 0.5, ease: EASE } },
} as const;

export const carouselVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
        x: "0%",
        transition: { duration: 0.7, ease: EASE },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%",
        transition: { duration: 0.7, ease: EASE },
    }),
};

export const PAGE_TRANSITION = {
    duration: 0.7,
    holdMs: 150,
} as const;
