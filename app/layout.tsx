import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./fonts";
import ConvexClerkProvider from "./ConvexClerkProvider";

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Your AI podcast platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClerkProvider>{children}</ConvexClerkProvider>
      </body>
    </html>
  );
}
