"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductPage() {
  const waNumber = "6285211625814";
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("default");

  // Data Produk - Pastikan gambar ada di folder /public/
  const allProducts = [
    {
      id: 1,
      name: "86 Diamonds ML",
      category: "Mobile Legends",
      price: 20000,
      isFavorite: true,
      img: "/ml-diamond.jpg",
    },
    {
      id: 2,
      name: "172 Diamonds ML",
      category: "Mobile Legends",
      price: 40000,
      isFavorite: false,
      img: "/ml-diamond.jpg",
    },
    {
      id: 3,
      name: "257 Diamonds ML",
      category: "Mobile Legends",
      price: 60000,
      isFavorite: true,
      img: "/ml-diamond.jpg",
    },
    {
      id: 4,
      name: "400 Robux",
      category: "Roblox",
      price: 75000,
      isFavorite: true,
      img: "/robux.jpg",
    },
    {
      id: 5,
      name: "800 Robux",
      category: "Roblox",
      price: 145000,
      isFavorite: false,
      img: "/robux.jpg",
    },
    {
      id: 6,
      name: "2000 Robux",
      category: "Roblox",
      price: 350000,
      isFavorite: false,
      img: "/robux.jpg",
    },
  ];

  // Logika Search & Filter
  const filteredProducts = allProducts
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (filter === "lowest") return a.price - b.price;
      if (filter === "highest") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-slate-50 py-8 md:py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-[1000] text-slate-900 tracking-tighter uppercase italic leading-none">
            Daftar <span className="text-blue-600">Produk</span>
          </h1>
          <div className="h-1.5 md:h-2 w-20 md:w-32 bg-gradient-to-r from-blue-600 to-purple-600 mt-4 rounded-full mx-auto md:mx-0"></div>
          <p className="text-slate-500 mt-4 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs opacity-70">
            RIFKA PROJECT • PREMIUM GAMING STORE
          </p>
        </div>

        {/* Responsive Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-12 md:mb-20">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Cari diamond atau robux..."
              className="w-full p-4 md:p-6 rounded-2xl md:rounded-[2.5rem] border-4 border-white shadow-xl shadow-blue-500/5 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-slate-700 text-sm md:text-base pl-6 md:pl-10"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="p-4 md:p-6 px-6 md:px-10 rounded-2xl md:rounded-[2.5rem] border-4 border-white bg-white shadow-xl shadow-blue-500/5 outline-none cursor-pointer font-black text-slate-700 uppercase italic tracking-tighter text-sm md:text-base"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="default">URUTKAN: DEFAULT</option>
            <option value="lowest">HARGA TERENDAH</option>
            <option value="highest">HARGA TERMAHAL</option>
          </select>
        </div>

        {/* Section: Favorit Dibeli */}
        {searchQuery === "" && (
          <div className="mb-16 md:mb-24">
            <h2 className="text-2xl md:text-4xl font-[1000] text-slate-800 uppercase italic mb-8 tracking-tighter flex items-center gap-3">
              <span className="text-blue-600">★</span> Favorit{" "}
              <span className="text-purple-600">Dibeli</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
              {allProducts
                .filter((p) => p.isFavorite)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    waNumber={waNumber}
                  />
                ))}
            </div>
          </div>
        )}

        {/* Section: Semua Produk */}
        <div>
          <h2 className="text-2xl md:text-4xl font-[1000] text-slate-800 uppercase italic mb-8 tracking-tighter">
            Semua <span className="text-blue-600">Koleksi</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                waNumber={waNumber}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl md:text-4xl font-black text-slate-300 uppercase italic">
                Produk Kosong
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Komponen Card Responsive
function ProductCard({
  product,
  waNumber,
}: {
  product: any;
  waNumber: string;
}) {
  const textMessage = `Halo Rifka Project! 🚀
Saya ingin memesan produk berikut:

📌 Produk: ${product.name}
💰 Harga: Rp ${product.price.toLocaleString("id-ID")}

Formulir Pembelian:
Nama: 
Metode Pembayaran: 
No Tlp: 

Mohon segera diproses ya!`;

  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(textMessage)}`;

  return (
    <div className="group flex flex-col items-center">
      {/* Container Gambar dengan Shadow & Border Tebal */}
      <div className="relative aspect-square w-full bg-white rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-[6px] md:border-[10px] border-white group-hover:border-blue-600 group-hover:-translate-y-3 transition-all duration-500 ease-out">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.isFavorite && (
          <div className="absolute top-3 md:top-6 right-3 md:right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[8px] md:text-[10px] font-black px-3 md:px-5 py-1 md:py-2 rounded-full shadow-lg uppercase italic tracking-wider">
            Best Seller
          </div>
        )}
      </div>

      {/* Deskripsi Produk */}
      <div className="mt-4 md:mt-8 w-full text-center px-1">
        <p className="text-[8px] md:text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">
          {product.category}
        </p>
        <h3 className="font-black text-slate-900 text-sm md:text-xl leading-tight mb-1 md:mb-2 uppercase italic tracking-tighter truncate">
          {product.name}
        </h3>
        <p className="font-[1000] text-lg md:text-3xl text-slate-900 italic tracking-tighter mb-4 md:mb-6">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
      </div>

      {/* Button Beli */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-slate-950 text-white text-center py-3 md:py-5 rounded-2xl md:rounded-[1.5rem] font-black text-[10px] md:text-xs hover:bg-blue-600 transition-all uppercase tracking-[0.15em] shadow-xl active:scale-95"
      >
        Beli Sekarang
      </a>
    </div>
  );
}
