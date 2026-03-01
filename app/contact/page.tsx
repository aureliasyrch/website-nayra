"use client";
import { useState } from "react";

export default function ContactPage() {
  const waNumber = "6285211625814"; // Nomor WhatsApp kamu
  const igAccount = "rifkaproject"; // Ganti dengan username Instagram toko kamu

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Header Section - Font Black Italic Modern */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-7xl font-[1000] text-slate-900 tracking-tighter uppercase italic leading-none">
            Hubungi <span className="text-blue-600">Kami</span>
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mt-6 rounded-full mx-auto"></div>
          <p className="text-slate-500 mt-6 font-black uppercase tracking-[0.2em] text-xs md:text-sm opacity-70 italic">
            RIFKA PROJECT • LAYANAN PELANGGAN 24/7
          </p>
        </div>

        {/* Contact Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card WhatsApp */}
          <a
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Halo Rifka Project! Saya butuh bantuan terkait produk gaming.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-10 rounded-[3rem] border-[6px] border-white shadow-2xl shadow-blue-500/10 hover:border-blue-500 hover:-translate-y-3 transition-all duration-500 text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-[2rem] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-200">
              <span className="text-4xl">💬</span>
            </div>
            <h3 className="text-2xl font-[1000] text-slate-900 uppercase italic tracking-tighter mb-2">
              WhatsApp Admin
            </h3>
            <p className="text-slate-500 font-bold text-sm mb-6 uppercase tracking-wider">
              +62 852-1162-5814
            </p>
            <div className="bg-blue-600 text-white font-black px-8 py-3 rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-lg group-hover:bg-blue-700 transition-colors">
              Chat Sekarang
            </div>
          </a>

          {/* Card Instagram */}
          <a
            href={`https://instagram.com/${igAccount}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-10 rounded-[3rem] border-[6px] border-white shadow-2xl shadow-purple-500/10 hover:border-purple-500 hover:-translate-y-3 transition-all duration-500 text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-purple-100 rounded-[2rem] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-200">
              <span className="text-4xl">📸</span>
            </div>
            <h3 className="text-2xl font-[1000] text-slate-900 uppercase italic tracking-tighter mb-2">
              Instagram
            </h3>
            <p className="text-slate-500 font-bold text-sm mb-6 uppercase tracking-wider">
              @{igAccount}
            </p>
            <div className="bg-purple-600 text-white font-black px-8 py-3 rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-lg group-hover:bg-purple-700 transition-colors">
              Follow Kami
            </div>
          </a>
        </div>

        {/* Information Box Section */}
        <div className="mt-16 bg-slate-950 rounded-[3.5rem] p-10 md:p-16 border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-600/20 transition-colors"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-[1000] text-white tracking-tighter uppercase italic mb-6">
              Ada Masalah <span className="text-blue-400">Transaksi?</span>
            </h2>
            <div className="space-y-4 text-slate-400 font-bold text-sm md:text-base leading-relaxed">
              <p>
                📍 <span className="text-white">Rifka Project</span> berkomitmen
                memberikan layanan terbaik untuk para gamer.
              </p>
              <p>
                ⏰ Jam Operasional:{" "}
                <span className="text-blue-400">08.00 - 22.00 WIB</span>
              </p>
              <p>
                ⚡ Proses pesanan biasanya memakan waktu{" "}
                <span className="text-purple-400">1-10 menit</span> setelah
                konfirmasi pembayaran.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
