'use client';
import { useState } from 'react';
import { UserCircle, Mail, Lock, Save } from 'lucide-react';

export default function ProfilePage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('081234567890');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profil berhasil diperbarui!');
  };

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Kata sandi berhasil diubah!');
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profil Saya</h1>
        <p className="text-zinc-400 mt-1">Kelola informasi pribadi dan keamanan akun Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-zinc-500">
              <UserCircle className="w-16 h-16" />
            </div>
            <h2 className="text-xl font-bold text-zinc-100">{name}</h2>
            <p className="text-sm text-zinc-400">{email}</p>
            <div className="mt-6 w-full pt-6 border-t border-zinc-800 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Status Akun</span>
                <span className="text-emerald-500 font-medium">Terverifikasi</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Bergabung</span>
                <span className="text-zinc-300">Jan 2026</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <UserCircle className="w-5 h-5 text-emerald-500" />
              Informasi Pribadi
            </h2>
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Nama Lengkap</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Nomor HP</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Email</label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-12 pr-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>
              <div className="pt-4">
                <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-500" />
              Keamanan Akun
            </h2>
            <form onSubmit={handleSavePassword} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Kata Sandi Saat Ini</label>
                <input 
                  type="password" 
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Kata Sandi Baru</label>
                <input 
                  type="password" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div className="pt-4">
                <button type="submit" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2 border border-zinc-700">
                  <Lock className="w-4 h-4" />
                  Perbarui Sandi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
