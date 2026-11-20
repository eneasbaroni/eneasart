/**
 * Genera favicon, íconos y apple-icon a partir de public/logo.svg.
 * Uso: npm run icons
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const LOGO = path.join(ROOT, "public", "logo.svg");
const APP = path.join(ROOT, "app");
const PUBLIC_ICONS = path.join(ROOT, "public", "icons");

const BACKGROUND = "#ffffff";
/** Proporción del lado del ícono que ocupa el alto del logo. */
const LOGO_SCALE = 0.72;

const readLogo = async () => {
    const svg = await fs.readFile(LOGO, "utf8");
    const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1];
    if (!viewBox) throw new Error("logo.svg no tiene viewBox");
    const [, , width, height] = viewBox.split(/\s+/).map(Number);
    const body = svg
        .replace(/<\?xml[^>]*>/, "")
        .replace(/<!--[\s\S]*?-->/g, "")
        .replace(/<svg[^>]*>/, "")
        .replace(/<\/svg>\s*$/, "")
        .trim();
    return { width, height, body };
};

/** SVG cuadrado con el logo centrado. */
const squareSvg = ({ width, height, body }, { background, darkMode }) => {
    const side = height / LOGO_SCALE;
    const x = -(side - width) / 2;
    const y = -(side - height) / 2;
    const bg = background
        ? `<rect x="${x}" y="${y}" width="${side}" height="${side}" fill="${background}"/>`
        : "";
    const dark = darkMode
        ? `<style>@media (prefers-color-scheme: dark){.st0{fill:#fff;stroke:#fff}}</style>`
        : "";
    // El estilo oscuro va al final para pisar el `.st0` original del logo.
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x} ${y} ${side} ${side}">${bg}${body}${dark}</svg>`;
};

const png = (svg, size) =>
    sharp(Buffer.from(svg), { density: 1200 })
        .resize(size, size)
        .png()
        .toBuffer();

/** Contenedor .ico con PNGs embebidos (soportado por todos los navegadores actuales). */
const buildIco = (images) => {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0);
    header.writeUInt16LE(1, 2);
    header.writeUInt16LE(images.length, 4);

    let offset = 6 + 16 * images.length;
    const entries = images.map(({ size, data }) => {
        const entry = Buffer.alloc(16);
        entry.writeUInt8(size >= 256 ? 0 : size, 0);
        entry.writeUInt8(size >= 256 ? 0 : size, 1);
        entry.writeUInt16LE(1, 4);
        entry.writeUInt16LE(32, 6);
        entry.writeUInt32LE(data.length, 8);
        entry.writeUInt32LE(offset, 12);
        offset += data.length;
        return entry;
    });

    return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
};

const main = async () => {
    const logo = await readLogo();
    const solid = squareSvg(logo, { background: BACKGROUND });

    await fs.mkdir(PUBLIC_ICONS, { recursive: true });

    // Pestaña del navegador: SVG transparente que se vuelve blanco en modo oscuro.
    await fs.writeFile(
        path.join(APP, "icon.svg"),
        squareSvg(logo, { darkMode: true })
    );

    // Fallback para navegadores sin soporte de SVG.
    const icoSizes = [16, 32, 48];
    const icoImages = await Promise.all(
        icoSizes.map(async (size) => ({ size, data: await png(solid, size) }))
    );
    await fs.writeFile(path.join(APP, "favicon.ico"), buildIco(icoImages));

    // iOS (acceso directo en pantalla de inicio).
    await fs.writeFile(path.join(APP, "apple-icon.png"), await png(solid, 180));

    // Manifest (Android / instalación).
    for (const size of [192, 512]) {
        await fs.writeFile(
            path.join(PUBLIC_ICONS, `icon-${size}.png`),
            await png(solid, size)
        );
    }

    console.log("Íconos generados.");
};

main();
