"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Testimonials", href: "/testimonial" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-0">
      {/* EFEK GLASSMORHPISM (Berdasarkan referensi Billy Orr):
          - background: rgba(0, 0, 0, 0.4) -> Hitam transparan
          - backdrop-blur(20px) -> Efek kaca buram tebal
          - border-white/10 -> Garis pinggir kaca tipis
      */}
      <div className="w-full bg-black/40 backdrop-blur-[20px] border-b border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-500">
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-14 md:h-16 flex justify-between items-center">
          {/* 1. Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* CONTAINER LOGO KOTAK & ZOOM */}
            <div className="relative w-10 h-10 md:w-11 md:h-11 overflow-hidden rounded-md border border-white/10 shadow-lg">
              <Image
                src="/logo.png"
                alt="Nayra Store Logo"
                fill
                /* TRICK ZOOM: scale-[2.5] untuk membuang space kosong di file asli
                   object-center untuk fokus ke logo NR di tengah
                */
                className="object-cover scale-[1.5] object-center transition-transform duration-500 group-hover:scale-[1.8]"
                priority
              />
            </div>

            {/* NAMA STORE DENGAN EFEK GRADASI TIMBUL */}
            <div className="flex flex-col">
              <span className="text-xl md:text-lg font-black italic tracking-tight bg-gradient-to-r from-[#5587c1] via-[#494fa0] to-[#d77baa] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(152,148,242,0.5)]">
                NAYRASTORE
              </span>
            </div>
          </Link>

          {/* 2. Desktop Menu (Sleek & Iconic) */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-white/70 font-bold text-[10px] uppercase tracking-[0.25em] hover:text-white transition-all relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </Link>
            ))}
          </div>

          {/* 3. Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 flex flex-col gap-1.5 items-end group"
          >
            <div
              className={`h-[3px] bg-white rounded-full transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
            ></div>
            <div
              className={`h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}
            ></div>
            <div
              className={`h-[3px] bg-white rounded-full transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}
            ></div>
          </button>
        </div>
      </div>

      {/* 4. Mobile Popup Menu (Sesuai Referensi Glassmorphism) */}
      <div
        className={`md:hidden absolute top-[65px] right-5 left-5 transition-all duration-500 ease-out transform ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-10 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-black/70 backdrop-blur-[25px] border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden">
          <div className="flex flex-col p-2">
            {menuItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${idx * 40}ms` }}
                className="py-4 px-6 text-white/90 font-black uppercase text-[10px] tracking-[0.3em] text-center rounded-xl transition-all active:scale-95 hover:bg-white/10"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
