import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";
import { loadOgFonts, OG_SIZE, publicFileToDataUri } from "@/helpers/og";

export const alt = SITE.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpenGraphImage() {
    const [fonts, logo] = await Promise.all([
        loadOgFonts(),
        publicFileToDataUri("/logo.svg"),
    ]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 24,
                    background: "#ffffff",
                    color: "#171717",
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt="" width={116} height={181} />
                <div
                    style={{
                        fontFamily: "Feature Display",
                        fontSize: 140,
                        letterSpacing: -4,
                        textTransform: "uppercase",
                        lineHeight: 1,
                    }}
                >
                    {SITE.name}
                </div>
                <div style={{ fontFamily: "Suomi Hand Script", fontSize: 44 }}>
                    {`Pintor · Retrato al óleo · ${SITE.location}`}
                </div>
            </div>
        ),
        { ...size, fonts }
    );
}
