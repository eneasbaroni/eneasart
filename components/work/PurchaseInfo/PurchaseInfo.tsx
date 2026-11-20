import { Divider } from "../../common/Divider/Divider";
import { PURCHASE_INFO } from "@/constants/sale";

type PurchaseInfoProps = {
    labelClassName: string;
};

/** Condiciones de entrega, envío y pago de una obra disponible. */
export const PurchaseInfo = ({ labelClassName }: PurchaseInfoProps) => (
    <dl className="flex flex-col">
        {PURCHASE_INFO.map(({ label, value }) => (
            <div key={label}>
                <div className="flex items-baseline justify-between gap-6 py-3">
                    <dt className={`shrink-0 ${labelClassName}`}>{label}</dt>
                    <dd className="font-feature-display text-xs text-right text-black/70">
                        {value}
                    </dd>
                </div>
                <Divider opacity={20} />
            </div>
        ))}
    </dl>
);
