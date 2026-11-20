export type Currency = "ARS";

export type WorkDimensions = {
    width: number;
    height: number;
    unit: "cm";
};

export type Work = {
    id: number;
    slug: string;
    title: string;
    name: string | null;
    seriesId: string | null;
    technique: string | null;
    dimensions: WorkDimensions | null;
    year: number | null;
    price: number;
    currency: Currency;
    available: boolean;
    featured: boolean;
    images: string[];
};

export type Series = {
    id: string;
    name: string;
    subtitle: string;
    year: number;
    statement: string[];
};

export type WorksData = {
    series: Series[];
    works: Work[];
};
