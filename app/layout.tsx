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
      {/* Hapus flex flex-col di body agar scroll lebih natural */}
      <body className="bg-[#D0E7FF] text-slate-900 antialiased min-h-screen">
        <Navbar />
        {/* Main tidak perlu flex-grow jika body tidak flex-col */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
