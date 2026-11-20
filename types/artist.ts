export type EducationItem = {
    area: string;
    detail: string;
};

export type Exhibition = {
    year: number;
    title: string;
    venue: string;
    city: string;
    type: "individual" | "colectiva";
};

export type StudioPhoto = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export type Dossier = {
    label: string;
    href: string;
};

export type ArtistData = {
    biography: string[];
    education: EducationItem[];
    exhibitions: Exhibition[];
    studioPhotos: StudioPhoto[];
    dossier: Dossier | null;
};
