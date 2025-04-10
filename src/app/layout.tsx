import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ClientLayout } from "./client-layout";
import { ScrollBehavior } from "./components/ScrollBehavior";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lied Sol - Liquid Staking Protocol",
  description: "Stake your SOL tokens and earn rewards while maintaining liquidity with Lied Sol.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              window.history.scrollRestoration = 'manual';
              window.scrollTo(0, 0);
            }
          `
        }} />
      </head>
      <body className={`${inter.className} overflow-y-scroll`}>
        <ScrollBehavior />
        <Providers>
          <div className="relative min-h-screen">
            <ClientLayout>
              <main className="relative w-full">
                {children}
              </main>
            </ClientLayout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
