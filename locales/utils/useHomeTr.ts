import home from "../pt/home.json";
import { useTranslations } from "next-intl";
import { ExtractRecursiveKeys } from "./locales";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof home>;

export function useHomeTr() {
  const translation = useTranslations();

  const homeTr = (path: TranslationKeyPath, props?: Record<string, string>) =>
    translation(path, props);

  return { homeTr };
}
