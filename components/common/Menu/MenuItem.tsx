import Link from "next/link";
import { Divider } from "../Divider/Divider";
import { padIndex } from "@/helpers/format";
import type { NavLink } from "@/types";

type MenuItemProps = NavLink & {
    index: number;
    onSelect: () => void;
};

export const MenuItem = ({ link, label, index, onSelect }: MenuItemProps) => (
    <li>
        <Link
            href={link}
            onClick={onSelect}
            className="group flex items-baseline gap-4 py-4 tablet:py-3 mobile:py-2"
        >
            <span className="font-feature-display text-sm text-white/40 tabular-nums">
                {padIndex(index)}
            </span>
            <span className="font-feature-display uppercase text-4xl tablet:text-3xl mobile:text-2xl tracking-tight transition-[letter-spacing] duration-500 group-hover:tracking-wider">
                {label}
            </span>
        </Link>
        <Divider variant="light" opacity={30} />
    </li>
);
