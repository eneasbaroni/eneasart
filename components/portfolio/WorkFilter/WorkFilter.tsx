import { Divider } from "../../common/Divider/Divider";
import type { WORK_FILTERS, WorkFilterValue } from "@/constants/filters";

type WorkFilterProps = {
    filters: typeof WORK_FILTERS;
    activeFilter: WorkFilterValue;
    onChange: (filter: WorkFilterValue) => void;
};

export const WorkFilter = ({ filters, activeFilter, onChange }: WorkFilterProps) => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex items-center gap-6 px-4 py-4 tablet:gap-4 tablet:px-3">
                {filters.map((filter) => {
                    const isActive = activeFilter === filter.value;

                    return (
                        <button
                            key={filter.value}
                            onClick={() => onChange(filter.value)}
                            aria-pressed={isActive}
                            className={`font-feature-display uppercase text-sm tablet:text-xs tracking-tight transition-[letter-spacing,opacity] duration-500 hover:tracking-wider cursor-pointer ${
                                isActive ? "opacity-100" : "opacity-40"
                            }`}
                        >
                            {filter.label}
                        </button>
                    );
                })}
            </div>
            <Divider />
        </div>
    );
};
