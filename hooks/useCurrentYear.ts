import { useSyncExternalStore } from "react";
import { SITE } from "@/constants/site";

const subscribe = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => SITE.foundedYear;

/**
 * Año actual sin romper el prerender de Cache Components:
 * el servidor usa un año fijo y el cliente lo reemplaza por el real.
 */
export const useCurrentYear = () =>
    useSyncExternalStore(subscribe, getClientYear, getServerYear);
