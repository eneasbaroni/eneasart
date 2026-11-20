type SectionLabelProps = {
    children: React.ReactNode;
    className?: string;
};

/** Rótulo editorial en mayúsculas espaciadas (ej. "Trabajos destacados"). */
export const SectionLabel = ({ children, className = "" }: SectionLabelProps) => (
    <p
        className={`font-feature-display uppercase text-xs tracking-[0.3em] ${className}`}
    >
        {children}
    </p>
);
