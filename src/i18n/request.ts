import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing, type Locale } from "./routing";
import enMessages from "@/locales/en.json";
import esMessages from "@/locales/es.json";
import idMessages from "@/locales/id.json";
import ptBrMessages from "@/locales/pt-br.json";

type Messages = typeof enMessages;

const messagesMap: Record<Locale, Partial<Messages>> = {
  "en": enMessages,
  "es": esMessages,
  "id": idMessages,
  "pt-br": ptBrMessages,
};

function deepMerge<T>(base: T, override: Partial<T>): T {
  if (
    typeof base !== "object" ||
    base === null ||
    typeof override !== "object" ||
    override === null
  ) {
    return (override as T) ?? base;
  }

  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };

  for (const key of Object.keys(override as Record<string, unknown>)) {
    const baseValue = (base as Record<string, unknown>)[key];
    const overrideValue = (override as Record<string, unknown>)[key];
    if (overrideValue === undefined) continue;
    result[key] = deepMerge(baseValue as never, overrideValue as never);
  }

  return result as T;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = deepMerge(enMessages, messagesMap[locale as Locale]);
  return { locale, messages };
});
