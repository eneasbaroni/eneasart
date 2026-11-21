"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Divider } from "../Divider/Divider";
import { Logo } from "../Logo/Logo";
import { FOOTER_LINKS } from "@/constants/contact";
import { NAV_LINKS, ROUTES } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import { padIndex } from "@/helpers/format";
import { useCurrentYear } from "@/hooks/useCurrentYear";

const columnLabelClass =
    "mb-2 font-feature-display text-xs uppercase tracking-[0.2em] text-black/40";

export const Footer = () => {
    const pathname = usePathname();
    const year = useCurrentYear();

    if (pathname === ROUTES.contact) return null;

    return (
        <footer className="w-full min-h-svh flex flex-col">
            <div className="mt-auto flex flex-col">
                <Link
                    href={ROUTES.contact}
                    className="group block px-4 py-20 tablet:py-16 mobile:py-12 text-center"
                >
                    <span className="block font-feature-display uppercase text-7xl tablet:text-5xl mobile:text-4xl tracking-tight transition-[letter-spacing] duration-500 group-hover:tracking-wider">
                        ¿Te interesa una obra?
                    </span>
                    <span className="mt-2 block font-suomi-hand-script text-3xl tablet:text-2xl mobile:text-xl text-black/60">
                        Escribime
                    </span>
                </Link>

                <div className="flex flex-wrap justify-between gap-12 px-4 py-12 tablet:py-10 mobile:flex-col mobile:gap-0 mobile:py-8">
                    <nav className="flex flex-col gap-1">
                        <span className={columnLabelClass}>Sitio</span>
                        {NAV_LINKS.map((link, i) => (
                            <Link
                                key={link.link}
                                href={link.link}
                                className="group flex items-baseline gap-3"
                            >
                                <span className="font-feature-display text-xs text-black/40 tabular-nums">
                                    {padIndex(i + 1)}
                                </span>
                                <span className="font-feature-display uppercase text-sm tracking-tight transition-[letter-spacing] duration-500 group-hover:tracking-wider">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <Divider opacity={20} className="hidden my-6 mobile:block" />

                    <div className="flex flex-col gap-1 text-right items-end mobile:items-start mobile:text-left">
                        <span className={columnLabelClass}>Redes</span>
                        {FOOTER_LINKS.map((item) => (
                            <a
                                key={item.label}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-baseline gap-5 font-feature-display uppercase text-sm tracking-tight transition-[letter-spacing] duration-500 hover:tracking-wider"
                            >
                                <span className="hidden mobile:inline">•</span>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                <Divider opacity={30} />
                <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-6 font-feature-display text-xs uppercase text-black/50 mobile:flex-col mobile:text-center">
                    <span className="flex items-center gap-3">
                        <Logo decorative className="h-6 text-black" />
                        © {year} {SITE.name}
                    </span>
                    <span>{SITE.location}</span>
                </div>
            </div>
        </footer>
    );
};
