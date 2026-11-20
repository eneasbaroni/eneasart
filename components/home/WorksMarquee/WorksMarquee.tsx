import Image from "next/image";
import { getWorkAlt, getWorkCover, getWorks } from "@/helpers/works";

export const WorksMarquee = () => {
    const works = getWorks();
    const track = [...works, ...works];

    return (
        <div className="w-full overflow-hidden bg-black/5 py-8">
            <div className="flex w-max items-center opacity-80 grayscale animate-[marquee_48s_linear_infinite] motion-reduce:animate-none">
                {track.map((work, i) => (
                    <div
                        key={`${work.slug}-${i}`}
                        className="mr-16 shrink-0 mobile:mr-10"
                        aria-hidden={i >= works.length}
                    >
                        <Image
                            src={getWorkCover(work)}
                            alt={i >= works.length ? "" : getWorkAlt(work)}
                            width={140}
                            height={200}
                            sizes="140px"
                            className="h-40 w-auto mobile:h-28"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
