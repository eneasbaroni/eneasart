import worksData from "@/data/works.json";
import { formatDimensions } from "./format";
import type { Series, Work, WorksData } from "@/types";

const data = worksData as WorksData;

export const getWorks = (): Work[] => data.works;

export const getFeaturedWorks = (): Work[] =>
    data.works.filter((work) => work.featured);

export const getWorkBySlug = (slug: string): Work | undefined =>
    data.works.find((work) => work.slug === slug);

export const getSeriesById = (id: string | null): Series | undefined =>
    id ? data.series.find((series) => series.id === id) : undefined;

export const getWorkCover = (work: Work): string => work.images[0];

export const getWorkAlt = (work: Pick<Work, "title" | "name">): string =>
    work.name ? `${work.title} — ${work.name}` : work.title;

export const getWorkPosition = (slug: string): number =>
    data.works.findIndex((work) => work.slug === slug) + 1;

export type WorkSpec = { label: string; value: string };

/** Ficha técnica de la obra, omitiendo los datos que no estén cargados. */
export const getWorkSpecs = (work: Work): WorkSpec[] => {
    const series = getSeriesById(work.seriesId);
    const specs: (WorkSpec | null)[] = [
        work.technique ? { label: "Técnica", value: work.technique } : null,
        work.dimensions
            ? { label: "Medidas", value: formatDimensions(work.dimensions) }
            : null,
        work.year ? { label: "Año", value: String(work.year) } : null,
        series ? { label: "Serie", value: series.name } : null,
    ];

    return specs.filter((spec): spec is WorkSpec => spec !== null);
};

export const getAdjacentWorks = (slug: string) => {
    const index = data.works.findIndex((work) => work.slug === slug);
    const total = data.works.length;

    return {
        previous: data.works[(index - 1 + total) % total],
        next: data.works[(index + 1) % total],
    };
};
