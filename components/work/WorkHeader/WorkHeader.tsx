import Link from "next/link";
import { Divider } from "../../common/Divider/Divider";
import { ScrollArrow } from "../../common/ScrollArrow/ScrollArrow";
import { ROUTES } from "@/constants/navigation";
import { padIndex } from "@/helpers/format";

type WorkHeaderProps = {
    position: number;
    total: number;
};

export const WorkHeader = ({ position, total }: WorkHeaderProps) => (
    <div className="flex flex-col">
        <div className="flex items-center justify-between px-4 py-4 tablet:px-3">
            <Link
                href={ROUTES.portfolio}
                className="group flex items-center gap-3 font-feature-display uppercase text-xs tracking-[0.3em]"
            >
                <ScrollArrow className="h-5 w-auto rotate-90 transition-transform group-hover:-translate-x-1" />
                Portfolio
            </Link>
            <span className="font-feature-display text-xs tracking-[0.3em] tabular-nums">
                {padIndex(position)} / {padIndex(total)}
            </span>
        </div>
        <Divider opacity={10} />
    </div>
);
