import {
    AboutSection,
    Hero,
    SectionsList,
    WorksMarquee,
} from "@/components/home";

export default function HomePage() {
    return (
        <>
            <main>
                <Hero />
                <AboutSection />
            </main>
            <WorksMarquee />
            <SectionsList />
        </>
    );
}
