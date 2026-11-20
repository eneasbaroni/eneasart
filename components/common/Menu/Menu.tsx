"use client";

import { motion } from "motion/react";
import { MenuItem } from "./MenuItem";
import { menuAnim, transition } from "@/constants/animations";
import { NAV_LINKS } from "@/constants/navigation";

type MenuProps = {
    active: boolean;
    onClose: () => void;
};

export const Menu = ({ active, onClose }: MenuProps) => {
    return (
        <motion.nav
            aria-hidden={!active}
            className="fixed inset-0 z-60 flex flex-col justify-center bg-black pl-16 tablet:pl-12"
            variants={menuAnim}
            initial="initial"
            animate={active ? "animate" : "exit"}
            transition={transition}
            inert={!active}
        >
            <ul className="w-full max-w-2xl px-8 tablet:px-6 mobile:px-4 text-white">
                {NAV_LINKS.map((link, i) => (
                    <MenuItem
                        key={link.link}
                        index={i + 1}
                        link={link.link}
                        label={link.label}
                        onSelect={onClose}
                    />
                ))}
            </ul>
        </motion.nav>
    );
};
