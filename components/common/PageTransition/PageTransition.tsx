"use client";

import { motion } from "motion/react";
import { Logo } from "../Logo/Logo";
import { usePageTransition } from "@/hooks/usePageTransition";

export const PageTransition = () => {
    const { scope, destinationLabel } = usePageTransition();

    return (
        <motion.div
            ref={scope}
            initial={{ x: "100%" }}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 mobile:gap-6 bg-black pl-16 tablet:pl-12 text-white"
        >
            <Logo decorative className="h-16 tablet:h-14 mobile:h-12" />
            <span className="font-feature-display uppercase text-3xl tablet:text-2xl mobile:text-xl tracking-[0.3em] text-center px-4">
                {destinationLabel}
            </span>
        </motion.div>
    );
};
