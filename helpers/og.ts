// Solo servidor (usa node:fs): importar directo, no está en helpers/index.ts.
import { readFile } from "node:fs/promises";
import path from "node:path";

/** Tamaño estándar de las imágenes para compartir (WhatsApp, redes). */
export const OG_SIZE = { width: 1200, height: 630 } as const;

const MIME_TYPES: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
};

/**
 * Lee un archivo de /public y lo devuelve como data URI para ImageResponse.
 * Cacheado para que las imágenes se generen en el build y no en cada visita.
 */
export const publicFileToDataUri = async (publicPath: string) => {
    "use cache";
    const file = await readFile(path.join(process.cwd(), "public", publicPath));
    const mime =
        MIME_TYPES[path.extname(publicPath).toLowerCase()] ??
        "application/octet-stream";
    return `data:${mime};base64,${file.toString("base64")}`;
};

/** Lee una fuente de /fonts como Uint8Array (serializable por "use cache"). */
const readFont = async (fileName: string) => {
    "use cache";
    const file = await readFile(path.join(process.cwd(), "fonts", fileName));
    return new Uint8Array(file);
};

/**
 * ArrayBuffer con exactamente los bytes de la vista: al volver del caché,
 * el Uint8Array puede ser una porción de un buffer más grande.
 */
const toArrayBuffer = (bytes: Uint8Array): ArrayBuffer =>
    bytes.buffer.slice(
        bytes.byteOffset,
        bytes.byteOffset + bytes.byteLength
    ) as ArrayBuffer;

/** Fuentes del sitio para las imágenes generadas. */
export const loadOgFonts = async () => {
    const [display, script] = await Promise.all([
        readFont("FeatureDisplay-Regular.ttf"),
        readFont("suomihand-script.otf"),
    ]);

    return [
        {
            name: "Feature Display",
            data: toArrayBuffer(display),
            weight: 400 as const,
        },
        {
            name: "Suomi Hand Script",
            data: toArrayBuffer(script),
            weight: 400 as const,
        },
    ];
};
