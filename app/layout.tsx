import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flexible",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {" "}
        <nav>Navbar</nav>
        <main>
          <body className={inter.className}>{children}</body>
        </main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
