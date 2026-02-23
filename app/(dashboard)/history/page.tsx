import { Search, Filter } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Riwayat Pesanan</h1>
          <p className="text-zinc-400 mt-1">Pantau status pesanan Anda di sini.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800 w-full md:w-64">
            <Search className="w-5 h-5 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Cari ID/Target..." 
              className="bg-transparent border-none outline-none text-sm w-full text-zinc-100 placeholder:text-zinc-500"
            />
          </div>
          <button className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-100 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-950 border-b border-zinc-800 text-zinc-400 text-sm">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Tanggal</th>
                <th className="p-4 font-medium">Layanan</th>
                <th className="p-4 font-medium">Target</th>
                <th className="p-4 font-medium">Jumlah</th>
                <th className="p-4 font-medium">Harga</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-zinc-800/50">
              {[
                { id: 89239, date: '22 Feb 2026 14:30', name: 'Instagram Followers [Max 10K]', target: '@johndoe', qty: '1.000', price: '15.000', status: 'Pending' },
                { id: 89238, date: '22 Feb 2026 12:15', name: 'TikTok Views [Max 1M]', target: 'https://tiktok.com/...', qty: '5.000', price: '500', status: 'Processing' },
                { id: 89237, date: '21 Feb 2026 09:00', name: 'Instagram Likes [Max 100K]', target: 'https://instagram.com/p/...', qty: '500', price: '1.250', status: 'Success' },
                { id: 89236, date: '20 Feb 2026 18:45', name: 'Pulsa Telkomsel 50.000', target: '081234567890', qty: '1', price: '51.000', status: 'Success' },
                { id: 89235, date: '19 Feb 2026 20:10', name: 'TikTok Followers [Max 10K]', target: '@janedoe', qty: '1.000', price: '25.000', status: 'Error' },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="p-4 font-mono text-zinc-500">#{order.id}</td>
                  <td className="p-4 text-zinc-400 whitespace-nowrap">{order.date}</td>
                  <td className="p-4 font-medium text-zinc-100 max-w-xs truncate">{order.name}</td>
                  <td className="p-4 text-zinc-400 max-w-[150px] truncate">{order.target}</td>
                  <td className="p-4 text-zinc-100">{order.qty}</td>
                  <td className="p-4 font-medium">Rp {order.price}</td>
                  <td className="p-4">
                    <StatusBadge status={order.status} />
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

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'Pending': 'bg-yellow-500/10 text-yellow-500',
    'Processing': 'bg-blue-500/10 text-blue-500',
    'Success': 'bg-emerald-500/10 text-emerald-500',
    'Error': 'bg-red-500/10 text-red-500',
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}
