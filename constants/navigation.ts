import type { NavLink } from "@/types";

export const ROUTES = {
    home: "/",
    portfolio: "/portfolio",
    about: "/about",
    contact: "/contact",
} as const;

export const NAV_LINKS: NavLink[] = [
    { label: "HOME", link: ROUTES.home },
    { label: "PORTFOLIO", link: ROUTES.portfolio },
    { label: "SOBRE MÍ", link: ROUTES.about },
    { label: "CONTACTO", link: ROUTES.contact },
];
