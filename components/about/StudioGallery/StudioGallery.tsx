import Image from "next/image";
import { SectionLabel } from "../../common/SectionLabel/SectionLabel";
import type { StudioPhoto } from "@/types";

type StudioGalleryProps = {
    photos: StudioPhoto[];
};

/** Fotos del taller, en la misma grilla con bordes que el portfolio. */
export const StudioGallery = ({ photos }: StudioGalleryProps) => {
    if (photos.length === 0) return null;

    return (
        <section className="w-full flex flex-col">
            <SectionLabel className="px-4 py-4">En el taller</SectionLabel>
            <div className="flex w-full border-t border-black/10 mobile:flex-col">
                {photos.map((photo) => (
                    <div
                        key={photo.src}
                        className="relative aspect-3/4 flex-1 border-r border-black/10 last:border-r-0 mobile:border-r-0 mobile:border-b mobile:last:border-b-0 overflow-hidden"
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
