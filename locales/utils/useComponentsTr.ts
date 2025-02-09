import { useTranslations } from "next-intl";
import { ExtractRecursiveKeys } from "./locales";
import components from "../pt/components.json";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof components>;

export function useComponentsTr() {
  const translation = useTranslations();

  const componentsTr = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => translation(path, props);

  return { componentsTr };
}
