export type NavLink = {
    label: string;
    link: string;
};

export type LinkMode = "internal" | "external";

export type ExternalLink = NavLink & {
    mode: LinkMode;
};
