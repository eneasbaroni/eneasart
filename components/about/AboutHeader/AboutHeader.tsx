import { SITE } from "@/constants/site";

export const AboutHeader = () => (
    <header className="flex w-full flex-col items-center px-4 pt-32 pb-20 tablet:pt-24 tablet:pb-16 mobile:pt-20 mobile:pb-12">
        <h1 className="w-full text-center">
            <span className="block font-feature-display uppercase text-9xl tablet:text-7xl mobile:text-5xl tracking-tight">
                Sobre mí
            </span>
            <span className="-mt-2 block font-suomi-hand-script text-6xl tablet:text-5xl mobile:text-3xl">
                {`${SITE.name}, pintor`}
            </span>
        </h1>
    </header>
);
