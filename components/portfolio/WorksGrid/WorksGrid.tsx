"use client";

import { WorkFilter } from "../WorkFilter/WorkFilter";
import { WorkItem } from "../WorkItem/WorkItem";
import { Divider } from "../../common/Divider/Divider";
import { SectionLabel } from "../../common/SectionLabel/SectionLabel";
import { useWorkFilter } from "@/hooks/useWorkFilter";
import type { Work } from "@/types";

type WorksGridProps = {
    works: Work[];
};

export const WorksGrid = ({ works }: WorksGridProps) => {
    const { filters, hasFilters, activeFilter, setActiveFilter, filteredWorks } =
        useWorkFilter(works);

    return (
        <>
            {hasFilters ? (
                <WorkFilter
                    filters={filters}
                    activeFilter={activeFilter}
                    onChange={setActiveFilter}
                />
            ) : (
                <div className="w-full flex flex-col">
                    <SectionLabel className="px-4 py-4">Todas las obras</SectionLabel>
                    <Divider />
                </div>
            )}

            <div className="w-full flex flex-row flex-wrap">
                {filteredWorks.map((work, index) => (
                    <WorkItem key={work.slug} work={work} index={index + 1} />
                ))}
            </div>
        </>
    );
};
