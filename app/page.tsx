"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  // Palet Warna Navbar:
  // Biru Tua: #1E3A8A, Biru Muda: #4D7CFE, Ungu: #8E94F2
  const games = [
    { title: "Mobile Legends", id: "ml", color: "#1E3A8A", img: "/ml.jpeg" },
    { title: "Roblox", id: "roblox", color: "#4D7CFE", img: "/roblox.jpeg" },
    { title: "MCGG", id: "mcgg", color: "#8E94F2", img: "/MCGC.jpg" },
    { title: "PUBG Mobile", id: "pubg", color: "#1E3A8A", img: "/pubg.jpeg" },
    { title: "Free Fire", id: "ff", color: "#4D7CFE", img: "/freefire.jpeg" },
    {
      title: "Genshin Impact",
      id: "genshin",
      color: "#8E94F2",
      img: "/genshin2.jpeg",
      position: "object-top",
    },
  ];

  const testimonials = [
    {
      name: "Andini_01",
      game: "Mobile Legends",
      text: "Top up Diamond ML di sini beneran murah banget dan terpercaya. Langsung masuk!",
    },
    {
      name: "Rizky_Gamer",
      game: "Roblox",
      text: "Gak perlu nunggu lama, prosesnya fast respon. Bintang 5 buat NayraStore!",
    },
    {
      name: "Sisil_Cute",
      game: "Genshin",
      text: "Harganya paling bersahabat dibanding store lain. Langganan terus pokoknya!",
    },
  ];

  // Logic untuk Scroll Animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col h-auto bg-[#D0E7FF] overflow-x-hidden">
      {/* CSS Animasi Internal */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative px-4 pt-6 md:pt-10 reveal">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[4/3] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            <div className="absolute inset-0 bg-[#1E3A8A]">
              <Image
                src="/bg4-nayra.jpg"
                alt="Nayra Store Background"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/60 to-transparent"></div>
            </div>

            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 md:px-16 space-y-2 md:space-y-4">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
                TOP UP MURAH & <br />
                <span className="text-[#a8d6f0]">TERPERCAYA</span>
              </h1>

              <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
                <Link
                  href="/product"
                  className="bg-[#1E3A8A] text-white text-xs md:text-base font-bold px-6 py-3 rounded-xl hover:bg-[#4D7CFE] transition-all active:scale-95 shadow-lg border border-white/20"
                >
                  Beli Sekarang
                </Link>
                <a
                  href="https://wa.me/6285126312694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-md text-white text-xs md:text-base font-bold px-6 py-3 rounded-xl hover:bg-white/30 transition-all active:scale-95 shadow-lg border border-white/40 flex items-center gap-2"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR GAMES SECTION */}
      <section id="populer" className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12 text-left reveal">
            <h2 className="text-2xl md:text-5xl font-black text-[#1E3A8A] tracking-tight uppercase">
              Game Tersedia
            </h2>
            <div className="w-20 h-2 bg-gradient-to-r from-[#4D7CFE] to-[#8E94F2] mt-2 rounded-full"></div>
            <p className="text-[#4D7CFE] mt-3 text-sm md:text-xl font-bold">
              Pilih game favoritmu dan dapatkan harga termurah.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
            {games.map((game, idx) => (
              <div
                key={game.id}
                className="group flex flex-col items-center reveal"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  style={{ backgroundColor: game.color }}
                  className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-white transform transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(30,58,138,0.3)] cursor-pointer"
                >
                  <Image
                    src={game.img}
                    alt={game.title}
                    fill
                    className={`object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500 ${game.position || "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="mt-4 font-black text-[#1E3A8A] text-center text-sm md:text-lg uppercase">
                  {game.title}
                </h3>
                <Link
                  href={`/product`}
                  className="mt-2 text-[10px] md:text-xs font-black uppercase tracking-widest bg-white text-[#1E3A8A] px-6 py-2 rounded-full hover:bg-[#1E3A8A] hover:text-white transition-all shadow-md border border-[#1E3A8A]/10"
                >
                  Top Up
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIAL SECTION */}
      <section className="w-full bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] py-20 md:py-32 px-4 relative overflow-hidden">
        {/* Dekorasi Latar Belakang */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#D0E7FF] to-transparent opacity-20"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="reveal">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-4 tracking-tight">
              APA KATA <span className="text-[#8E94F2]">MEREKA?</span>
            </h2>
            <p className="text-blue-300 text-xs md:text-sm font-black mb-16 uppercase tracking-[0.4em]">
              Trusted & Verified Service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((testi, i) => (
              <div
                key={i}
                className="reveal relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl text-left transform transition-all duration-700 hover:-translate-y-4 group"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#8E94F2]/20 blur-3xl rounded-full group-hover:bg-[#8E94F2]/40 transition-colors duration-700"></div>

                <div className="flex gap-1 mb-6 text-yellow-400">
                  {"★★★★★".split("").map((s, idx) => (
                    <span key={idx} className="text-xl drop-shadow-md">
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-white text-lg md:text-xl font-medium italic leading-relaxed mb-10 relative z-10 opacity-90">
                  "{testi.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4D7CFE] to-[#8E94F2] rounded-2xl border-2 border-white/30 flex items-center justify-center font-black text-white text-xl shadow-lg group-hover:rotate-6 transition-transform">
                    {testi.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white font-black text-sm md:text-lg uppercase tracking-wider">
                      {testi.name}
                    </p>
                    <p className="text-[#8E94F2] text-xs font-bold uppercase">
                      Purchased {testi.game}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
