// C:\Users\shehzad\Desktop\Clinic\app\layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "My Next App",
  description: "Website with Top Bar and Nav Bar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-x-hidden">
        <TopBar />
        <NavBar />
        <main className="m-0 p-0 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
