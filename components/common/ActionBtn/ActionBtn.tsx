import Link from "next/link";
import type { ExternalLink } from "@/types";

export const ActionBtn = ({ label, link, mode }: ExternalLink) => {
    const content = (
        <span className="font-feature-display uppercase text-sm mobile:text-xs tracking-tight transition-[letter-spacing] duration-500 group-hover:tracking-wider">
            {label}
        </span>
    );

    const className =
        "group flex w-full items-center justify-center py-4 mobile:py-3";

    return mode === "internal" ? (
        <Link href={link} className={className}>
            {content}
        </Link>
    ) : (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {content}
        </a>
    );
};
