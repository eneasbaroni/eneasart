import { useMemo, useState } from "react";
import type { WorkFilterValue } from "@/constants/filters";
import { getAvailableFilters, matchesWorkFilter } from "@/helpers/filters";
import type { Work } from "@/types";

/** Con una sola categoría además de "Todo", filtrar no aporta nada. */
const MIN_FILTERS_TO_SHOW = 3;

export const useWorkFilter = (works: Work[]) => {
    const [activeFilter, setActiveFilter] = useState<WorkFilterValue>("all");

    const filters = useMemo(() => getAvailableFilters(works), [works]);
    const hasFilters = filters.length >= MIN_FILTERS_TO_SHOW;

    const filteredWorks = useMemo(
        () => works.filter((work) => matchesWorkFilter(work, activeFilter)),
        [works, activeFilter]
    );

    return { filters, hasFilters, activeFilter, setActiveFilter, filteredWorks };
};
