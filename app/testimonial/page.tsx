"use client";
import { useEffect } from "react";

export default function TestimonialPage() {
  const testimonials = [
    {
      id: 1,
      user: "Sultan_MLBB",
      rating: 5,
      text: "Gila sih, baru transfer sedetik kemudian Diamond udah masuk. NayraStore emang paling gokil!",
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
      text: "Udah langganan dari tahun lalu, selalu dapet bonus dan harga member. Mantap NayraStore!",
      date: "25 Feb 2026",
    },
    {
      id: 6,
      user: "SteamUser",
      rating: 5,
      text: "Proses cepat, harga bersaing. Sukses terus buat tokonya!",
      date: "27 Feb 2026",
    },
    {
      id: 7,
      user: "Hoyo_Enthusiast",
      rating: 5,
      text: "Welkin Moon termurah yang pernah saya temukan. Langsung masuk hitungan menit!",
      date: "1 Mar 2026",
    },
    {
      id: 8,
      user: "ProPlayer_ID",
      rating: 5,
      text: "Beli Starlight Card di sini gak pake ribet. Admin ramah, instruksi jelas. Top bgt!",
      date: "5 Mar 2026",
    },
    {
      id: 9,
      user: "Kids_Roblox",
      rating: 5,
      text: "Makasih NayraStore, akhirnya bisa beli limited item di Roblox. Robuxnya legal aman!",
      date: "10 Mar 2026",
    },
    {
      id: 10,
      user: "Granger_Main",
      rating: 5,
      text: "Skin Collector akhirnya kebeli berkat top up diamond di sini. Harganya dapet promo terus.",
      date: "12 Mar 2026",
    },
    {
      id: 11,
      user: "Zenn_FF",
      rating: 4,
      text: "Membership mingguan FF selalu lancar. Kadang antri dikit tapi tetep yang terbaik.",
      date: "14 Mar 2026",
    },
    {
      id: 12,
      user: "Xiao_Simp",
      rating: 5,
      text: "Top up Blessing Genshin paling nyaman di sini. Gak perlu login ID, cukup UID aja aman.",
      date: "18 Mar 2026",
    },
    {
      id: 13,
      user: "BloxFruit_King",
      rating: 5,
      text: "Robux via Gamepass-nya beneran aman. Estimasi waktu masuk sesuai janji admin.",
      date: "20 Mar 2026",
    },
    {
      id: 14,
      user: "MLBB_Lady",
      rating: 5,
      text: "Toko langganan emak-emak gamer wkwk. Murah dan adminnya sabar ngejelasin prosesnya.",
      date: "22 Mar 2026",
    },
    {
      id: 15,
      user: "Epic_Gamer88",
      rating: 5,
      text: "Sudah coba banyak toko, tapi cuma NayraStore yang konsisten kecepatannya. Langganan!",
      date: "25 Mar 2026",
    },
  ];

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
      {/* Background Bintang */}
      <div className="stars-container"></div>

      {/* Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-center reveal">
          <p className="text-blue-400 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-4 opacity-70">
            Customer Feedback
          </p>
          <h1 className="text-4xl md:text-7xl font-[1000] text-white tracking-tighter uppercase italic leading-none drop-shadow-[0_0_15px_rgba(142,148,242,0.5)]">
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-[#4D7CFE] via-[#8E94F2] to-[#f472b6] bg-clip-text text-transparent">
              Mereka?
            </span>
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 mt-6 rounded-full mx-auto shadow-[0_0_15px_#8E94F2]"></div>
          <p className="text-gray-400 mt-6 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs opacity-70">
            NAYRASTORE • DIPERCAYA RIBUAN GAMER
          </p>
        </div>

        {/* Grid Testimonial - Glassmorphism Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className="reveal bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl hover:border-blue-500/30 hover:-translate-y-3 transition-all duration-700 group"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-yellow-500/80 group-hover:text-yellow-400 transition-colors">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-xl drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-300 font-medium text-lg md:text-xl leading-relaxed italic mb-8">
                "{item.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#4D7CFE] to-[#8E94F2] rounded-2xl flex items-center justify-center font-black text-white shadow-lg rotate-3 group-hover:rotate-12 transition-transform">
                  {item.user.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-white font-black uppercase text-sm tracking-wide">
                    @{item.user}
                  </p>
                  <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest opacity-60">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section - Deep Galaxy Box */}
        <div className="mt-28 reveal relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-[50px] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-[#0F1219] border border-white/5 rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 text-center overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-[1000] text-white tracking-tighter uppercase italic mb-6">
                Mau Jadi Bagian <br /> Dari{" "}
                <span className="text-blue-400">Mereka?</span>
              </h2>
              <p className="text-gray-400 font-bold mb-10 max-w-lg mx-auto uppercase tracking-[0.2em] text-[10px] md:text-xs">
                Bergabunglah dengan ribuan gamer lainnya yang sudah puas belanja
                di NayraStore.
              </p>
              <a
                href={`https://wa.me/6285126312694?text=${encodeURIComponent(
                  "Halo Admin NayraStore! \n\nSaya baru saja melihat testimonial pelanggan dan tertarik untuk belanja. Boleh tanya-tanya dulu min?",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black font-black px-12 py-5 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-glow hover:bg-blue-600 hover:text-white active:scale-95 transition-all"
              >
                Order Sekarang
              </a>
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
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0, 0, 0, 0)),
            radial-gradient(3px 3px at 100px 150px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 250px 350px, #ddd, rgba(0, 0, 0, 0));
          background-size: 400px 400px;
          animation: stars 150s linear infinite;
          opacity: 0.4;
        }
        @keyframes stars {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-400px);
          }
        }
        .shadow-glow {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
