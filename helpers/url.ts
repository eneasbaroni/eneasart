import { SITE } from "@/constants/site";

/** URL absoluta del sitio a partir de una ruta interna ("/portfolio"). */
export const getAbsoluteUrl = (path = "/"): string =>
    new URL(path, SITE.url).toString();
