import { useCallback, useEffect, useState } from "react";
import { APP_NAVIGATE_EVENT } from "./usePageTransition";

export const useMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = useCallback(() => setIsOpen((open) => !open), []);
    const close = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        window.addEventListener(APP_NAVIGATE_EVENT, close);
        return () => window.removeEventListener(APP_NAVIGATE_EVENT, close);
    }, [close]);

    return { isOpen, toggle, close };
};
