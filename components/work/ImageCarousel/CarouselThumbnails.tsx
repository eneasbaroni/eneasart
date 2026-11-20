import Image from "next/image";

type CarouselThumbnailsProps = {
    images: string[];
    alt: string;
    activeIndex: number;
    onSelect: (index: number) => void;
};

export const CarouselThumbnails = ({
    images,
    alt,
    activeIndex,
    onSelect,
}: CarouselThumbnailsProps) => (
    <div className="flex border-t border-black/10 overflow-x-auto">
        {images.map((src, i) => {
            const isActive = i === activeIndex;

            return (
                <button
                    key={src}
                    onClick={() => onSelect(i)}
                    aria-label={`Ver imagen ${i + 1}`}
                    aria-current={isActive}
                    className={`relative h-24 w-20 mobile:h-20 mobile:w-16 shrink-0 border-r border-black/10 cursor-pointer transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                    }`}
                >
                    <Image
                        src={src}
                        alt={`${alt} — miniatura ${i + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                    />
                </button>
            );
        })}
    </div>
);
