import type { NavLink } from "@/types";

export const ROUTES = {
    home: "/",
    portfolio: "/portfolio",
    contact: "/contact",
} as const;

export const NAV_LINKS: NavLink[] = [
    { label: "HOME", link: ROUTES.home },
    { label: "PORTFOLIO", link: ROUTES.portfolio },
    { label: "CONTACTO", link: ROUTES.contact },
];
