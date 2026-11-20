"use client";

import { motion } from "motion/react";
import { EASE } from "@/constants/animations";

const CLOSED_PATH = "M 0 1 L 50 1 Z M 0 10 L 50 10 z";
const OPEN_PATH = "M 0 1 L 50 10 Z M 0 10 L 50 1 z";
const iconTransition = { duration: 0.6, ease: EASE };

type MenuToggleProps = {
    isOpen: boolean;
    onToggle: () => void;
};

export const MenuToggle = ({ isOpen, onToggle }: MenuToggleProps) => (
    <button
        onClick={onToggle}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        className="absolute top-6 left-1/2 -translate-x-1/2 cursor-pointer"
    >
        <svg width="22" height="9" viewBox="0 0 50 20" aria-hidden="true">
            <motion.path
                animate={{ d: isOpen ? OPEN_PATH : CLOSED_PATH }}
                transition={iconTransition}
                strokeWidth="2"
                stroke="currentColor"
            />
        </svg>
    </button>
);
