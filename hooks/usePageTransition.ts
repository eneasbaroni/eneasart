import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAnimate } from "motion/react";
import { EASE, PAGE_TRANSITION } from "@/constants/animations";
import { getRouteLabel } from "@/helpers/routes";

export const APP_NAVIGATE_EVENT = "app-navigate";

const getInternalHref = (e: MouseEvent, pathname: string): string | null => {
    if (e.defaultPrevented || e.button !== 0) return null;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;

    const anchor = (e.target as HTMLElement)?.closest("a");
    if (!anchor || anchor.target === "_blank") return null;

    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("/") || href === pathname) return null;

    return href;
};

/** Cortina negra que cubre la pantalla al navegar entre rutas internas. */
export const usePageTransition = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [scope, animate] = useAnimate();
    const [destinationLabel, setDestinationLabel] = useState("");
    const isNavigating = useRef(false);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const href = getInternalHref(e, pathname);
            if (!href) return;

            e.preventDefault();
            e.stopPropagation();
            window.dispatchEvent(new Event(APP_NAVIGATE_EVENT));

            setDestinationLabel(getRouteLabel(href));
            isNavigating.current = true;

            animate(
                scope.current,
                { x: "0%" },
                { duration: PAGE_TRANSITION.duration, ease: EASE }
            ).then(() => router.push(href));
        };

        document.addEventListener("click", handleClick, true);
        return () => document.removeEventListener("click", handleClick, true);
    }, [pathname, router, animate, scope]);

    useEffect(() => {
        if (!isNavigating.current) return;
        isNavigating.current = false;

        const timeout = setTimeout(() => {
            animate(
                scope.current,
                { x: "-100%" },
                { duration: PAGE_TRANSITION.duration, ease: EASE }
            ).then(() => animate(scope.current, { x: "100%" }, { duration: 0 }));
        }, PAGE_TRANSITION.holdMs);

        return () => clearTimeout(timeout);
    }, [pathname, animate, scope]);

    return { scope, destinationLabel };
};
