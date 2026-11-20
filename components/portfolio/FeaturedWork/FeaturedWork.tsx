import Image from "next/image";
import { IMAGE_QUALITY } from "@/constants/images";
import Link from "next/link";
import { SoldDot } from "../../common/SoldDot/SoldDot";
import { getWorkHref } from "@/helpers/routes";
import { getWorkAlt, getWorkCover } from "@/helpers/works";
import type { Work } from "@/types";

type FeaturedWorkProps = {
    work: Work;
};

export const FeaturedWork = ({ work }: FeaturedWorkProps) => {
    return (
        <Link
            href={getWorkHref(work.slug)}
            className="group relative block aspect-4/5 flex-1 tablet:w-full tablet:flex-none border-r border-black/10 last:border-r-0 overflow-hidden"
        >
            <Image
                src={getWorkCover(work)}
                alt={getWorkAlt(work)}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                quality={IMAGE_QUALITY.high}
                className="object-cover"
            />

            <div className="absolute bottom-0 left-0 flex w-full items-baseline justify-between gap-4 bg-white/90 px-4 py-3 tablet:px-3 tablet:py-2">
                <span className="flex shrink-0 items-center gap-2">
                    <span className="font-feature-display uppercase text-lg tablet:text-base transition-[letter-spacing] duration-500 group-hover:tracking-wider">
                        {work.title}
                    </span>
                    {!work.available && <SoldDot />}
                </span>
                {work.name && (
                    <span className="font-suomi-hand-script text-2xl text-black/50 text-right">
                        {work.name}
                    </span>
                )}
            </div>
        </Link>
    );
};
