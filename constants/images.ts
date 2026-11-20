/**
 * Calidades de compresión que usa next/image al generar AVIF/WebP.
 * Deben coincidir con `images.qualities` en next.config.ts.
 */
export const IMAGE_QUALITY = {
    /** Obras vistas en grande (carrusel, destacadas). */
    high: 90,
    /** Miniaturas y fotos secundarias. */
    standard: 75,
} as const;
