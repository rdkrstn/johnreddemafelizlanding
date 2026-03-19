import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johnred.dev"),
  title: {
    default: "Johnred Demafeliz | Revenue Systems Consultant",
    template: "%s | Johnred Demafeliz",
  },
  description:
    "Revenue systems consultant for coaches, educators, and service founders. I build the conversion infrastructure that turns existing demand into closed revenue.",
  openGraph: {
    title: "Johnred Demafeliz | Revenue Systems Consultant",
    description:
      "Revenue systems consulting for founders who need infrastructure, not more ad spend.",
    type: "website",
    siteName: "Johnred Demafeliz",
    url: "https://johnred.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnred Demafeliz | Revenue Systems Consultant",
    description:
      "Revenue systems consulting for founders who need infrastructure, not more ad spend.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:font-bold focus:text-sm focus:shadow-xl"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
