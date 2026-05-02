"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function ContactPage() {
  const waNumber = "6285126312694"; // Update nomor WA
  const channelLink = "https://whatsapp.com/channel/0029VbCDR9FAO7RIbVhjA93E";
  const tiktokLink = "https://www.tiktok.com/@xrashsky14";

  // Template Chat Bantuan
  const waTemplate = encodeURIComponent(
    "Halo Admin NayraStore!\n\nNama saya: \nKeperluan: (Tanya Harga / Masalah Transaksi / Tanya Stok)\n\nMohon bantuannya ya min, terima kasih!",
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("reveal-visible");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0E14] py-16 px-6 md:px-10 relative overflow-hidden">
      {/* Galaxy Background */}
      <div className="stars-container"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-center reveal">
          <p className="text-blue-400 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-4 opacity-70">
            Customer Support
          </p>
          <h1 className="text-4xl md:text-7xl font-[1000] text-white tracking-tighter uppercase italic leading-none drop-shadow-[0_0_15px_rgba(77,124,254,0.5)]">
            Hubungi{" "}
            <span className="bg-gradient-to-r from-[#4D7CFE] via-[#8E94F2] to-[#f472b6] bg-clip-text text-transparent">
              Kami
            </span>
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 mt-6 rounded-full mx-auto shadow-[0_0_15px_#8E94F2]"></div>
          <p className="text-gray-400 mt-6 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs opacity-70 italic">
            NAYRASTORE • PREMIUM SERVICE FOR GAMER
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* 1. WhatsApp Admin Card */}
          <a
            href={`https://wa.me/${waNumber}?text=${waTemplate}`}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group bg-white/[0.03] backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl hover:border-blue-500/40 hover:-translate-y-3 transition-all duration-700 text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-blue-600/20 rounded-[2rem] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600/40 transition-all duration-500 shadow-glow-blue">
              <span className="text-4xl">💬</span>
            </div>
            <h3 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter mb-2">
              WA Admin
            </h3>
            <p className="text-blue-400 font-bold text-[10px] mb-6 uppercase tracking-widest opacity-80">
              Response Jam Kerja
            </p>
            <div className="w-full bg-white text-black font-black px-6 py-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
              Chat Sekarang
            </div>
          </a>

          {/* 2. WhatsApp Community Card */}
          <a
            href={channelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group bg-white/[0.03] backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl hover:border-green-500/40 hover:-translate-y-3 transition-all duration-700 text-center flex flex-col items-center"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="w-20 h-20 relative rounded-[2rem] overflow-hidden mb-6 group-hover:scale-110 transition-all duration-500 shadow-glow-green border border-white/10">
              <Image
                src="/logo.png"
                alt="Nayra Store"
                fill
                className="object-cover p-2"
              />
            </div>
            <h3 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter mb-2">
              Komunitas
            </h3>
            <p className="text-green-400 font-bold text-[10px] mb-6 uppercase tracking-widest opacity-80">
              Join For Updates
            </p>
            <div className="w-full bg-green-600 text-white font-black px-6 py-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-lg group-hover:bg-white group-hover:text-black transition-all">
              Gabung Sekarang
            </div>
          </a>

          {/* 3. TikTok Card */}
          <a
            href={tiktokLink}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group bg-white/[0.03] backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl hover:border-pink-500/40 hover:-translate-y-3 transition-all duration-700 text-center flex flex-col items-center"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="w-20 h-20 bg-pink-600/20 rounded-[2rem] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pink-600/40 transition-all duration-500 shadow-glow-pink">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.8.35-.9.63-1.15 1.7-1.1 2.7.02 1.21 1.05 2.27 2.25 2.27 1.15.06 2.22-.72 2.56-1.8.13-.58.11-1.19.11-1.79V.02z" />
              </svg>
            </div>
            <h3 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter mb-2">
              TikTok
            </h3>
            <p className="text-pink-400 font-bold text-[10px] mb-6 uppercase tracking-widest opacity-80">
              @xrashsky14
            </p>
            <div className="w-full bg-white text-black font-black px-6 py-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-lg group-hover:bg-pink-600 group-hover:text-white transition-all">
              Follow Kami
            </div>
          </a>
        </div>

        {/* Operational Info Box - Bagian yang diperbarui */}
        <div className="reveal bg-[#0F1219] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 border border-white/5 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-blue-600/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 transition-colors"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-[1000] text-white tracking-tighter uppercase italic mb-10 text-center md:text-left">
              Ada Masalah <span className="text-blue-400">Transaksi?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* 1. Alamat/Komitmen */}
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                  📍
                </div>
                <div className="space-y-1">
                  <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed">
                    <span className="text-white font-black uppercase italic tracking-tighter">
                      NayraStore
                    </span>{" "}
                    berkomitmen memberikan layanan aman & legal untuk gamer.
                  </p>
                </div>
              </div>

              {/* 2. Jam Operasional */}
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                  ⏰
                </div>
                <div className="space-y-1">
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                    Waktu Operasional
                  </p>
                  <p className="text-gray-300 font-medium text-sm md:text-base">
                    Jam Kerja Admin:{" "}
                    <span className="text-blue-400 font-black">
                      08.00 - 22.00 WIB
                    </span>
                  </p>
                </div>
              </div>

              {/* 3. Kecepatan */}
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                  ⚡
                </div>
                <div className="space-y-1">
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                    Kecepatan
                  </p>
                  <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed">
                    Proses Super Cepat:{" "}
                    <span className="text-purple-400 font-black italic">
                      1-10 MENIT SAJA
                    </span>
                  </p>
                </div>
              </div>

              {/* 4. Keamanan */}
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
                <div className="w-12 h-12 flex-shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                  🛡️
                </div>
                <div className="space-y-1">
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                    Keamanan
                  </p>
                  <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed">
                    Jaminan{" "}
                    <span className="text-white font-bold">
                      100% Anti-Banned
                    </span>{" "}
                    & Terpercaya di Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .stars-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(1.5px 1.5px at 20px 30px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 100px 150px, #fff, rgba(0, 0, 0, 0));
          background-size: 250px 250px;
          opacity: 0.15;
        }
        .shadow-glow-blue {
          box-shadow: 0 0 30px rgba(77, 124, 254, 0.2);
        }
        .shadow-glow-green {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.2);
        }
        .shadow-glow-pink {
          box-shadow: 0 0 30px rgba(244, 114, 182, 0.2);
        }
      `}</style>
    </div>
  );
}
