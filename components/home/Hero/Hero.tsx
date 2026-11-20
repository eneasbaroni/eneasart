import Image from "next/image";
import { RoleDot } from "../../common/RoleDot/RoleDot";
import { ScrollArrow } from "../../common/ScrollArrow/ScrollArrow";
import { SITE, SITE_IMAGES } from "@/constants/site";

const ROLES = ["Pintor", "Retrato al óleo", SITE.location];

export const Hero = () => {
    const { hero } = SITE_IMAGES;

    return (
        <section className="w-full min-h-screen relative flex flex-col items-center justify-center gap-4 pt-20 pb-32">
            <Image
                src={hero.src}
                alt={hero.alt}
                width={100}
                height={Math.round((100 * hero.height) / hero.width)}
                className="grayscale"
                loading="eager"
                fetchPriority="high"
            />

            <h1 className="font-feature-display text-9xl tablet:text-7xl mobile:text-5xl w-full text-center tracking-tight uppercase">
                {SITE.name}
            </h1>

            <p className="font-suomi-hand-script text-3xl tablet:text-2xl mobile:text-xl flex items-center justify-center flex-wrap text-center">
                {ROLES.map((role, i) => (
                    <span key={role} className="flex items-center">
                        {i > 0 && <RoleDot />}
                        <span>{role}</span>
                    </span>
                ))}
            </p>

            <p className="font-feature-display max-w-md p-4 text-sm mobile:text-xs text-center">
                Exploro el retrato al óleo. Atisbos es mi serie de retratos
                de 2026.
            </p>

            <p className="font-suomi-hand-script text-2xl mobile:text-lg">
                Scroll
            </p>
            <ScrollArrow />
        </section>
    );
};
