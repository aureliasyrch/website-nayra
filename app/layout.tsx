import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Nayra Game Store",
  description: "Top Up Game Murah & Terpercaya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Ganti bg-[#D0E7FF] menjadi bg-[#0B0E14] agar seluruh sela layar berwarna hitam pekat */}
      <body className="bg-[#0B0E14] text-slate-900 antialiased min-h-screen">
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
