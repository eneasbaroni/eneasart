import { Divider } from "../../common/Divider/Divider";
import { SectionLabel } from "../../common/SectionLabel/SectionLabel";

type AboutBlockProps = {
    label: string;
    children: React.ReactNode;
};

/** Bloque editorial: rótulo a la izquierda y contenido a la derecha. */
export const AboutBlock = ({ label, children }: AboutBlockProps) => (
    <section className="w-full">
        <Divider opacity={20} />
        <div className="flex gap-12 px-4 py-16 tablet:flex-col tablet:gap-6 tablet:py-12 mobile:py-10">
            <SectionLabel className="w-1/4 shrink-0 tablet:w-full">{label}</SectionLabel>
            <div className="flex-1 max-w-2xl">{children}</div>
        </div>
    </section>
);
