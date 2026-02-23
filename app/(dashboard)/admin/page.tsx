'use client';
import { useEffect, useState } from 'react';
import { Users, Settings, Activity, ShieldAlert } from 'lucide-react';

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('user_role');
    if (role === 'admin') {
      setIsAdmin(true);
    } else {
      window.location.href = '/';
    }
  }, []);

  if (!isAdmin) return null;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-emerald-500 flex items-center gap-3">
          <ShieldAlert className="w-8 h-8" />
          Admin Panel
        </h1>
        <p className="text-zinc-400 mt-1">Kelola pengguna, layanan, dan sistem secara keseluruhan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-center gap-4">
          <div className="p-4 bg-blue-500/10 rounded-xl text-blue-500">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <p className="text-zinc-400 font-medium">Total Pengguna</p>
            <h3 className="text-2xl font-bold text-zinc-100">1,248</h3>
          </div>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-center gap-4">
          <div className="p-4 bg-emerald-500/10 rounded-xl text-emerald-500">
            <Activity className="w-8 h-8" />
          </div>
          <div>
            <p className="text-zinc-400 font-medium">Transaksi Hari Ini</p>
            <h3 className="text-2xl font-bold text-zinc-100">156</h3>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-center gap-4">
          <div className="p-4 bg-purple-500/10 rounded-xl text-purple-500">
            <Settings className="w-8 h-8" />
          </div>
          <div>
            <p className="text-zinc-400 font-medium">Layanan Aktif</p>
            <h3 className="text-2xl font-bold text-zinc-100">84</h3>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">Manajemen Pengguna Terakhir</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 text-sm">
                <th className="pb-3 font-medium">Nama</th>
                <th className="pb-3 font-medium">Email</th>
                <th className="pb-3 font-medium">Role</th>
                <th className="pb-3 font-medium">Saldo</th>
                <th className="pb-3 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-zinc-800/50">
                <td className="py-4 font-medium text-zinc-100">Admin PHOENIX</td>
                <td className="py-4 text-zinc-400">admin@ell-panel.com</td>
                <td className="py-4"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded text-xs">Admin</span></td>
                <td className="py-4 font-mono">Rp 99.999.999</td>
                <td className="py-4"><button className="text-blue-500 hover:underline">Edit</button></td>
              </tr>
              <tr className="border-b border-zinc-800/50">
                <td className="py-4 font-medium text-zinc-100">Test User</td>
                <td className="py-4 text-zinc-400">user@ell-panel.com</td>
                <td className="py-4"><span className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">User</span></td>
                <td className="py-4 font-mono">Rp 1.250.000</td>
                <td className="py-4"><button className="text-blue-500 hover:underline">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
