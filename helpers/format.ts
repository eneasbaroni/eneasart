import { SITE } from "@/constants/site";
import type { Currency, WorkDimensions } from "@/types";

export const padIndex = (value: number, length = 2): string =>
    String(value).padStart(length, "0");

export const formatPrice = (amount: number, currency: Currency): string =>
    new Intl.NumberFormat(SITE.locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(amount);

export const formatDimensions = ({ width, height, unit }: WorkDimensions) =>
    `${width} × ${height} ${unit}`;
