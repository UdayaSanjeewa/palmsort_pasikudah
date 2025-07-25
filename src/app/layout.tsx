import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Importing Paprika and Onset fonts
const paprika = localFont({
  src: "./fonts/Paprika.woff",
  variable: "--font-paprika",
  weight: "400", // specify the weight for Paprika, adjust if needed
});
const onest = localFont({
  src: "./fonts/Onest.woff",
  variable: "--font-onest",
  weight: "400", // specify the weight for Onset, adjust if needed
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Palm Sort Pasikudah",
  description: "Official Website for Palm Sort Pasikudah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${paprika.variable} ${onest.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
