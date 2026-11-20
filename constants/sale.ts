/** Rótulo para obras vendidas (concuerda con "obra", femenino). */
export const SOLD_LABEL = "Vendida";

export type PurchaseInfoItem = {
    label: string;
    value: string;
};

/** Condiciones de compra que se muestran junto al botón Comprar. */
export const PURCHASE_INFO: PurchaseInfoItem[] = [
    { label: "Presentación", value: "Sin marco, lista para colgar" },
    {
        label: "Autenticidad",
        value: "Obra original firmada, con certificado de autenticidad",
    },
    {
        label: "Envíos",
        value: "A todo el país desde Córdoba. Costo de envío a cargo del comprador",
    },
    { label: "Retiro", value: "Sin cargo en Córdoba, a coordinar" },
    { label: "Pago", value: "Transferencia bancaria, o efectivo en el retiro" },
];
