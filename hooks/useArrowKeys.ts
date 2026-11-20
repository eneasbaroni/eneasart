import { useEffect } from "react";

type ArrowKeysHandlers = {
    onLeft: () => void;
    onRight: () => void;
    enabled?: boolean;
};

export const useArrowKeys = ({
    onLeft,
    onRight,
    enabled = true,
}: ArrowKeysHandlers) => {
    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") onLeft();
            if (e.key === "ArrowRight") onRight();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onLeft, onRight, enabled]);
};
