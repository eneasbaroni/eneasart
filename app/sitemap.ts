import type { MetadataRoute } from "next";
import { NAV_LINKS } from "@/constants/navigation";
import { getWorkHref } from "@/helpers/routes";
import { getAbsoluteUrl } from "@/helpers/url";
import { getWorks } from "@/helpers/works";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = NAV_LINKS.map(({ link }) => ({ url: getAbsoluteUrl(link) }));

    const works = getWorks().map((work) => ({
        url: getAbsoluteUrl(getWorkHref(work.slug)),
        images: work.images.map((image) => getAbsoluteUrl(image)),
    }));

    return [...pages, ...works];
}
