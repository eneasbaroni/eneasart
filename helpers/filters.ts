import { WORK_FILTERS, type WorkFilterValue } from "@/constants/filters";
import type { Work } from "@/types";

export const matchesWorkFilter = (work: Work, filter: WorkFilterValue) => {
    switch (filter) {
        case "series":
            return work.seriesId !== null;
        case "other":
            return work.seriesId === null;
        default:
            return true;
    }
};

/** Filtros que tienen al menos una obra (siempre incluye "Todo"). */
export const getAvailableFilters = (works: Work[]) =>
    WORK_FILTERS.filter(
        ({ value }) =>
            value === "all" ||
            works.some((work) => matchesWorkFilter(work, value))
    );
