import { Bell, Search, UserCircle } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="h-20 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
      <div className="flex items-center gap-4 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 w-96">
        <Search className="w-5 h-5 text-zinc-500" />
        <input 
          type="text" 
          placeholder="Cari layanan..." 
          className="bg-transparent border-none outline-none text-sm w-full text-zinc-100 placeholder:text-zinc-500"
        />
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-end">
          <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Saldo Anda</span>
          <span className="text-emerald-500 font-bold">Rp 1.250.000</span>
        </div>
        <button className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-zinc-950"></span>
        </button>
        <Link href="/profile" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors">
          <UserCircle className="w-8 h-8" />
        </Link>
      </div>
    </header>
  );
}
