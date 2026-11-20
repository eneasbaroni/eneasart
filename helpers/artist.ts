import artistData from "@/data/artist.json";
import type { ArtistData, Exhibition } from "@/types";

const data = artistData as ArtistData;

export const getArtist = (): ArtistData => data;

/** Exposiciones de la más reciente a la más antigua. */
export const getExhibitions = (): Exhibition[] =>
    [...data.exhibitions].sort((a, b) => b.year - a.year);

export const getEducationRecords = () =>
    data.education.map(({ area, detail }, i) => ({
        key: `${area}-${i}`,
        label: area,
        value: detail,
    }));

export const getExhibitionRecords = () =>
    getExhibitions().map(({ year, title, venue, city, type }, i) => ({
        key: `${year}-${i}`,
        label: `${year} · ${type}`,
        value: `${title} — ${venue}, ${city}`,
    }));
