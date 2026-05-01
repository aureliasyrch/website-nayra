"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black/60 backdrop-blur-3xl border-t border-white/10 pt-16 pb-10 px-6 mt-20 overflow-hidden">
      {/* Dekorasi Cahaya Galaksi di Latar Belakang */}
      <div className="absolute top-0 right-[-10%] w-80 h-80 bg-[#8E94F2]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-[#4D7CFE]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 1. BRAND SECTION */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <h2 className="text-xl md:text-xl font-black italic tracking-tighter leading-none bg-gradient-to-r from-[#4D7CFE] via-[#8E94F2] to-[#f472b6] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                  NAYRASTORE
                </h2>
                <p className="text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mt-1">
                  Sweet Payment
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs italic opacity-80">
              "⁺ ۪ ꒰𑇖. thanks for ordering in us. 🫧 we are waiting for your
              next order~"
            </p>

            <div className="flex flex-col gap-3">
              {/* WHATSAPP ACTION BUTTON */}
              <a
                href={`https://wa.me/6285126312694?text=${encodeURIComponent(
                  "Halo NayraStore!\n\nSaya mau tanya-tanya nih tentang produk yang tersedia. Apakah stoknya ready semua?",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <span className="bg-gradient-to-r from-[#4D7CFE] to-[#f472b6] bg-clip-text text-transparent">
                  Hubungi WhatsApp
                </span>
                <svg
                  className="w-4 h-4 text-pink-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* TIKTOK ACTION BUTTON */}
              <a
                href="https://www.tiktok.com/@xrashsky14"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                <span className="text-white/80">TikTok: @xrashsky14</span>
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.8.35-.9.63-1.15 1.7-1.1 2.7.02 1.21 1.05 2.27 2.25 2.27 1.15.06 2.22-.72 2.56-1.8.13-.58.11-1.19.11-1.79V.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2. PAYMENT METHODS SECTION */}
          <div className="lg:col-span-5 bg-white/5 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-md">
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#4D7CFE]"></span>
              ALL PAYMENT NAYRASTORE💫
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider italic">
                    BCA : Rifka Shafira Meilia
                  </p>
                  <p className="text-sm font-bold text-white bg-white/10 py-2 px-4 rounded-xl border border-white/5 inline-block">
                    7350298091
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider italic">
                    DANA : Rifka Shafira Meilia
                  </p>
                  <p className="text-sm font-bold text-blue-400 bg-blue-500/10 py-2 px-4 rounded-xl border border-blue-500/20 inline-block">
                    085211625814
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider italic">
                    GOPAY : Moh Nur Firdaus
                  </p>
                  <p className="text-sm font-bold text-white bg-white/10 py-2 px-4 rounded-xl border border-white/5 inline-block">
                    085211625814
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider italic">
                    SHOPEEPAY : Moh Nur Firdaus
                  </p>
                  <p className="text-sm font-bold text-purple-400 bg-purple-500/10 py-2 px-4 rounded-xl border border-purple-500/20 inline-block">
                    081313339627
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. NOTES SECTION */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] bg-white/5 py-2 px-4 rounded-lg inline-block border border-white/10">
              💭 NOTES :
            </h3>
            <ul className="space-y-3 text-[10px] font-bold text-gray-400 uppercase tracking-tight">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">-</span>
                <span>SCAN QR VIA E-WALLET NO FEE.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">-</span>
                <span>SCAN QR VIA BANK FEE +Rp.500</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">-</span>
                <span>TF E-WALLET FEE +Rp.100</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">-</span>
                <span>TOP UP VIA E-WALLET/BANK FEE +Rp.1000</span>
              </li>
            </ul>
            <p className="text-[9px] text-white/50 leading-tight italic">
              ⁺ ۪꒰𑇖. DON'T FORGET SEND A PROOF OF TRANSACTION TO ADMIN WITHOUT
              EDITED. THANK YOU. ദ്ദി˶˃ ᵕ ˂ )
            </p>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">
            © 2026{" "}
            <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
              NAYRASTORE
            </span>{" "}
            — Premium Game Store
          </p>
          <div className="flex gap-8">
            {["Home", "Product", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-[10px] font-black text-gray-400 hover:text-white transition-all uppercase tracking-widest relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
