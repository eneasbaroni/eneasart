import { WHATSAPP_PHONE } from "@/constants/contact";
import { formatPrice } from "./format";
import { getWorkHref } from "./routes";
import { getAbsoluteUrl } from "./url";
import { buildWhatsAppUrl } from "./whatsapp";
import { getWorkAlt } from "./works";
import type { Work } from "@/types";

export type PurchasableWork = Pick<
    Work,
    "slug" | "title" | "name" | "price" | "currency"
>;

export const getPurchaseMessage = (work: PurchasableWork): string =>
    `Hola Eneas! Me interesa comprar la obra "${getWorkAlt(work)}" (${formatPrice(
        work.price,
        work.currency
    )}). ¿Sigue disponible?\n${getAbsoluteUrl(getWorkHref(work.slug))}`;

export const getPurchaseUrl = (work: PurchasableWork): string =>
    buildWhatsAppUrl(WHATSAPP_PHONE, getPurchaseMessage(work));
