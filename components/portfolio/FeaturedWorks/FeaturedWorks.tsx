import { FeaturedWork } from "../FeaturedWork/FeaturedWork";
import { SectionLabel } from "../../common/SectionLabel/SectionLabel";
import type { Work } from "@/types";

type FeaturedWorksProps = {
    works: Work[];
};

export const FeaturedWorks = ({ works }: FeaturedWorksProps) => {
    if (works.length === 0) return null;

    return (
        <div className="flex flex-col">
            <SectionLabel className="px-4 py-4">Obras destacadas</SectionLabel>
            <div className="flex tablet:flex-col w-full border-t border-black/10">
                {works.map((work) => (
                    <FeaturedWork key={work.slug} work={work} />
                ))}
            </div>
        </div>
    );
};
