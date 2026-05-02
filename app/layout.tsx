import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Nayra Game Store",
  description: "Top Up Game Murah & Terpercaya",
  verification: {
    google: "nph-DS9mtY5L5KS5yiBo--ZUXHlxcEzoFa3lLlf2gyo",
  },
  // 1. TAMBAHKAN BAGIAN INI UNTUK WHATSAPP
  openGraph: {
    title: "Nayra Game Store",
    description: "Top Up Game Murah & Terpercaya",
    url: "https://nayragamestore.vercel.app",
    siteName: "NayraStore",
    images: [
      {
        url: "/nayrastore.png", // Mengarah ke public/nayrastore.png
        width: 1200,
        height: 630,
        alt: "NayraStore Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  // 2. TAMBAHKAN BAGIAN INI UNTUK LOGO DI TAB BROWSER
  icons: {
    icon: "/nayrastore.png", // Ganti favicon vercel jadi logo kamu
    shortcut: "/nayrastore.png",
    apple: "/nayrastore.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0B0E14] text-slate-900 antialiased min-h-screen">
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
