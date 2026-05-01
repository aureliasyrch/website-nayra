"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [selectedGame, setSelectedGame] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [orderData, setOrderData] = useState({
    item: "",
    amount: "",
    idPlayer: "",
    phone: "",
  });

  const games = [
    {
      name: "Mobile Legends",
      id: "ml",
      img: "/mlcardHD.jpeg",
      desc: "Diamonds, Weekly Pass, Starlight, & Gift Skin.",
      hasCategories: true,
      categories: [
        {
          name: "Diamonds Indo",
          prices: [
            { qty: "5 Diamonds", price: "Rp 1.500" },
            { qty: "50+50 Diamonds", price: "Rp 15.500" },
            { qty: "59 Diamonds", price: "Rp 15.500" },
            { qty: "85 Diamonds", price: "Rp 22.300" },
            { qty: "Weekly Pass", price: "Rp 27.500" },
            { qty: "112 Diamonds", price: "Rp 29.900" },
            { qty: "150+150 Diamonds", price: "Rp 44.500" },
            { qty: "172 Diamonds", price: "Rp 45.800" },
            { qty: "240 Diamonds", price: "Rp 62.200" },
            { qty: "250+250 Diamonds", price: "Rp 73.500" },
            { qty: "296 Diamonds", price: "Rp 76.500" },
            { qty: "408 Diamonds", price: "Rp 104.800" },
            { qty: "500+500 Diamonds", price: "Rp 145.500" },
            { qty: "568 Diamonds", price: "Rp 143.700" },
            { qty: "659 Diamonds", price: "Rp 168.600" },
            { qty: "706 Diamonds", price: "Rp 179.800" },
            { qty: "875 Diamonds", price: "Rp 219.200" },
            { qty: "1050 Diamonds", price: "Rp 261.500" },
            { qty: "1159 Diamonds", price: "Rp 290.700" },
            { qty: "1220 Diamonds", price: "Rp 305.900" },
            { qty: "1412 Diamonds", price: "Rp 353.800" },
            { qty: "2010 Diamonds", price: "Rp 475.000" },
          ],
        },
        {
          name: "Diamonds Global",
          prices: [
            { qty: "50+50 Diamonds", price: "Rp 14.500" },
            { qty: "86 Diamonds", price: "Rp 21.000" },
            { qty: "150+150 Diamonds", price: "Rp 41.000" },
            { qty: "172 Diamonds", price: "Rp 42.500" },
            { qty: "257 Diamonds", price: "Rp 60.700" },
            { qty: "250+250 Diamonds", price: "Rp 65.500" },
            { qty: "344 Diamonds", price: "Rp 82.700" },
            { qty: "429 Diamonds", price: "Rp 101.500" },
            { qty: "500+500 Diamonds", price: "Rp 132.500" },
            { qty: "514 Diamonds", price: "Rp 120.700" },
            { qty: "600 Diamonds", price: "Rp 140.500" },
            { qty: "706 Diamonds", price: "Rp 162.000" },
            { qty: "878 Diamonds", price: "Rp 202.700" },
            { qty: "963 Diamonds", price: "Rp 222.000" },
            { qty: "1050 Diamonds", price: "Rp 245.000" },
            { qty: "1412 Diamonds", price: "Rp 323.700" },
            { qty: "2195 Diamonds", price: "Rp 485.200" },
            { qty: "3688 Diamonds", price: "Rp 799.500" },
            { qty: "5532 Diamonds", price: "Rp 1.181.500" },
          ],
        },
        {
          name: "Diamonds Malaysia",
          prices: [
            { qty: "42 Diamonds", price: "Rp 12.700" },
            { qty: "50+50 Diamonds", price: "Rp 16.500" },
            { qty: "70 Diamonds", price: "Rp 20.600" },
            { qty: "112 Diamonds", price: "Rp 33.700" },
            { qty: "140 Diamonds", price: "Rp 40.800" },
            { qty: "150+150 Diamonds", price: "Rp 48.000" },
            { qty: "250+250 Diamonds", price: "Rp 79.500" },
            { qty: "284 Diamonds", price: "Rp 80.700" },
            { qty: "355 Diamonds", price: "Rp 101.100" },
            { qty: "429 Diamonds", price: "Rp 121.400" },
            { qty: "500+500 Diamonds", price: "Rp 160.500" },
            { qty: "708 Diamonds", price: "Rp 205.000" },
            { qty: "716 Diamonds", price: "Rp 202.100" },
            { qty: "1084 Diamonds", price: "Rp 307.200" },
            { qty: "1446 Diamonds", price: "Rp 403.800" },
            { qty: "2976 Diamonds", price: "Rp 805.000" },
            { qty: "7502 Diamonds", price: "Rp 2.010.500" },
          ],
        },
        {
          name: "Diamonds Filipina",
          prices: [
            { qty: "11 Diamonds", price: "Rp 2.900" },
            { qty: "22 Diamonds", price: "Rp 5.900" },
            { qty: "50+50 Diamonds", price: "Rp 15.500" },
            { qty: "56 Diamonds", price: "Rp 13.800" },
            { qty: "112 Diamonds", price: "Rp 27.200" },
            { qty: "150+150 Diamonds", price: "Rp 42.500" },
            { qty: "250+250 Diamonds", price: "Rp 68.500" },
            { qty: "275 Diamonds", price: "Rp 69.000" },
            { qty: "336 Diamonds", price: "Rp 81.000" },
            { qty: "565 Diamonds", price: "Rp 137.000" },
            { qty: "500+500 Diamonds", price: "Rp 137.500" },
            { qty: "1163 Diamonds", price: "Rp 267.600" },
            { qty: "2398 Diamonds", price: "Rp 532.100" },
            { qty: "6042 Diamonds", price: "Rp 1.330.100" },
          ],
        },
        {
          name: "Starlight Card",
          prices: [
            { qty: "Basic Starlight", price: "Rp 37.500" },
            { qty: "3x Basic (Free Capcut)", price: "Rp 110.000" },
            { qty: "Premium Starlight", price: "Rp 80.000" },
          ],
        },
        {
          name: "Giftshop Skin",
          prices: [
            { qty: "Basic (269 Diamonds)", price: "Rp 35.000" },
            { qty: "Elite (399 Diamonds)", price: "Rp 55.000" },
            { qty: "Elite (599 Diamonds)", price: "Rp 75.000" },
            { qty: "Special (749 Diamonds)", price: "Rp 105.000" },
            { qty: "Epic (899 Diamonds)", price: "Rp 115.000" },
            { qty: "Epic (1089 Diamonds)", price: "Rp 155.000" },
          ],
        },
      ],
    },
    {
      name: "Genshin Impact",
      id: "genshin",
      img: "/genshinHD.JPEG",
      desc: "Genesis Crystals, Chronal Nexus & BWM.",
      hasCategories: true,
      categories: [
        {
          name: "Genesis Crystal",
          prices: [
            { qty: "60 Diamonds", price: "Rp 16.500" },
            { qty: "300 Diamonds", price: "Rp 75.000" },
            { qty: "600 Diamonds", price: "Rp 145.000" },
            { qty: "980 Diamonds", price: "Rp 225.000" },
            { qty: "1980 Diamonds", price: "Rp 425.000" },
            { qty: "3280 Diamonds", price: "Rp 705.000" },
          ],
        },
        {
          name: "Chronal Nexus",
          prices: [
            { qty: "60 Crystal", price: "Rp 16.500" },
            { qty: "300 Crystal", price: "Rp 75.500" },
            { qty: "980 Crystal", price: "Rp 252.500" },
            { qty: "1980 Crystal", price: "Rp 495.000" },
            { qty: "3280 Crystal", price: "Rp 805.000" },
            { qty: "BWM", price: "Rp 85.000" },
          ],
        },
      ],
    },
    {
      name: "Free Fire",
      id: "ff",
      img: "/ffHD.JPEG",
      desc: "Diamonds Fast Process & Membership (Weekly/Monthly).",
      hasCategories: true,
      categories: [
        {
          name: "Diamonds FF",
          prices: [
            { qty: "120 Diamonds", price: "Rp 16.500" },
            { qty: "140 Diamonds", price: "Rp 18.700" },
            { qty: "180 Diamonds", price: "Rp 25.500" },
            { qty: "200 Diamonds", price: "Rp 27.800" },
            { qty: "210 Diamonds", price: "Rp 28.500" },
            { qty: "250 Diamonds", price: "Rp 34.700" },
            { qty: "400 Diamonds", price: "Rp 54.500" },
            { qty: "475 Diamonds", price: "Rp 63.500" },
            { qty: "500 Diamonds", price: "Rp 67.000" },
            { qty: "635 Diamonds", price: "Rp 85.000" },
            { qty: "720 Diamonds", price: "Rp 90.700" },
            { qty: "860 Diamonds", price: "Rp 113.100" },
            { qty: "925 Diamonds", price: "Rp 122.500" },
            { qty: "1050 Diamonds", price: "Rp 138.700" },
            { qty: "1200 Diamonds", price: "Rp 158.900" },
            { qty: "1440 Diamonds", price: "Rp 188.000" },
            { qty: "1510 Diamonds", price: "Rp 196.800" },
            { qty: "2180 Diamonds", price: "Rp 274.500" },
          ],
        },
        {
          name: "Membership FF",
          prices: [
            { qty: "BP Card", price: "Rp 40.000" },
            { qty: "Weekly (MM)", price: "Rp 28.500" },
            { qty: "Monthly (MB)", price: "Rp 85.000" },
          ],
        },
      ],
    },
    {
      name: "Roblox",
      id: "roblox",
      img: "/RobloxcardHD.jpeg",
      desc: "Robux Instant via Login or Gamepass Method.",
      hasCategories: true,
      categories: [
        {
          name: "Robux via Login",
          prices: [
            { qty: "80 Robux", price: "Rp 15.500" },
            { qty: "160 Robux", price: "Rp 31.500" },
            { qty: "240 Robux", price: "Rp 46.500" },
            { qty: "320 Robux", price: "Rp 62.000" },
            { qty: "500 Robux", price: "Rp 72.500" },
            { qty: "1000 Robux", price: "Rp 145.000" },
            { qty: "2000 Robux", price: "Rp 285.000" },
            { qty: "5000 Robux", price: "Rp 695.000" },
          ],
        },
        {
          name: "Robux via Gamepass",
          prices: [
            { qty: "100 Robux", price: "Rp 12.500" },
            { qty: "200 Robux", price: "Rp 25.000" },
            { qty: "300 Robux", price: "Rp 37.500" },
            { qty: "400 Robux", price: "Rp 50.000" },
            { qty: "500 Robux", price: "Rp 62.500" },
            { qty: "600 Robux", price: "Rp 75.000" },
            { qty: "700 Robux", price: "Rp 87.500" },
            { qty: "800 Robux", price: "Rp 100.000" },
            { qty: "900 Robux", price: "Rp 112.500" },
            { qty: "1000 Robux", price: "Rp 125.000" },
          ],
        },
      ],
    },
    {
      name: "PUBG Mobile",
      id: "pubg",
      img: "/pubg.jpeg",
      desc: "Unknown Cash (UC) Global Fast Process.",
      prices: [
        { qty: "325 UC", price: "Rp 75.000" },
        { qty: "660 UC", price: "Rp 150.000" },
        { qty: "1800 UC", price: "Rp 372.500" },
        { qty: "3850 UC", price: "Rp 755.000" },
        { qty: "8100 UC", price: "Rp 1.510.000" },
        { qty: "16200 UC", price: "Rp 3.017.500" },
      ],
    },
    {
      name: "MCGG",
      id: "mcgg",
      img: "/mcggHD.JPEG",
      desc: "Top Up Game, Voucher MagicChest GoGo.",
      prices: [
        { qty: "50+50 Diamonds", price: "Rp 14.000" },
        { qty: "59 Diamonds", price: "Rp 14.500" },
        { qty: "85 Diamonds", price: "Rp 21.000" },
        { qty: "Weekly Pass", price: "Rp 27.500" },
        { qty: "150+150 Diamonds", price: "Rp 40.500" },
        { qty: "170 Diamonds", price: "Rp 41.200" },
        { qty: "240 Diamonds", price: "Rp 57.600" },
        { qty: "250+250 Diamonds", price: "Rp 68.500" },
        { qty: "296 Diamonds", price: "Rp 70.500" },
        { qty: "408 Diamonds", price: "Rp 95.700" },
        { qty: "500+500 Diamonds", price: "Rp 136.200" },
        { qty: "568 Diamonds", price: "Rp 129.800" },
        { qty: "875 Diamonds", price: "Rp 202.800" },
        { qty: "2010 Diamonds", price: "Rp 451.500" },
      ],
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

  const handleOrder = () => {
    const waNumber = "6285126312694";
    const categoryText = selectedCategory ? ` [${selectedCategory}]` : "";
    const text =
      `FORM PEMESANAN NAYRASTORE\n\n` +
      `Game: ${selectedGame?.name}${categoryText}\n` +
      `Item: ${orderData.item}\n` +
      `Harga: ${orderData.amount}\n` +
      `ID & Server/Nickname Game: ${orderData.idPlayer}\n` +
      `No. Telp: ${orderData.phone}\n\n` +
      `_Mohon segera diproses ya Admin, terima kasih!_ `;

    window.open(
      `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setIsModalOpen(false);
  };

  const currentPrices = selectedGame?.hasCategories
    ? selectedGame.categories.find((c: any) => c.name === selectedCategory)
        ?.prices || []
    : selectedGame?.prices || [];

  return (
    <div className="min-h-screen bg-[#0B0E14] overflow-x-hidden relative">
      <div className="stars-container"></div>

      <div className="w-full bg-white/5 border-b border-white/5 py-3 overflow-hidden z-20 relative">
        <div className="animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex shrink-0">
              <span className="text-white font-bold uppercase text-[10px] md:text-[11px] tracking-[0.3em] mx-10">
                🔥 DISCOUNT SETIAP MINGGU !
              </span>
              <span className="text-blue-400 font-bold uppercase text-[10px] md:text-[11px] tracking-[0.3em] mx-10">
                💎 GIVEAWAY SETIAP BULAN
              </span>
              <span className="text-pink-500 font-bold uppercase text-[10px] md:text-[11px] tracking-[0.3em] mx-10">
                🚀 PROSES INSTAN MANUAL
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-4 md:px-10 relative z-10">
        <div className="mb-20 text-center reveal">
          <p className="text-blue-400 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-4 opacity-70">
            Official Services
          </p>
          <h1 className="text-3xl md:text-6xl font-[1000] text-white tracking-tighter uppercase italic leading-none drop-shadow-[0_0_15px_rgba(77,124,254,0.5)]">
            MENU{" "}
            <span className="bg-gradient-to-r from-[#4D7CFE] via-[#8E94F2] to-[#f472b6] bg-clip-text text-transparent">
              LAYANAN
            </span>
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 mt-6 mx-auto rounded-full shadow-[0_0_15px_#8E94F2]"></div>
        </div>

        <div className="flex flex-col">
          {games.map((game, idx) => (
            <div key={game.id}>
              <div
                className={`reveal flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16 py-12 md:py-16 group`}
              >
                <div
                  onClick={() => {
                    setSelectedGame(game);
                    setSelectedCategory(
                      game.hasCategories ? game.categories[0].name : "",
                    );
                    setIsModalOpen(true);
                    setShowPaymentInfo(false);
                  }}
                  className={`relative aspect-[105/148] w-48 md:w-56 rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)] transform transition-all duration-700 cursor-pointer group-hover:scale-105 group-hover:border-blue-500/40`}
                >
                  <Image
                    src={game.img}
                    alt={game.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-sm">
                    <span className="text-white font-black uppercase tracking-widest text-[10px] border border-white px-4 py-2 rounded-sm">
                      Beli Sekarang
                    </span>
                  </div>
                </div>

                <div
                  className={`flex-1 text-center ${idx % 2 === 0 ? "md:text-left" : "md:text-right"} space-y-4`}
                >
                  <h2
                    className={`text-3xl md:text-4xl font-black uppercase italic tracking-tighter transition-colors text-white group-hover:text-blue-400`}
                  >
                    {game.name}
                  </h2>
                  <p className="text-gray-400 text-sm md:text-lg font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                    Sedia: <span className="text-white/90">{game.desc}</span>
                  </p>
                  <button
                    onClick={() => {
                      setSelectedGame(game);
                      setSelectedCategory(
                        game.hasCategories ? game.categories[0].name : "",
                      );
                      setIsModalOpen(true);
                      setShowPaymentInfo(false);
                    }}
                    className="mt-6 px-10 py-4 bg-white/5 border border-white/10 rounded-full text-white font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all shadow-xl"
                  >
                    Lihat Harga
                  </button>
                </div>
              </div>

              {idx !== games.length - 1 && (
                <div className="w-full relative py-8 opacity-80">
                  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[15px] bg-blue-500/20 blur-md"></div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#fff] opacity-50"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-6">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-[#0F1219] border border-white/10 p-6 md:p-10 rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(0,0,0,1)] custom-scrollbar">
            {selectedGame?.hasCategories && (
              <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-6">
                {selectedGame.categories.map((cat: any) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat.name ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]" : "bg-white/5 text-white/40 hover:bg-white/10"}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                  Price List {selectedCategory || selectedGame?.name}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentPrices.map((p: any, i: number) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-white/[0.03] p-4 rounded-2xl border border-white/5"
                    >
                      <span className="text-white/80 text-[10px] font-bold">
                        {p.qty}
                      </span>
                      <span className="text-blue-400 text-[10px] font-black italic">
                        {p.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0 lg:pl-10">
                <h3 className="text-2xl font-black text-white mb-8 uppercase italic tracking-tight">
                  Form Order
                </h3>
                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Pilih Item"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-white outline-none focus:border-blue-500"
                    onChange={(e) =>
                      setOrderData({ ...orderData, item: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Input Harga"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-white outline-none focus:border-blue-500"
                    onChange={(e) =>
                      setOrderData({ ...orderData, amount: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="User ID & Server/Nickname Game"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-white outline-none focus:border-blue-500"
                    onChange={(e) =>
                      setOrderData({ ...orderData, idPlayer: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Nomor Telpon"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-white outline-none focus:border-blue-500"
                    onChange={(e) =>
                      setOrderData({ ...orderData, phone: e.target.value })
                    }
                  />

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setShowPaymentInfo(!showPaymentInfo)}
                      className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-gray-200 transition-all shadow-xl"
                    >
                      {showPaymentInfo ? "Tutup Info Bayar" : "Bayar Sekarang"}
                    </button>

                    {showPaymentInfo && (
                      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-[11px] leading-relaxed text-gray-300 font-medium">
                        <p className="mb-2 text-center font-black">
                          ALL PAYMENT NAYRASTORE
                        </p>

                        <div className="flex flex-col items-center mb-6 bg-white p-4 rounded-xl">
                          <div className="relative w-48 h-48 mb-2">
                            <Image
                              src="/qris.jpeg"
                              alt="QRIS NayraStore"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-black font-black text-[10px] uppercase tracking-widest">
                            Scan QRIS All Payment
                          </p>
                        </div>

                        <div className="space-y-3">
                          <p className="text-white font-bold italic border-l-2 border-blue-500 pl-2">
                            BCA : Rifka Shafira Meilia
                          </p>
                          <p className="ml-4 mb-2">⤷ 7350298091</p>

                          <p className="text-white font-bold italic border-l-2 border-blue-500 pl-2">
                            DANA : Rifka Shafira Meilia
                          </p>
                          <p className="ml-4 mb-2">⤷ 085211625814</p>

                          <p className="text-white font-bold italic border-l-2 border-purple-500 pl-2">
                            GOPAY : Moh Nur Firdaus
                          </p>
                          <p className="ml-4 mb-2">⤷ 085211625814</p>

                          <p className="text-white font-bold italic border-l-2 border-purple-500 pl-2">
                            SHOPEEPAY : Moh Nur Firdaus
                          </p>
                          <p className="ml-4 mb-4">⤷ 081313339627</p>
                        </div>

                        <div className="border-t border-white/10 pt-4 mt-4 text-blue-400">
                          <p className="mb-2 font-black italic text-white">
                            NOTES :
                          </p>
                          <ul className="space-y-1 opacity-80">
                            <li>- SCAN QR VIA E-WALLET NO FEE.</li>
                            <li>- SCAN QR VIA BANK FEE +Rp.500</li>
                            <li>- TF E-WALLET FEE +Rp.100</li>
                            <li>- TOP UP VIA E-WALLET/BANK FEE +Rp.1000</li>
                          </ul>
                        </div>

                        <p className="mt-4 text-center italic text-white/60">
                          DON'T FORGET SEND A PROOF OF TRANSACTION TO ADMIN
                          WITHOUT EDITED. THANK YOU.
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="flex-1 bg-white/5 border border-white/10 text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white/10 transition-all"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleOrder}
                        className="flex-[2] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:brightness-125 transition-all shadow-xl"
                      >
                        Kirim via WA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
          animation: marquee 25s linear infinite;
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
