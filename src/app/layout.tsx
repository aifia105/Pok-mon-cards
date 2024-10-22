import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers/providers";
import NavBarComponent from "@/components/navBarComponent";

export const metadata: Metadata = {
  title: "Pokemon Analytics",
  description:
    "Your go-to hub for detailed Pokémon stats, offering a comprehensive look at every Pokémon’s strengths and abilities.",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased`}>
        <Providers>
          <NavBarComponent></NavBarComponent>
          {children}
        </Providers>
      </body>
    </html>
  );
}
