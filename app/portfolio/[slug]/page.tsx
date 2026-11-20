import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkSkeleton, WorkView } from "@/components/work";
import { SITE } from "@/constants/site";
import { getWorkHref } from "@/helpers/routes";
import {
    getWorkAlt,
    getWorkBySlug,
    getWorkDescription,
    getWorks,
} from "@/helpers/works";

type WorkPageProps = PageProps<"/portfolio/[slug]">;

export const generateStaticParams = () =>
    getWorks().map((work) => ({ slug: work.slug }));

export async function generateMetadata({
    params,
}: WorkPageProps): Promise<Metadata> {
    const { slug } = await params;
    const work = getWorkBySlug(slug);
    if (!work) return {};

    const title = getWorkAlt(work);
    const description = getWorkDescription(work);

    // La imagen para compartir sale de ./opengraph-image.tsx.
    // `openGraph` reemplaza al del layout, por eso se repiten siteName y locale.
    return {
        title,
        description,
        alternates: { canonical: getWorkHref(slug) },
        openGraph: {
            type: "website",
            siteName: SITE.name,
            locale: SITE.ogLocale,
            title: `${title} — ${SITE.name}`,
            description,
            url: getWorkHref(slug),
        },
    };
}

/** Resuelve el slug dentro del Suspense para no bloquear la navegación. */
const WorkContent = async ({ params }: Pick<WorkPageProps, "params">) => {
    const { slug } = await params;
    const work = getWorkBySlug(slug);
    if (!work) notFound();

    return <WorkView work={work} />;
};

export default function WorkPage({ params }: WorkPageProps) {
    return (
        <Suspense fallback={<WorkSkeleton />}>
            <WorkContent params={params} />
        </Suspense>
    );
}
