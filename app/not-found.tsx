import Link from "next/link";
import { ROUTES } from "@/constants/navigation";

export default function NotFound() {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-center gap-4 px-4">
            <h1 className="font-feature-display uppercase text-9xl tablet:text-7xl mobile:text-5xl tracking-tight">
                404
            </h1>
            <p className="font-suomi-hand-script text-3xl tablet:text-2xl mobile:text-xl">
                Esta página no existe
            </p>
            <Link
                href={ROUTES.portfolio}
                className="font-feature-display uppercase text-sm tracking-tight transition-[letter-spacing] duration-500 hover:tracking-wider"
            >
                Ver portfolio
            </Link>
        </main>
    );
}
