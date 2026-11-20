import {
    getWorkStructuredData,
    serializeJsonLd,
} from "@/helpers/structuredData";
import type { Work } from "@/types";

type WorkJsonLdProps = {
    work: Work;
};

/** Datos estructurados para que Google entienda la obra, su precio y disponibilidad. */
export const WorkJsonLd = ({ work }: WorkJsonLdProps) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: serializeJsonLd(getWorkStructuredData(work)),
        }}
    />
);
