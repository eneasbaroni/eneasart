import Image from "next/image";
import { Divider } from "../../common/Divider/Divider";
import { SITE_IMAGES } from "@/constants/site";

const paragraphClass =
    "font-feature-display uppercase w-full text-base tablet:text-sm mobile:text-xs leading-relaxed [&>span]:font-suomi-hand-script [&>span]:normal-case [&>span]:text-3xl mobile:[&>span]:text-lg";

export const AboutSection = () => {
    const { about } = SITE_IMAGES;

    return (
        <section className="w-full px-4 py-24 tablet:py-16 mobile:py-12 flex flex-col">
            <div className="w-full max-w-2xl flex flex-col gap-2">
                <p className={`${paragraphClass} text-left`}>
                    Hola, soy Eneas. Pinto <span>retratos al óleo</span>. Soy{" "}
                    <span>arquitecto</span> de formación, estudié{" "}
                    <span>diseño gráfico</span> y desarrollé mi práctica
                    pictórica de manera autodidacta durante más de una década.
                </p>
                <p className={`${paragraphClass} text-center`}>
                    Mi obra pasó de un retrato <span>gestual y abstracto</span>{" "}
                    a un <span>realismo contemporáneo</span>, donde conviven el
                    rigor de la observación y la soltura de la pintura directa.
                </p>
                <p className={`${paragraphClass} text-right`}>
                    Construyo el rostro con <span>planos de luz y sombra</span>.
                    En <span>Atisbos</span>, esa lógica se cruza con la
                    intuición y la figura queda deliberadamente{" "}
                    <span>inconclusa</span>.
                </p>
            </div>
            <Divider variant="dark" className="w-1/2 mx-auto" opacity={30} />

            <div className="mt-12 w-full flex justify-center">
                <Image
                    src={about.src}
                    alt={about.alt}
                    width={420}
                    height={Math.round((420 * about.height) / about.width)}
                    className="grayscale w-full max-w-60 h-auto"
                />
            </div>
        </section>
    );
};
