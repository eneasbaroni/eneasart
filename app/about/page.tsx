import type { Metadata } from "next";
import {
    AboutBlock,
    AboutHeader,
    RecordList,
    StudioGallery,
    TextBlock,
} from "@/components/about";
import { ActionBtn } from "@/components/common";
import {
    getArtist,
    getEducationRecords,
    getExhibitionRecords,
} from "@/helpers/artist";
import { getAllSeries } from "@/helpers/works";

export const metadata: Metadata = {
    title: "Sobre mí",
    description:
        "Biografía y formación de Eneas, pintor de retratos al óleo de Córdoba, Argentina.",
};

export default function AboutPage() {
    const { biography, studioPhotos, dossier } = getArtist();
    const exhibitions = getExhibitionRecords();

    return (
        <main className="w-full border-b border-black/10">
            <AboutHeader />

            <AboutBlock label="Biografía">
                <TextBlock paragraphs={biography} />
            </AboutBlock>

            <StudioGallery photos={studioPhotos} />

            <AboutBlock label="Formación">
                <RecordList items={getEducationRecords()} />
            </AboutBlock>

            {exhibitions.length > 0 && (
                <AboutBlock label="Exposiciones">
                    <RecordList items={exhibitions} />
                </AboutBlock>
            )}

            {getAllSeries().map((series) => (
                <AboutBlock key={series.id} label={`${series.name} · ${series.year}`}>
                    <TextBlock paragraphs={series.statement} />
                </AboutBlock>
            ))}

            {dossier && (
                <div className="border-t border-black/10">
                    <ActionBtn
                        label={dossier.label}
                        link={dossier.href}
                        mode="external"
                    />
                </div>
            )}
        </main>
    );
}
