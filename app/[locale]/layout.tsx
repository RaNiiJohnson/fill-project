import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Locale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";

export const metadata: Metadata = {
  title: "Acheque Stael — Coach Business Francophone",
  description:
    "Entrepreneur, stratège et coach business — j'accompagne les fondateurs de startups et entrepreneurs francophones à créer, structurer et faire croître leur entreprise.",
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
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
