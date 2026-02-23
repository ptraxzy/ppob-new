import { Wallet, ShoppingCart, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-zinc-400 mt-1">Selamat datang kembali, Tuan. Berikut adalah ringkasan akun Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Saldo" 
          value="Rp 1.250.000" 
          icon={Wallet} 
          trend="+Rp 500.000" 
          trendUp={true} 
        />
        <StatCard 
          title="Total Pesanan" 
          value="1,248" 
          icon={ShoppingCart} 
          trend="+12 hari ini" 
          trendUp={true} 
        />
        <StatCard 
          title="Pesanan Selesai" 
          value="1,200" 
          icon={CheckCircle} 
          trend="96% success rate" 
          trendUp={true} 
          color="text-emerald-500"
        />
        <StatCard 
          title="Pesanan Gagal" 
          value="48" 
          icon={XCircle} 
          trend="Refund otomatis" 
          trendUp={false} 
          color="text-red-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Pesanan Terakhir</h2>
              <button className="text-sm text-emerald-500 hover:text-emerald-400 font-medium">Lihat Semua</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400 text-sm">
                    <th className="pb-3 font-medium">ID</th>
                    <th className="pb-3 font-medium">Layanan</th>
                    <th className="pb-3 font-medium">Target</th>
                    <th className="pb-3 font-medium">Harga</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="border-b border-zinc-800/50 last:border-0">
                      <td className="py-4 font-mono text-zinc-500">#{89234 + i}</td>
                      <td className="py-4">Instagram Followers [Max 10K]</td>
                      <td className="py-4">@username{i}</td>
                      <td className="py-4">Rp 15.000</td>
                      <td className="py-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500">
                          Success
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">Informasi & Update</h2>
            <div className="space-y-6">
              {[
                { title: 'Layanan Baru Ditambahkan', date: 'Hari ini, 10:00', desc: 'Layanan TikTok Views Server 2 telah ditambahkan dengan harga lebih murah.' },
                { title: 'Maintenance Server', date: 'Kemarin, 15:30', desc: 'Server Instagram Followers sedang dalam perbaikan, estimasi 2 jam.' },
                { title: 'Promo Deposit', date: '20 Feb 2026', desc: 'Dapatkan bonus saldo 5% untuk deposit di atas Rp 500.000 via BCA.' },
              ].map((news, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-zinc-800 last:border-transparent pb-6 last:pb-0">
                  <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <h3 className="font-bold text-zinc-100">{news.title}</h3>
                  <p className="text-xs text-zinc-500 mt-1 mb-2">{news.date}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{news.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, trend, trendUp, color = "text-emerald-500" }: any) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between h-40 relative overflow-hidden group">
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-zinc-800/50 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
      <div className="flex justify-between items-start relative z-10">
        <p className="text-zinc-400 font-medium">{title}</p>
        <div className="p-2 bg-zinc-800 rounded-xl">
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-zinc-50 tracking-tight">{value}</h3>
        <div className="flex items-center gap-2 mt-2">
          <TrendingUp className={`w-4 h-4 ${trendUp ? 'text-emerald-500' : 'text-red-500 rotate-180'}`} />
          <span className={`text-sm font-medium ${trendUp ? 'text-emerald-500' : 'text-red-500'}`}>{trend}</span>
        </div>
      </div>
    </div>
  );
}
