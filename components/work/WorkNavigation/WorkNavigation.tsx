import Link from "next/link";
import { ScrollArrow } from "../../common/ScrollArrow/ScrollArrow";
import { getWorkHref } from "@/helpers/routes";
import type { Work } from "@/types";

type WorkNavigationProps = {
    previous: Work;
    next: Work;
};

type NavLinkProps = {
    work: Work;
    label: string;
    direction: "previous" | "next";
};

const WorkNavLink = ({ work, label, direction }: NavLinkProps) => {
    const isNext = direction === "next";

    return (
        <Link
            href={getWorkHref(work.slug)}
            className={`group flex flex-1 items-center gap-6 px-4 py-10 tablet:py-8 mobile:py-6 ${
                isNext
                    ? "flex-row-reverse text-right"
                    : "border-r border-black/10 mobile:border-r-0 mobile:border-b"
            }`}
        >
            <ScrollArrow
                className={`h-6 w-auto shrink-0 transition-transform ${
                    isNext
                        ? "-rotate-90 group-hover:translate-x-1"
                        : "rotate-90 group-hover:-translate-x-1"
                }`}
            />
            <span className="flex flex-col gap-1">
                <span className="font-feature-display text-xs uppercase tracking-[0.2em] text-black/40">
                    {label}
                </span>
                <span className="font-feature-display uppercase text-3xl tablet:text-2xl mobile:text-xl tracking-tight transition-[letter-spacing] duration-500 group-hover:tracking-wider">
                    {work.title}
                </span>
            </span>
        </Link>
    );
};

export const WorkNavigation = ({ previous, next }: WorkNavigationProps) => (
    <nav
        aria-label="Otras obras"
        className="flex w-full border-t border-black/10 mobile:flex-col"
    >
        <WorkNavLink work={previous} label="Obra anterior" direction="previous" />
        <WorkNavLink work={next} label="Obra siguiente" direction="next" />
    </nav>
);
