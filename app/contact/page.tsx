import type { Metadata } from "next";
import { ActionBtn, Divider } from "@/components/common";
import { CONTACT_LINKS } from "@/constants/contact";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
    title: "Contacto",
};

export default function ContactPage() {
    return (
        <main className="relative flex w-full min-h-svh flex-col items-center justify-center pt-12 pb-40">
            <h1 className="w-full text-center">
                <span className="block font-feature-display uppercase text-9xl tablet:text-7xl mobile:text-5xl tracking-tight">
                    Hablemos
                </span>
                <span className="-mt-2 block font-suomi-hand-script text-8xl tablet:text-6xl mobile:text-4xl">
                    de pintura
                </span>
            </h1>

            <p className="font-feature-display max-w-xl p-4 text-center text-lg mobile:text-base">
                Consultas sobre obras, exhibiciones y colaboraciones.
            </p>

            <div className="absolute bottom-0 flex w-full flex-col">
                <Divider opacity={30} />
                <div className="flex flex-wrap justify-center divide-x divide-black/20 mobile:flex-col mobile:divide-x-0 mobile:divide-y">
                    {CONTACT_LINKS.map(({ label, link, mode }) => (
                        <div key={label} className="flex-1 mobile:w-full">
                            <ActionBtn label={label} link={link} mode={mode} />
                        </div>
                    ))}
                </div>
                <Divider opacity={30} />
                <p className="py-4 mobile:py-3 text-center font-feature-display uppercase text-sm mobile:text-xs tracking-tight">
                    {SITE.location}
                </p>
            </div>
        </main>
    );
}
