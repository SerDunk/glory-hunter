import "~/styles/globals.css";
import Container from "~/components/Container";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Glory Hunter",
  description: "Your one and only Glory Hunter progress tracker",
  icons: [{ rel: "icon", url: "/Logos.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
