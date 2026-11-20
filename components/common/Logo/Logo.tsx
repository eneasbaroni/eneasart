import { SITE } from "@/constants/site";

type LogoProps = {
    className?: string;
    decorative?: boolean;
};

/**
 * Logo a partir de /public/logo.svg usado como máscara:
 * toma el color del texto (`currentColor`), así sirve en negro y en blanco.
 * El tamaño se controla con la altura en `className` (ej. `h-8`).
 */
export const Logo = ({ className = "", decorative = false }: LogoProps) => (
    <span
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : SITE.name}
        aria-hidden={decorative || undefined}
        className={`inline-block aspect-[116/181] bg-current mask-[url(/logo.svg)] mask-contain mask-center mask-no-repeat ${className}`}
    />
);
