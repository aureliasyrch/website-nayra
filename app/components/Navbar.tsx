"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Testimonials", href: "/testimonial" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-4 z-50 px-4 md:px-10">
      {/* Container Utama: Glassmorphism */}
      <div
        className={`max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl transition-all duration-500 ${
          isOpen ? "shadow-2xl" : "shadow-[0_8px_32px_rgba(30,58,138,0.15)]"
        }`}
      >
        <div className="px-5 py-3 md:px-8 flex justify-between items-center">
          {/* 1. Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden border-2 border-blue-100 shadow-[0_4px_10px_rgba(59,130,246,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Image
                src="/logo-nayragamestore.jpeg"
                alt="Nayra Store Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-xl font-black text-[#1E3A8A] tracking-tighter leading-none transition-colors group-hover:text-blue-600">
                NAYRA
              </span>
              <span className="text-[9px] md:text-[11px] text-[#2e56c1] font-bold tracking-[0.2em] uppercase mt-0.5">
                Game Store
              </span>
            </div>
          </Link>

          {/* 2. Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 rounded-xl text-[#1E3A8A] font-bold text-sm hover:text-blue-600 transition-all duration-300 hover:bg-white/70 hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05),0_4_15px_rgba(59,130,246,0.1)] group"
              >
                {item.name}
                <span className="absolute bottom-2 left-5 right-5 h-0.5 bg-gradient-to-r from-[#1E3A8A] via-[#4D7CFE] to-[#8E94F2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* 3. Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/40 border border-white/20 shadow-sm active:scale-90 transition-all flex items-center justify-center"
          >
            <div className="relative w-5 h-3.5 flex flex-col justify-between">
              <span
                className={`w-5 h-[2px] bg-[#1E3A8A] rounded-full transition-all duration-300 origin-left ${isOpen ? "rotate-[42deg] translate-y-[-1px] w-[20px]" : ""}`}
              ></span>
              <span
                className={`w-3.5 h-[2px] bg-[#4D7CFE] rounded-full transition-all duration-300 ${isOpen ? "opacity-0 -translate-x-2" : "opacity-100"}`}
              ></span>
              <span
                className={`w-5 h-[2px] bg-[#8E94F2] rounded-full transition-all duration-300 origin-left ${isOpen ? "-rotate-[42deg] translate-y-[1px] w-[20px]" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* 4. Mobile Menu Dropdown: SEMUA PAKAI GRADIENT */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-8 pt-2 flex flex-col space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                /* Di sini kuncinya: Semua item menggunakan bg-gradient-to-r */
                className="p-4 rounded-xl font-bold text-center text-white bg-gradient-to-r from-[#1E3A8A] via-[#4D7CFE] to-[#8E94F2] shadow-lg shadow-blue-200/50 active:scale-95 transition-all"
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
