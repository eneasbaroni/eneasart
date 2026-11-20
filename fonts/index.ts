import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const featureDisplay = localFont({
    src: [
        {
            path: "./FeatureDisplay-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./FeatureDisplay-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-feature-display",
});

const suomiHandScript = localFont({
    src: "./suomihand-script.otf",
    weight: "400",
    style: "normal",
    variable: "--font-suomi-hand-script",
});

export const fontVariables = [
    geistSans.variable,
    geistMono.variable,
    featureDisplay.variable,
    suomiHandScript.variable,
].join(" ");
