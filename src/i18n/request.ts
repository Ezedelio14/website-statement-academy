import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

async function loadMessages(locale: string) {
  const modules = ["home", "components", "explore-courses"];

  const messages = {};

  for (const newModule of modules) {
    try {
      const moduleMessages = (
        await import(`../../locales/${locale}/${newModule}.json`)
      ).default;
      Object.assign(messages, moduleMessages);
    } catch (error) {
      throw error;
    }
  }

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  console.log(locale);

  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: await loadMessages(locale),
  };
});
