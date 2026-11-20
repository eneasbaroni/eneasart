import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";
import { formatDimensions } from "@/helpers/format";
import { loadOgFonts, OG_SIZE, publicFileToDataUri } from "@/helpers/og";
import {
    getSeriesById,
    getWorkAlt,
    getWorkBySlug,
    getWorkCover,
    getWorks,
} from "@/helpers/works";

export const alt = `Obra de ${SITE.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export const generateStaticParams = () =>
    getWorks().map((work) => ({ slug: work.slug }));

const label = {
    fontFamily: "Feature Display",
    fontSize: 22,
    letterSpacing: 6,
    textTransform: "uppercase" as const,
    color: "rgba(0,0,0,0.45)",
};

export default async function WorkOpenGraphImage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const work = getWorkBySlug(slug);
    const fonts = await loadOgFonts();

    if (!work) {
        return new ImageResponse(<div style={{ display: "flex" }} />, {
            ...size,
            fonts,
        });
    }

    const series = getSeriesById(work.seriesId);
    const cover = await publicFileToDataUri(getWorkCover(work));
    const specs = [
        work.technique,
        work.dimensions && formatDimensions(work.dimensions),
        work.year,
    ].filter(Boolean);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    background: "#ffffff",
                    color: "#171717",
                }}
            >
                <div
                    style={{
                        width: 470,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#f2f2f2",
                        borderRight: "1px solid rgba(0,0,0,0.1)",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={cover}
                        alt={getWorkAlt(work)}
                        style={{ height: 570, objectFit: "contain" }}
                    />
                </div>

                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 12,
                        padding: "0 64px",
                    }}
                >
                    {series && (
                        <div style={label}>
                            {`${series.name} · ${series.year}`}
                        </div>
                    )}
                    <div
                        style={{
                            fontFamily: "Feature Display",
                            fontSize: 96,
                            letterSpacing: -2,
                            textTransform: "uppercase",
                            lineHeight: 1,
                        }}
                    >
                        {work.title}
                    </div>
                    {work.name && (
                        <div
                            style={{
                                fontFamily: "Suomi Hand Script",
                                fontSize: 60,
                                color: "rgba(0,0,0,0.6)",
                            }}
                        >
                            {work.name}
                        </div>
                    )}
                    {specs.length > 0 && (
                        <div style={{ ...label, marginTop: 24 }}>
                            {specs.join(" · ")}
                        </div>
                    )}
                    <div style={{ ...label, marginTop: 8, color: "#171717" }}>
                        {SITE.name}
                    </div>
                </div>
            </div>
        ),
        { ...size, fonts }
    );
}
