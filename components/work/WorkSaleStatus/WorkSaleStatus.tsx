import { BuyButton } from "../BuyButton/BuyButton";
import { PurchaseInfo } from "../PurchaseInfo/PurchaseInfo";
import { SoldDot } from "../../common/SoldDot/SoldDot";
import { SOLD_LABEL } from "@/constants/sale";
import { formatPrice } from "@/helpers/format";
import type { Work } from "@/types";

type WorkSaleStatusProps = {
    work: Work;
    labelClassName: string;
};

/** Precio + botón de compra, o el estado "Vendida" con su punto rojo. */
export const WorkSaleStatus = ({ work, labelClassName }: WorkSaleStatusProps) => {
    if (!work.available) {
        return (
            <div className="flex items-center justify-between gap-4">
                <span className={labelClassName}>Estado</span>
                <span className="flex items-center gap-3">
                    <SoldDot size="md" />
                    <span
                        aria-hidden="true"
                        className="font-feature-display uppercase text-3xl tablet:text-2xl tracking-tight"
                    >
                        {SOLD_LABEL}
                    </span>
                </span>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between gap-4">
                <span className={labelClassName}>Precio</span>
                <span className="font-feature-display text-3xl tablet:text-2xl tracking-tight tabular-nums">
                    {formatPrice(work.price, work.currency)}
                </span>
            </div>
            <BuyButton work={work} />
            <PurchaseInfo labelClassName={labelClassName} />
        </div>
    );
};
