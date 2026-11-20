import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import { WorkDetails } from "../WorkDetails/WorkDetails";
import { WorkHeader } from "../WorkHeader/WorkHeader";
import { WorkJsonLd } from "../WorkJsonLd/WorkJsonLd";
import { WorkNavigation } from "../WorkNavigation/WorkNavigation";
import { WorkLayout } from "./WorkLayout";
import {
    getAdjacentWorks,
    getWorkAlt,
    getWorkPosition,
    getWorks,
} from "@/helpers/works";
import type { Work } from "@/types";

type WorkViewProps = {
    work: Work;
};

export const WorkView = ({ work }: WorkViewProps) => {
    const { previous, next } = getAdjacentWorks(work.slug);

    return (
        <>
            <WorkJsonLd work={work} />
            <WorkLayout
                header={
                    <WorkHeader
                        position={getWorkPosition(work.slug)}
                        total={getWorks().length}
                    />
                }
                media={
                    <ImageCarousel images={work.images} alt={getWorkAlt(work)} />
                }
                details={<WorkDetails work={work} />}
                footer={<WorkNavigation previous={previous} next={next} />}
            />
        </>
    );
};
