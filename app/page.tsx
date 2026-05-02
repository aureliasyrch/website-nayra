"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function HomePage() {
  const games = [
    {
      title: "Mobile Legends",
      id: "ml",
      color: "#1E3A8A",
      img: "/mlcardHD.jpeg",
    },
    {
      title: "Roblox",
      id: "roblox",
      color: "#4D7CFE",
      img: "/RobloxcardHD.jpeg",
    },
    { title: "MCGG", id: "mcgg", color: "#8E94F2", img: "/mcggHD.JPEG" },
    { title: "PUBG Mobile", id: "pubg", color: "#1E3A8A", img: "/pubgHD.png" },
    { title: "Free Fire", id: "ff", color: "#4D7CFE", img: "/ffHD.JPEG" },
    {
      title: "Genshin Impact",
      id: "genshin",
      color: "#8E94F2",
      img: "/genshinHD.JPEG",
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

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
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
    <div className="flex flex-col h-auto bg-[#0B0E14] overflow-x-hidden">
      {/* CSS Animasi Internal & Galaxy Stars */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          filter: blur(10px);
          transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        @keyframes stars {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-1000px);
          }
        }
        .stars-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background-image:
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0, 0, 0, 0)),
            radial-gradient(3px 3px at 100px 150px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 250px 350px, #ddd, rgba(0, 0, 0, 0)),
            radial-gradient(2.5px 2.5px at 400px 100px, #fff, rgba(0, 0, 0, 0));
          background-size: 400px 400px;
          animation: stars 150s linear infinite;
          opacity: 0.5;
        }
      `}</style>

      {/* 1. RUNNING TEXT */}
      <div className="w-full bg-white/5 border-b border-white/5 py-3 overflow-hidden z-10">
        <div className="animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex shrink-0">
              <span className="text-white font-bold uppercase text-[11px] tracking-[0.3em] mx-10">
                🔥 DISCOUNT SETIAP MINGGU !
              </span>
              <span className="text-blue-400 font-bold uppercase text-[11px] tracking-[0.3em] mx-10">
                💎 GIVEAWAY SETIAP BULAN
              </span>
              <span className="text-pink-500 font-bold uppercase text-[11px] tracking-[0.3em] mx-10">
                🚀 PROSES INSTAN MANUAL
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative px-4 pt-6 md:pt-10 reveal z-10 flex justify-center">
        <div className="relative w-full max-w-[1200px] aspect-[1200/480] rounded-none overflow-hidden border border-white/10 group shadow-2xl shadow-black">
          <Image
            src="/HomeHD.JPEG"
            alt="Nayra Store Background"
            fill
            className="object-cover opacity-100 group-hover:scale-[1.03] transition-transform duration-[4000ms] ease-out"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-end pb-3 sm:pb-6 md:pb-10 px-4 sm:px-8 md:px-12">
            <div className="flex justify-between w-full items-center">
              <Link
                href="/product"
                className="bg-white text-black text-[8px] sm:text-[10px] md:text-sm font-black px-3 py-2 sm:px-6 md:px-8 md:py-3 rounded-lg md:rounded-xl hover:bg-blue-600 hover:text-white transition-all active:scale-90 shadow-lg whitespace-nowrap"
              >
                BELI SEKARANG
              </Link>
              <a
                href="https://wa.me/6285126312694"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/70 backdrop-blur-md text-white text-[8px] sm:text-[10px] md:text-sm font-black px-3 py-2 sm:px-6 md:px-8 md:py-3 rounded-lg md:rounded-xl border border-white/20 hover:bg-black/90 transition-all shadow-lg whitespace-nowrap"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR GAMES SECTION */}
      <section id="populer" className="py-16 md:py-24 px-4 bg-[#0B0E14] z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-left reveal">
            <h2 className="text-2xl md:text-5xl font-black text-white tracking-tight uppercase">
              Game Tersedia
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#4D7CFE] via-[#8E94F2] to-[#f472b6] mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {games.map((game, idx) => (
              <div
                key={game.id}
                className="group flex flex-col reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <Link href="/product">
                  {/* Menyesuaikan aspect ratio ke 105:148 agar tidak terpotong */}
                  <div className="relative aspect-[105/148] w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#161B22] transform transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-blue-500/20 group-hover:border-blue-500/40 cursor-pointer">
                    <Image
                      src={game.img}
                      alt={game.title}
                      fill
                      /* Menggunakan object-contain agar seluruh isi gambar 105x148 masuk sempurna */
                      className={`object-contain opacity-100 group-hover:scale-[1.02] transition-transform duration-700 ${game.position || "object-center"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                </Link>
                <Link
                  href="/product"
                  className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-center py-2 text-white/30 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-500 transition-all"
                >
                  {game.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GRADIENT DIVIDER */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#8E94F2] to-transparent opacity-50 shadow-[0_0_20px_rgba(142,148,242,0.5)]"></div>

      {/* 5. TESTIMONIAL GALAXY SECTION */}
      <section className="relative w-full bg-[#0B0E14] py-20 md:py-32 px-4 overflow-hidden">
        <div className="stars-container"></div>
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[180px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-4 tracking-tight">
              REVIEW{" "}
              <span className="bg-gradient-to-r from-[#4D7CFE] via-[#8E94F2] to-[#f472b6] bg-clip-text text-transparent">
                PELANGGAN
              </span>
            </h2>
            <div className="w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, i) => (
              <div
                key={i}
                className="reveal bg-white/[0.02] backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-700 shadow-2xl hover:shadow-blue-500/5 group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex gap-1 mb-6 text-yellow-500/70 group-hover:text-yellow-400 transition-colors">
                  {"★★★★★".split("").map((s, idx) => (
                    <span
                      key={idx}
                      className="drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-lg italic leading-relaxed mb-8 font-medium">
                  "{testi.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4D7CFE] to-[#8E94F2] rounded-2xl flex items-center justify-center font-black text-white shadow-lg group-hover:rotate-6 transition-transform">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wide">
                      {testi.name}
                    </p>
                    <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                      {testi.game}
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
