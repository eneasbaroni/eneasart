export const buildWhatsAppUrl = (phone: string, message: string): string =>
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
