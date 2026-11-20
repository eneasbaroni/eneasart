"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SoldDot } from "../../common/SoldDot/SoldDot";
import { imgVariants } from "@/constants/animations";
import { padIndex } from "@/helpers/format";
import { getWorkHref } from "@/helpers/routes";
import { getWorkAlt, getWorkCover } from "@/helpers/works";
import type { Work } from "@/types";

const MotionImage = motion.create(Image);

type WorkItemProps = {
    work: Work;
    index: number;
};

export const WorkItem = ({ work, index }: WorkItemProps) => {
    return (
        <motion.div
            className="group w-1/4 tablet:w-1/3 mobile:w-1/2 border-r border-b border-black/10"
            initial="initial"
            whileHover="hover"
        >
            <Link href={getWorkHref(work.slug)} className="block">
                <div className="relative h-[45vh] tablet:h-[35vh] mobile:h-[28vh] overflow-hidden">
                    <MotionImage
                        src={getWorkCover(work)}
                        alt={getWorkAlt(work)}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover"
                        variants={imgVariants}
                    />
                    <span className="absolute top-3 left-3 font-feature-display text-xs text-white mix-blend-difference">
                        {padIndex(index)}
                    </span>
                </div>

                <div className="flex items-baseline justify-between gap-3 px-3 py-3 tablet:px-2 tablet:py-2">
                    <span className="flex shrink-0 items-center gap-2">
                        <span className="font-feature-display uppercase text-sm tablet:text-xs tracking-tight transition-[letter-spacing] duration-500 group-hover:tracking-wider">
                            {work.title}
                        </span>
                        {!work.available && <SoldDot />}
                    </span>
                    {work.name && (
                        <span className="font-suomi-hand-script text-xl text-black/50 text-right truncate">
                            {work.name}
                        </span>
                    )}
                </div>
            </Link>
        </motion.div>
    );
};
