import { ScrollArrow } from "../../common/ScrollArrow/ScrollArrow";
import { padIndex } from "@/helpers/format";

type CarouselControlsProps = {
    current: number;
    total: number;
    onPrev: () => void;
    onNext: () => void;
};

const buttonClass =
    "group flex h-10 w-10 items-center justify-center cursor-pointer";

export const CarouselControls = ({
    current,
    total,
    onPrev,
    onNext,
}: CarouselControlsProps) => (
    <div className="flex items-center justify-between border-t border-black/10 px-4 py-2 tablet:px-3">
        <button onClick={onPrev} aria-label="Imagen anterior" className={buttonClass}>
            <ScrollArrow className="h-6 w-auto rotate-90 transition-transform group-hover:-translate-x-1" />
        </button>

        <span className="font-feature-display text-xs tracking-[0.3em] tabular-nums">
            {padIndex(current)} / {padIndex(total)}
        </span>

        <button onClick={onNext} aria-label="Imagen siguiente" className={buttonClass}>
            <ScrollArrow className="h-6 w-auto -rotate-90 transition-transform group-hover:translate-x-1" />
        </button>
    </div>
);
