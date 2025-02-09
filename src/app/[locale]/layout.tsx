import "@/styles/globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Manrope } from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { RootLayout } from "@/components/layout/RootLayout";
import { SearchContextProvider } from "@/context/SearchContext";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { LayoutProviders } from "@/providers/LayoutProvider";

const manRope = Manrope({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale ?? "en"}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={manRope.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <LayoutProviders>
            <SearchContextProvider>
              <RootLayout>{children}</RootLayout>
            </SearchContextProvider>
          </LayoutProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
