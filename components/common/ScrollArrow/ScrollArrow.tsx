"use client";

import { motion } from "motion/react";

type ScrollArrowProps = {
    className?: string;
    strokeWidth?: number;
};

const ARROW_PATH =
    "M5.5 1.1 L5.4 0.7 L5.1 0.5 L4.7 0.6 L4.7 0.7 L4.5 0.9 L4.5 4 L4.6 4.3 L4.6 8.3 L4.7 8.5 L4.7 11.9 L4.8 12.1 L4.8 15 L4.9 15.2 L4.9 17.7 L5 17.9 L5 20.2 L5.1 20.4 L5.1 22.4 L5.2 22.6 L5.2 24.4 L5.3 24.7 L5.4 28.2 L5.5 28.5 L5.5 29.8 L5.6 30 L5.6 31.6 L5.7 31.8 L5.2 32.8 L5.3 32.5 L5.3 33 L5.2 33.3 L5.2 34.1 L5.1 34.4 L5.1 35 L5 35.2 L5 35.8 L5.3 36.2 L6.5 36.3 L6.7 36.2 L7 35.8 L7.1 35.4 L7.1 34.7 L7.2 34.5 L7.2 34 L7.3 33.7 L7.4 31.8 L7.5 31.5 L7.6 30.3 L7.7 30.1 L7.8 28.8 L8.3 26.8 L8.2 26.8 L8.1 27 L7.9 27 L7.6 26.6 L7.4 26.7 L7.3 27.4 L7.2 27.6 L7.2 28 L7.1 28.2 L7.1 28.6 L7 28.8 L7 29.3 L6.9 29.4 L6.9 29.8 L6.8 30 L6.8 30.4 L6.4 32 L6.4 32.5 L5.8 32.9 L5.8 33.1 L5.3 34.1 L5.3 34.3 L5 34.8 L5.1 34.8 L5.2 34.6 L5 34.6 L4.3 33.7 L4.3 33.5 L4.1 33.3 L4.1 33.1 L3.8 32.6 L3.7 32.1 L3.4 31.6 L3.4 31.4 L3.3 31.3 L3.1 31.3 L3 31.5";

export const ScrollArrow = ({ className, strokeWidth = 1 }: ScrollArrowProps) => {
    return (
        <svg
            width="11"
            height="37"
            viewBox="0 0 11 37"
            fill="none"
            aria-hidden="true"
            className={className}
        >
            <motion.path
                d={ARROW_PATH}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            />
        </svg>
    );
};
