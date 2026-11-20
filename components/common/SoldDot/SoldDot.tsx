import { SOLD_LABEL } from "@/constants/sale";

type SoldDotProps = {
    size?: "sm" | "md";
    className?: string;
};

const SIZES = {
    sm: "size-2.5",
    md: "size-3.5",
} as const;

/** Punto rojo que en galerías indica que la obra está vendida. */
export const SoldDot = ({ size = "sm", className = "" }: SoldDotProps) => (
    <span
        role="img"
        aria-label={SOLD_LABEL}
        title={SOLD_LABEL}
        className={`inline-block shrink-0 rounded-full bg-sold ${SIZES[size]} ${className}`}
    />
);
