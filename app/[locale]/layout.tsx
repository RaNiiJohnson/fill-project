import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Locale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";

export const metadata: Metadata = {
  title: "Acheque Stael — Coach business pour coachs et consultants",
  description:
    "Acheque Stael accompagne les coachs, formateurs et cabinets de consulting à acquérir, convertir, gérer et fidéliser leurs clients.",
  openGraph: {
    title: "Acheque Stael — Coach business pour coachs et consultants",
    description:
      "Des accompagnements concrets pour structurer votre acquisition, votre conversion et votre parcours client.",
    type: "website",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
