import { buildWhatsAppUrl } from "@/helpers/whatsapp";
import type { ExternalLink } from "@/types";

/** Número en formato internacional, sin "+" ni espacios (formato de wa.me). */
export const WHATSAPP_PHONE = "5493512110423";

const EMAIL_LINK: ExternalLink = {
    label: "EMAIL",
    link: "mailto:eneasbaroni@gmail.com",
    mode: "external",
};

const WHATSAPP_LINK: ExternalLink = {
    label: "WHATSAPP",
    link: `https://wa.me/${WHATSAPP_PHONE}`,
    mode: "external",
};

const CONTACT_WHATSAPP_MESSAGE =
    "Hola Eneas! Vi tu web y me gustaría hacerte una consulta.";

/** WhatsApp con mensaje predefinido, para la página de contacto. */
const WHATSAPP_CONTACT_LINK: ExternalLink = {
    ...WHATSAPP_LINK,
    link: buildWhatsAppUrl(WHATSAPP_PHONE, CONTACT_WHATSAPP_MESSAGE),
};

const INSTAGRAM_LINK: ExternalLink = {
    label: "INSTAGRAM",
    link: "https://www.instagram.com/eneas_art",
    mode: "external",
};

/** Links de la página de contacto. */
export const CONTACT_LINKS: ExternalLink[] = [
    EMAIL_LINK,
    WHATSAPP_CONTACT_LINK,
    INSTAGRAM_LINK,
];

/** Links de la columna "Redes" del footer. */
export const FOOTER_LINKS: ExternalLink[] = [
    EMAIL_LINK,
    WHATSAPP_LINK,
    INSTAGRAM_LINK,
];
