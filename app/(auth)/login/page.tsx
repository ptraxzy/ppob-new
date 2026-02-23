'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (email === 'admin@ell-panel.com' && password === 'admin123') {
      localStorage.setItem('user_role', 'admin');
      localStorage.setItem('user_name', 'Admin PHOENIX');
      window.location.href = '/';
    } else if (email === 'user@ell-panel.com' && password === 'user123') {
      localStorage.setItem('user_role', 'user');
      localStorage.setItem('user_name', 'Test User');
      window.location.href = '/';
    } else {
      setError('Email atau kata sandi salah!');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-zinc-950">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-emerald-500 tracking-tighter">ELL-PANEL</h1>
          <p className="text-zinc-400">Masuk ke akun Anda untuk melanjutkan</p>
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
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
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-zinc-300">Kata Sandi</label>
              <Link href="#" className="text-xs text-emerald-500 hover:text-emerald-400 font-medium">Lupa sandi?</Link>
            </div>
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
            Masuk
          </button>
        </form>

        <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-zinc-400 space-y-2">
          <p className="font-bold text-zinc-300 mb-1">Akun Tes:</p>
          <div className="flex justify-between">
            <span>Admin:</span>
            <span className="text-emerald-500 font-mono">admin@ell-panel.com / admin123</span>
          </div>
          <div className="flex justify-between">
            <span>User:</span>
            <span className="text-emerald-500 font-mono">user@ell-panel.com / user123</span>
          </div>
        </div>

        <p className="text-center text-sm text-zinc-400">
          Belum punya akun?{' '}
          <Link href="/register" className="text-emerald-500 hover:text-emerald-400 font-medium">
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
