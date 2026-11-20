export type WorkFilterValue = "all" | "series" | "other";

export const WORK_FILTERS: { label: string; value: WorkFilterValue }[] = [
    { label: "Todo", value: "all" },
    { label: "Atisbos", value: "series" },
    { label: "Otras obras", value: "other" },
];
