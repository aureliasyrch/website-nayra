"use client";
import { useState } from "react";

export default function TestimonialPage() {
  // Data Testimonial (Bisa kamu tambah sesukamu)
  const testimonials = [
    {
      id: 1,
      user: "Sultan_MLBB",
      rating: 5,
      text: "Gila sih, baru transfer sedetik kemudian Diamond udah masuk. Rifka Project emang paling gokil!",
      date: "2 Feb 2026",
    },
    {
      id: 2,
      user: "RobloxLover",
      rating: 5,
      text: "Harga Robux-nya paling miring se-Indonesia. Adminnya juga fast respon banget di WA.",
      date: "10 Feb 2026",
    },
    {
      id: 3,
      user: "GenshinPlayer",
      rating: 5,
      text: "Awalnya ragu, tapi ternyata amanah banget. Prosesnya sat-set gak pake lama. Recomended!",
      date: "15 Feb 2026",
    },
    {
      id: 4,
      user: "ValorantBoy",
      rating: 5,
      text: "Top up Point Valorant di sini emang gak pernah ngecewain. Murah, lengkap, terpercaya!",
      date: "20 Feb 2026",
    },
    {
      id: 5,
      user: "FreeFireMaster",
      rating: 5,
      text: "Udah langganan dari tahun lalu, selalu dapet bonus dan harga member. Mantap Rifka Project!",
      date: "25 Feb 2026",
    },
    {
      id: 6,
      user: "SteamUser",
      rating: 4,
      text: "Proses cepat, harga bersaing. Sukses terus buat tokonya!",
      date: "27 Feb 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Font Black Italic */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-7xl font-[1000] text-slate-900 tracking-tighter uppercase italic leading-none">
            Apa Kata <span className="text-purple-600">Mereka?</span>
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-purple-600 to-blue-600 mt-6 rounded-full mx-auto"></div>
          <p className="text-slate-500 mt-6 font-black uppercase tracking-[0.2em] text-xs md:text-sm opacity-70">
            RIFKA PROJECT • DIPERCAYA RIBUAN GAMER
          </p>
        </div>

        {/* Grid Testimonial - Responsif */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 md:p-10 rounded-[3rem] border-[6px] border-white shadow-2xl shadow-slate-200 hover:shadow-purple-500/10 hover:-translate-y-3 transition-all duration-500 group"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-yellow-400 group-hover:scale-110 transition-transform origin-left">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-xl md:text-2xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-slate-700 font-bold text-lg md:text-xl leading-relaxed italic mb-8">
                "{item.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl shadow-lg shadow-purple-500/20 rotate-3 group-hover:rotate-12 transition-transform"></div>
                <div className="text-left">
                  <p className="text-slate-900 font-[1000] uppercase text-sm tracking-tighter">
                    @{item.user}
                  </p>
                  <p className="text-purple-600 font-black text-[10px] uppercase tracking-widest">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-24 bg-slate-950 rounded-[4rem] p-10 md:p-20 text-center overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-[1000] text-white tracking-tighter uppercase italic mb-6">
              Mau Jadi Bagian <br /> Dari{" "}
              <span className="text-blue-400">Mereka?</span>
            </h2>
            <p className="text-slate-400 font-bold mb-10 max-w-lg mx-auto uppercase tracking-wide text-xs md:text-sm">
              Bergabunglah dengan ribuan gamer lainnya yang sudah puas belanja
              di Rifka Project.
            </p>
            <a
              href="https://wa.me/6285211625814"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-[1000] px-12 py-5 rounded-[2rem] text-sm uppercase tracking-[0.2em] shadow-2xl shadow-purple-500/40 hover:brightness-110 active:scale-95 transition-all"
            >
              Order Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
