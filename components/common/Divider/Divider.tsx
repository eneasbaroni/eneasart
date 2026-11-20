type DividerProps = {
    variant?: "dark" | "light";
    orientation?: "horizontal" | "vertical";
    className?: string;
    opacity?: number;
};

export const Divider = ({
    variant = "dark",
    orientation = "horizontal",
    opacity = 80,
    className = "",
}: DividerProps) => {
    const isVertical = orientation === "vertical";

    return (
        <div
            role="separator"
            aria-orientation={orientation}
            className={`${isVertical ? "h-full border-l" : "w-full border-t"} transition-colors duration-1000 ${
                variant === "dark" ? "border-black" : "border-white"
            } ${className}`}
            style={{ opacity: opacity / 100 }}
        />
    );
};
