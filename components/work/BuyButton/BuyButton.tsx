"use client";

import { motion } from "motion/react";
import { bgFillVariants } from "@/constants/animations";
import { getPurchaseUrl, type PurchasableWork } from "@/helpers/purchase";

type BuyButtonProps = {
    work: PurchasableWork;
};

export const BuyButton = ({ work }: BuyButtonProps) => (
    <motion.a
        href={getPurchaseUrl(work)}
        target="_blank"
        rel="noopener noreferrer"
        initial="initial"
        whileHover="hover"
        className="group relative flex w-full items-center justify-center overflow-hidden border border-black py-5 mobile:py-4"
    >
        <motion.span
            aria-hidden="true"
            variants={bgFillVariants}
            className="absolute bottom-0 left-0 w-full bg-black"
        />
        <span className="relative font-feature-display uppercase text-sm tracking-tight transition-[letter-spacing,color] duration-500 group-hover:tracking-wider group-hover:text-white">
            Comprar
        </span>
    </motion.a>
);
