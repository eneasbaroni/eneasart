import { WorkSaleStatus } from "../WorkSaleStatus/WorkSaleStatus";
import { Divider } from "../../common/Divider/Divider";
import { SectionLabel } from "../../common/SectionLabel/SectionLabel";
import { getSeriesById, getWorkSpecs } from "@/helpers/works";
import type { Work } from "@/types";

type WorkDetailsProps = {
    work: Work;
};

const specLabelClass =
    "font-feature-display text-xs uppercase tracking-[0.2em] text-black/40";

export const WorkDetails = ({ work }: WorkDetailsProps) => {
    const series = getSeriesById(work.seriesId);
    const specs = getWorkSpecs(work);

    return (
        <div className="flex flex-col gap-8 px-8 py-12 tablet:px-4 tablet:py-10 mobile:py-8">
            <div className="flex flex-col gap-2">
                {series && (
                    <SectionLabel>
                        {series.name} · {series.year}
                    </SectionLabel>
                )}
                <h1 className="font-feature-display uppercase text-7xl notebook:text-6xl tablet:text-5xl mobile:text-4xl tracking-tight">
                    {work.title}
                </h1>
                {work.name && (
                    <p className="font-suomi-hand-script text-5xl tablet:text-4xl mobile:text-3xl text-black/60">
                        {work.name}
                    </p>
                )}
            </div>

            {specs.length > 0 && (
                <dl className="flex flex-col">
                    <Divider opacity={20} />
                    {specs.map(({ label, value }) => (
                        <div key={label}>
                            <div className="flex items-baseline justify-between gap-4 py-3">
                                <dt className={specLabelClass}>{label}</dt>
                                <dd className="font-feature-display uppercase text-sm text-right">
                                    {value}
                                </dd>
                            </div>
                            <Divider opacity={20} />
                        </div>
                    ))}
                </dl>
            )}

            <WorkSaleStatus work={work} labelClassName={specLabelClass} />

            {series && (
                <div className="flex flex-col gap-3 pt-4">
                    <SectionLabel>Sobre la serie</SectionLabel>
                    {series.statement.map((paragraph) => (
                        <p
                            key={paragraph.slice(0, 24)}
                            className="font-feature-display text-sm tablet:text-xs leading-relaxed text-black/70"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};
