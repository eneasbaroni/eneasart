import Link from "next/link";
import { Divider } from "../../common/Divider/Divider";
import { ScrollArrow } from "../../common/ScrollArrow/ScrollArrow";
import { ROUTES } from "@/constants/navigation";

const SECTIONS = [
    {
        title: "Portfolio",
        description:
            "Atisbos y otras obras. Retratos al óleo sobre MDF disponibles para adquirir.",
        href: ROUTES.portfolio,
    },
    {
        title: "Sobre mí",
        description:
            "Biografía, formación y el taller donde nace la serie Atisbos.",
        href: ROUTES.about,
    },
    {
        title: "Contacto",
        description:
            "Consultas sobre obras, exhibiciones y colaboraciones.",
        href: ROUTES.contact,
    },
];

export const SectionsList = () => {
    return (
        <section className="w-full px-4 py-24 tablet:py-16 mobile:py-12">
            <div className="max-w-4xl mx-auto flex flex-col">
                <Divider />
                {SECTIONS.map((section) => (
                    <div key={section.href}>
                        <Link
                            href={section.href}
                            className="group flex items-center justify-between gap-8 py-10 tablet:py-8 mobile:flex-col mobile:items-start mobile:gap-3 mobile:py-6"
                        >
                            <span
                                className="shrink-0 font-feature-display uppercase text-5xl tablet:text-4xl mobile:text-2xl tracking-tight transition-[letter-spacing] duration-500 group-hover:tracking-wider"
                                style={{ width: `${section.title.length + 1}ch` }}
                            >
                                {section.title}
                            </span>
                            <span className="font-feature-display max-w-sm text-right text-sm tablet:text-xs mobile:text-left">
                                {section.description}
                            </span>
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center mobile:self-end">
                                <ScrollArrow
                                    strokeWidth={1}
                                    className="h-6 w-auto -rotate-90 transition-transform group-hover:translate-x-1"
                                />
                            </span>
                        </Link>
                        <Divider />
                    </div>
                ))}
            </div>
        </section>
    );
};
