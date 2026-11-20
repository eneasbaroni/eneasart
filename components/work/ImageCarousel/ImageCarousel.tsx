"use client";

import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import { CarouselControls } from "./CarouselControls";
import { CarouselThumbnails } from "./CarouselThumbnails";
import { carouselVariants } from "@/constants/animations";
import { padIndex } from "@/helpers/format";
import { useArrowKeys } from "@/hooks/useArrowKeys";
import { useCarousel } from "@/hooks/useCarousel";

const SWIPE_THRESHOLD = 80;

type ImageCarouselProps = {
    images: string[];
    alt: string;
};

export const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
    const { index, direction, next, prev, goTo, hasMany } = useCarousel(
        images.length
    );

    useArrowKeys({ onLeft: prev, onRight: next, enabled: hasMany });

    const handleDragEnd = (_: unknown, { offset }: PanInfo) => {
        if (offset.x < -SWIPE_THRESHOLD) next();
        else if (offset.x > SWIPE_THRESHOLD) prev();
    };

    return (
        <div className="flex flex-col" aria-roledescription="carrusel">
            <div className="relative aspect-4/5 overflow-hidden bg-black/5">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={carouselVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        drag={hasMany ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                        className="absolute inset-0 cursor-grab active:cursor-grabbing"
                    >
                        <Image
                            src={images[index]}
                            alt={`${alt} — imagen ${index + 1} de ${images.length}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            draggable={false}
                            loading={index === 0 ? "eager" : "lazy"}
                            className="object-contain p-8 tablet:p-6 mobile:p-4 pointer-events-none select-none"
                        />
                    </motion.div>
                </AnimatePresence>

                <span className="absolute top-3 left-3 font-feature-display text-xs text-white mix-blend-difference tabular-nums">
                    {padIndex(index + 1)}
                </span>
            </div>

            {hasMany && (
                <>
                    <CarouselControls
                        current={index + 1}
                        total={images.length}
                        onPrev={prev}
                        onNext={next}
                    />
                    <CarouselThumbnails
                        images={images}
                        alt={alt}
                        activeIndex={index}
                        onSelect={goTo}
                    />
                </>
            )}
        </div>
    );
};
