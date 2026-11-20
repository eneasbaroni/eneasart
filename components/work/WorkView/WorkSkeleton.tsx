import { Divider } from "../../common/Divider/Divider";
import { WorkLayout } from "./WorkLayout";

const blockClass = "bg-black/5 motion-safe:animate-pulse";

/** Placeholder de la página de obra mientras se resuelve el slug. */
export const WorkSkeleton = () => (
    <WorkLayout
        header={
            <div className="flex flex-col" aria-hidden="true">
                <div className="h-[3.25rem]" />
                <Divider opacity={10} />
            </div>
        }
        media={<div className={`aspect-4/5 ${blockClass}`} />}
        details={
            <div
                className="flex flex-col gap-4 px-8 py-12 tablet:px-4 tablet:py-10 mobile:py-8"
                aria-busy="true"
                aria-label="Cargando obra"
            >
                <div className={`h-3 w-32 ${blockClass}`} />
                <div className={`h-16 w-3/4 tablet:h-12 ${blockClass}`} />
                <div className={`h-10 w-1/2 ${blockClass}`} />
            </div>
        }
    />
);
