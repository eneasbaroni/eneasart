import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkSkeleton, WorkView } from "@/components/work";
import {
    getWorkAlt,
    getWorkBySlug,
    getWorkCover,
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

    return {
        title: getWorkAlt(work),
        description: [work.technique, work.year].filter(Boolean).join(" · "),
        openGraph: { images: [getWorkCover(work)] },
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
