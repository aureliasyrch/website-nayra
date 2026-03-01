"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white/60 backdrop-blur-xl border-t border-white/60 pt-12 pb-8 px-6 mt-10 overflow-hidden">
      {/* Dekorasi Cahaya Gradient Halus di Latar Belakang */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8E94F2]/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4D7CFE]/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* 1. BRAND SECTION (4 Kolom) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-lg">
                <Image
                  src="/logo-nayragamestore.jpeg"
                  alt="Nayra Store Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-black text-[#1E3A8A] tracking-tighter leading-none">
                  NAYRASTORE💫
                </h2>
                <p className="text-[#4D7CFE] text-[10px] font-bold tracking-[0.2em] uppercase mt-1">
                  Sweet Payment
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-xs">
              ⁺ ۪ ꒰𑇖. thanks for ordering in us. 🫧 we are waiting for your
              next order~
            </p>
            {/* WHATSAPP ACTION BUTTON */}
            <a
              href="https://wa.me/6285126312694"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E3A8A] via-[#4D7CFE] to-[#8E94F2] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <span>Hubungi WhatsApp</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          {/* 2. PAYMENT METHODS (5 Kolom) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/40 p-6 rounded-[2rem] border border-white/60 shadow-inner">
            <div className="space-y-4">
              <h3 className="text-[#1E3A8A] font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1E3A8A]"></span> Bank
                Transfer
              </h3>
              <div className="space-y-1">
                <p className="text-xs font-black text-slate-500">
                  BCA - Rifka Shafira Meilia
                </p>
                <p className="text-sm font-bold text-[#1E3A8A] bg-white/80 py-2 px-3 rounded-xl inline-block">
                  7350298091
                </p>
              </div>
              <div className="space-y-1 pt-2">
                <p className="text-xs font-black text-slate-500">
                  DANA - Rifka Shafira Meilia
                </p>
                <p className="text-sm font-bold text-[#4D7CFE] bg-white/80 py-2 px-3 rounded-xl inline-block">
                  085211625814
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#8E94F2] font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8E94F2]"></span>{" "}
                E-Wallet
              </h3>
              <div className="space-y-1">
                <p className="text-xs font-black text-slate-500">
                  GOPAY - Moh Nur Firdaus
                </p>
                <p className="text-sm font-bold text-[#1E3A8A] bg-white/80 py-2 px-3 rounded-xl inline-block">
                  085211625814
                </p>
              </div>
              <div className="space-y-1 pt-2">
                <p className="text-xs font-black text-slate-500">
                  SHOPEEPAY - Moh Nur Firdaus
                </p>
                <p className="text-sm font-bold text-[#8E94F2] bg-white/80 py-2 px-3 rounded-xl inline-block">
                  081313339627
                </p>
              </div>
            </div>
          </div>

          {/* 3. NOTES SECTION (3 Kolom) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[#1E3A8A] font-black text-xs uppercase tracking-[0.3em]">
              💭 Notes Fee:
            </h3>
            <ul className="space-y-2 text-[11px] font-bold text-slate-600 uppercase tracking-tight">
              <li className="flex gap-2">
                <span>⋆.𐙚</span> <span>Scan QR All E-wallet No Fee</span>
              </li>
              <li className="flex gap-2">
                <span>⋆.𐙚</span> <span>Scan QR Bank +500p</span>
              </li>
              <li className="flex gap-2">
                <span>⋆.𐙚</span> <span>TF E-wallet Fee +100p</span>
              </li>
              <li className="flex gap-2">
                <span>⋆.𐙚</span> <span>Topup E-wallet Fee +1000</span>
              </li>
              <li className="flex gap-2">
                <span>⋆.𐙚</span> <span>Bank ke E-wallet Fee +1000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
            © 2026 <span className="text-[#1E3A8A]">NAYRASTORE</span> — Premium
            Game Store
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-[10px] font-black text-[#4D7CFE] hover:text-[#1E3A8A] transition-colors uppercase tracking-widest"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-[10px] font-black text-[#4D7CFE] hover:text-[#1E3A8A] transition-colors uppercase tracking-widest"
            >
              Product
            </Link>
            <Link
              href="/contact"
              className="text-[10px] font-black text-[#4D7CFE] hover:text-[#1E3A8A] transition-colors uppercase tracking-widest"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
