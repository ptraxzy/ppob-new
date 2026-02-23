'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate register
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-zinc-950">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-emerald-500 tracking-tighter">ELL-PANEL</h1>
          <p className="text-zinc-400">Buat akun baru untuk mulai bertransaksi</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Nama Lengkap</label>
            <input 
              type="text" 
              required
              placeholder="John Doe"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Email</label>
            <input 
              type="email" 
              required
              placeholder="nama@email.com"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Kata Sandi</label>
            <input 
              type="password" 
              required
              placeholder="••••••••"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold py-3.5 rounded-xl transition-colors">
            Daftar
          </button>
        </form>

        <p className="text-center text-sm text-zinc-400">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-emerald-500 hover:text-emerald-400 font-medium">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
