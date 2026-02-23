import { Search } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Daftar Layanan</h1>
          <p className="text-zinc-400 mt-1">Lihat semua layanan dan harga yang tersedia.</p>
        </div>
        <div className="flex items-center gap-4 bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800 w-full md:w-80">
          <Search className="w-5 h-5 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Cari layanan..." 
            className="bg-transparent border-none outline-none text-sm w-full text-zinc-100 placeholder:text-zinc-500"
          />
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-950 border-b border-zinc-800 text-zinc-400 text-sm">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Layanan</th>
                <th className="p-4 font-medium">Min</th>
                <th className="p-4 font-medium">Max</th>
                <th className="p-4 font-medium">Harga/1K</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-zinc-800/50">
              {[
                { id: 101, name: 'Instagram Followers [Max 10K] [Refill 30D]', min: 100, max: '10.000', price: '15.000', status: 'Aktif' },
                { id: 102, name: 'Instagram Followers [Max 50K] [No Refill]', min: 100, max: '50.000', price: '8.000', status: 'Aktif' },
                { id: 103, name: 'Instagram Likes [Max 100K] [Fast]', min: 50, max: '100.000', price: '2.500', status: 'Aktif' },
                { id: 201, name: 'TikTok Views [Max 1M] [Instan]', min: 1000, max: '1.000.000', price: '100', status: 'Aktif' },
                { id: 202, name: 'TikTok Followers [Max 10K] [Refill 30D]', min: 100, max: '10.000', price: '25.000', status: 'Gangguan' },
              ].map((service) => (
                <tr key={service.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="p-4 font-mono text-zinc-500">{service.id}</td>
                  <td className="p-4 font-medium text-zinc-100">{service.name}</td>
                  <td className="p-4 text-zinc-400">{service.min}</td>
                  <td className="p-4 text-zinc-400">{service.max}</td>
                  <td className="p-4 text-emerald-500 font-medium">Rp {service.price}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      service.status === 'Aktif' 
                        ? 'bg-emerald-500/10 text-emerald-500' 
                        : 'bg-red-500/10 text-red-500'
                    }`}>
                      {service.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
