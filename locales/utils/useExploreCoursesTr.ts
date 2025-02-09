import { useTranslations } from "next-intl";
import { ExtractRecursiveKeys } from "./locales";
import components from "../pt/explore-courses.json";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof components>;

export function useExploreCoursesTr() {
  const translation = useTranslations();

  const exploreCourses = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => translation(path, props);

  return { exploreCourses };
}
