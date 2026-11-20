import { NAV_LINKS, ROUTES } from "@/constants/navigation";
import { getWorkBySlug } from "./works";

export const getWorkHref = (slug: string): string =>
    `${ROUTES.portfolio}/${slug}`;

const WORK_ROUTE_PREFIX = `${ROUTES.portfolio}/`;

/** Etiqueta que se muestra en la cortina de transición según el destino. */
export const getRouteLabel = (href: string): string => {
    const navLink = NAV_LINKS.find((link) => link.link === href);
    if (navLink) return navLink.label;

    if (href.startsWith(WORK_ROUTE_PREFIX)) {
        const slug = href.slice(WORK_ROUTE_PREFIX.length);
        return getWorkBySlug(slug)?.title.toUpperCase() ?? "";
    }

    return "";
};
