"use client";

import Link from "next/link";
import { Menu } from "../Menu/Menu";
import { Divider } from "../Divider/Divider";
import { Logo } from "../Logo/Logo";
import { MenuToggle } from "./MenuToggle";
import { useMenu } from "@/hooks/useMenu";
import { ROUTES } from "@/constants/navigation";
import { SITE } from "@/constants/site";

export const Sidebar = () => {
    const { isOpen, toggle, close } = useMenu();

    return (
        <>
            <aside
                className={`fixed inset-y-0 left-0 z-70 w-16 tablet:w-12 transition-colors duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isOpen ? "bg-black text-white" : "bg-background"
                }`}
            >
                <MenuToggle isOpen={isOpen} onToggle={toggle} />

                <Link
                    href={ROUTES.home}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap font-feature-display uppercase text-sm tablet:text-xs tracking-[0.3em]"
                >
                    {SITE.name}
                </Link>

                <Link
                    href={ROUTES.home}
                    aria-label={`${SITE.name} — Inicio`}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex"
                >
                    <Logo decorative className="h-9 tablet:h-7" />
                </Link>

                <Divider
                    orientation="vertical"
                    variant={isOpen ? "light" : "dark"}
                    className="absolute top-0 right-0"
                />
            </aside>

            <Menu active={isOpen} onClose={close} />
        </>
    );
};
