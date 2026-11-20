import { SITE } from "@/constants/site";
import { getWorkHref } from "./routes";
import { getAbsoluteUrl } from "./url";
import { getSeriesById, getWorkAlt } from "./works";
import type { Work } from "@/types";

/** Datos estructurados schema.org de una obra (VisualArtwork + oferta). */
export const getWorkStructuredData = (work: Work) => {
    const url = getAbsoluteUrl(getWorkHref(work.slug));
    const series = getSeriesById(work.seriesId);

    return {
        "@context": "https://schema.org",
        "@type": "VisualArtwork",
        name: getWorkAlt(work),
        url,
        image: work.images.map((image) => getAbsoluteUrl(image)),
        artform: "Pintura",
        ...(work.technique && { artMedium: work.technique }),
        ...(work.year && { dateCreated: String(work.year) }),
        ...(work.dimensions && {
            width: {
                "@type": "QuantitativeValue",
                value: work.dimensions.width,
                unitCode: "CMT",
            },
            height: {
                "@type": "QuantitativeValue",
                value: work.dimensions.height,
                unitCode: "CMT",
            },
        }),
        ...(series && {
            isPartOf: { "@type": "CreativeWorkSeries", name: series.name },
        }),
        creator: {
            "@type": "Person",
            name: SITE.name,
            url: SITE.url,
        },
        offers: {
            "@type": "Offer",
            url,
            price: work.price,
            priceCurrency: work.currency,
            availability: work.available
                ? "https://schema.org/InStock"
                : "https://schema.org/SoldOut",
        },
    };
};

/** Serializa JSON-LD escapando `<` para que no pueda cerrar el <script>. */
export const serializeJsonLd = (data: object): string =>
    JSON.stringify(data).replace(/</g, "\\u003c");
