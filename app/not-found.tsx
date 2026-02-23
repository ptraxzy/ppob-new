import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-zinc-950 text-zinc-50">
      <h1 className="text-6xl font-bold text-emerald-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-zinc-400 mb-8 text-center max-w-md">
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <Link 
        href="/" 
        className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold py-3 px-6 rounded-xl transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
