import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/fonts";
import { Footer, PageTransition, Sidebar } from "@/components/common";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: {
        default: SITE.title,
        template: `%s — ${SITE.name}`,
    },
    description: SITE.description,
    openGraph: {
        type: "website",
        siteName: SITE.name,
        locale: SITE.ogLocale,
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang={SITE.locale}>
            <body className={`${fontVariables} antialiased`}>
                <Sidebar />
                <PageTransition />
                <div className="pl-16 tablet:pl-12">
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
