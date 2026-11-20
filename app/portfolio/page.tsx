import type { Metadata } from "next";
import { FeaturedWorks, WorksGrid } from "@/components/portfolio";
import { getFeaturedWorks, getWorks } from "@/helpers/works";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Retratos al óleo de Eneas: la serie Atisbos y otras obras.",
};

export default function PortfolioPage() {
    return (
        <main className="w-full border-b border-black/10">
            <FeaturedWorks works={getFeaturedWorks()} />
            <WorksGrid works={getWorks()} />
        </main>
    );
}
