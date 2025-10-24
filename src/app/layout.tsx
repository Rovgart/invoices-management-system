import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import Providers from "./providers/providers";
import LoginModal from "@/components/ui/LoginModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const LatoFont = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: " Fakturek",
  description: "Panel do obsługi dokumentów księgowych",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${LatoFont.variable} antialiased`}
      >
        <LoginModal />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
