import { useCallback, useState } from "react";

type CarouselState = {
    index: number;
    direction: number;
};

export const useCarousel = (length: number) => {
    const [{ index, direction }, setState] = useState<CarouselState>({
        index: 0,
        direction: 0,
    });

    const paginate = useCallback(
        (step: number) =>
            setState((current) => ({
                index: (current.index + step + length) % length,
                direction: step,
            })),
        [length]
    );

    const next = useCallback(() => paginate(1), [paginate]);
    const prev = useCallback(() => paginate(-1), [paginate]);

    const goTo = useCallback(
        (target: number) =>
            setState((current) =>
                target === current.index
                    ? current
                    : { index: target, direction: target > current.index ? 1 : -1 }
            ),
        []
    );

    return { index, direction, next, prev, goTo, hasMany: length > 1 };
};
