'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingCart, History, Wallet, List, LogOut, ShieldAlert } from 'lucide-react';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

const baseLinks = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Pesanan Baru', href: '/order', icon: ShoppingCart },
  { name: 'Riwayat Pesanan', href: '/history', icon: History },
  { name: 'Deposit', href: '/deposit', icon: Wallet },
  { name: 'Daftar Layanan', href: '/services', icon: List },
];

export function Sidebar() {
  const pathname = usePathname();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setRole(localStorage.getItem('user_role'));
  }, []);

  const links = [...baseLinks];
  if (role === 'admin') {
    links.push({ name: 'Admin Panel', href: '/admin', icon: ShieldAlert });
  }

  const handleLogout = () => {
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_name');
  };

  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-emerald-500 tracking-tighter">ELL-PANEL</h1>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors',
                isActive ? 'bg-emerald-500/10 text-emerald-500' : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{link.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-zinc-800">
        <Link href="/login" onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-zinc-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Keluar</span>
        </Link>
      </div>
    </div>
  );
}
