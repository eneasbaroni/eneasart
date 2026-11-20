import { Divider } from "../../common/Divider/Divider";

export type RecordItem = {
    key: string;
    label: string;
    value: string;
};

type RecordListProps = {
    items: RecordItem[];
};

/** Lista de filas rótulo / valor, como la ficha técnica de las obras. */
export const RecordList = ({ items }: RecordListProps) => (
    <dl className="flex flex-col">
        <Divider opacity={20} />
        {items.map(({ key, label, value }) => (
            <div key={key}>
                <div className="flex items-baseline justify-between gap-6 py-3">
                    <dt className="shrink-0 font-feature-display text-xs uppercase tracking-[0.2em] text-black/40">
                        {label}
                    </dt>
                    <dd className="font-feature-display uppercase text-sm text-right">
                        {value}
                    </dd>
                </div>
                <Divider opacity={20} />
            </div>
        ))}
    </dl>
);
