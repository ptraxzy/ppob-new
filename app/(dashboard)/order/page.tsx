'use client';
import { useState } from 'react';
import { ShoppingCart, Info } from 'lucide-react';

export default function OrderPage() {
  const [category, setCategory] = useState('');
  const [service, setService] = useState('');
  const [target, setTarget] = useState('');
  const [quantity, setQuantity] = useState('');

  // Mock calculation
  const pricePer1000 = 15000;
  const totalPrice = quantity ? (parseInt(quantity) / 1000) * pricePer1000 : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pesanan Baru</h1>
        <p className="text-zinc-400 mt-1">Buat pesanan baru untuk layanan sosial media atau PPOB.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Kategori</label>
              <select 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Pilih Kategori...</option>
                <option value="ig">Instagram Followers</option>
                <option value="ig_likes">Instagram Likes</option>
                <option value="tiktok">TikTok Views</option>
                <option value="pulsa">Pulsa Reguler</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Layanan</label>
              <select 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                value={service}
                onChange={(e) => setService(e.target.value)}
                disabled={!category}
              >
                <option value="">Pilih Layanan...</option>
                <option value="1">IG Followers [Max 10K] [Refill 30D] - Rp 15.000/K</option>
                <option value="2">IG Followers [Max 50K] [No Refill] - Rp 8.000/K</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Target / Data</label>
              <input 
                type="text" 
                placeholder="Username / Link / Nomor HP"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Jumlah</label>
                <input 
                  type="number" 
                  placeholder="Min: 100"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Total Harga</label>
                <div className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-emerald-500 font-bold">
                  Rp {totalPrice.toLocaleString('id-ID')}
                </div>
              </div>
            </div>

            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Buat Pesanan
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4 text-emerald-500">
              <Info className="w-6 h-6" />
              <h2 className="text-lg font-bold">Informasi Layanan</h2>
            </div>
            <div className="space-y-4 text-sm text-zinc-300">
              <p><strong className="text-zinc-100">Min Pesan:</strong> 100</p>
              <p><strong className="text-zinc-100">Max Pesan:</strong> 10.000</p>
              <p><strong className="text-zinc-100">Harga/1000:</strong> Rp 15.000</p>
              <div className="pt-4 border-t border-emerald-500/20">
                <p className="font-medium text-zinc-100 mb-2">Deskripsi:</p>
                <ul className="list-disc pl-4 space-y-1 text-zinc-400">
                  <li>Masukkan username tanpa @</li>
                  <li>Akun tidak boleh di-private</li>
                  <li>Garansi refill 30 hari jika drop</li>
                  <li>Proses instan 1-5 menit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
