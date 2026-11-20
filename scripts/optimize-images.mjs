/**
 * Convierte las imágenes de public/images a JPG optimizado para la web.
 *
 * - PNG → JPG (mismo nombre y carpeta) y borra el PNG.
 * - JPG más grandes que MAX_SIDE → se redimensionan en el lugar.
 * - Nunca agranda imágenes chicas.
 *
 * Uso: npm run images
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");

const MAX_SIDE = 2000;
const QUALITY = 82;

// En Windows, el caché de sharp mantiene abiertos los archivos leídos
// y no deja sobrescribirlos.
sharp.cache(false);

const listFiles = async (dir) => {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const nested = await Promise.all(
        entries.map((entry) => {
            const full = path.join(dir, entry.name);
            return entry.isDirectory() ? listFiles(full) : [full];
        })
    );
    return nested.flat();
};

const toJpeg = (input) =>
    sharp(input)
        .rotate()
        .resize({
            width: MAX_SIDE,
            height: MAX_SIDE,
            fit: "inside",
            withoutEnlargement: true,
        })
        .flatten({ background: "#ffffff" })
        .toColorspace("srgb")
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toBuffer();

const formatKb = (bytes) => `${Math.round(bytes / 1024)} KB`;

const optimize = async (file) => {
    const ext = path.extname(file).toLowerCase();
    const relative = path.relative(IMAGES_DIR, file);
    // Se lee a memoria para no tener el archivo abierto al sobrescribirlo.
    const input = await fs.readFile(file);
    const before = input.length;

    if (ext === ".png") {
        const output = file.slice(0, -ext.length) + ".jpg";
        const buffer = await toJpeg(input);
        await fs.writeFile(output, buffer);
        await fs.unlink(file);
        return { relative, before, after: buffer.length, action: "png → jpg" };
    }

    if (ext === ".jpg" || ext === ".jpeg") {
        const { width = 0, height = 0 } = await sharp(input).metadata();
        if (Math.max(width, height) <= MAX_SIDE) {
            return { relative, before, after: before, action: "sin cambios" };
        }
        const buffer = await toJpeg(input);
        await fs.writeFile(file, buffer);
        return { relative, before, after: buffer.length, action: "redimensionada" };
    }

    return null;
};

const main = async () => {
    const files = await listFiles(IMAGES_DIR);
    const results = [];

    for (const file of files) {
        const result = await optimize(file);
        if (result) results.push(result);
    }

    for (const { relative, before, after, action } of results) {
        console.log(
            `${relative.padEnd(36)} ${formatKb(before).padStart(9)} → ${formatKb(after).padStart(8)}  ${action}`
        );
    }

    const total = (key) => results.reduce((sum, r) => sum + r[key], 0);
    console.log(
        `\nTotal: ${formatKb(total("before"))} → ${formatKb(total("after"))}`
    );
};

main();
