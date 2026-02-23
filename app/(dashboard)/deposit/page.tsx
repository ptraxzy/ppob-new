'use client';
import { useState } from 'react';
import { Wallet, CreditCard, Building2, QrCode, CheckCircle2, Copy } from 'lucide-react';

export default function DepositPage() {
  const [method, setMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState(1); // 1: Input, 2: Confirmation/Instructions

  const handleNext = () => {
    if (!method || !amount || parseInt(amount) < 10000) {
      alert('Pilih metode dan masukkan nominal minimal Rp 10.000');
      return;
    }
    setStep(2);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Disalin ke clipboard!');
  };

  const renderInstructions = () => {
    const totalAmount = parseInt(amount);
    const uniqueCode = Math.floor(Math.random() * 900) + 100; // Random 3 digit unique code
    const finalAmount = totalAmount + (method === 'bca' ? uniqueCode : 0);

    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center gap-3 text-emerald-500 mb-2">
          <CheckCircle2 className="w-8 h-8" />
          <h2 className="text-2xl font-bold text-zinc-100">Menunggu Pembayaran</h2>
        </div>
        <p className="text-zinc-400 text-sm">Selesaikan pembayaran Anda sebelum batas waktu berakhir.</p>

        <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl space-y-6">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
            <span className="text-zinc-400">Total Pembayaran</span>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-emerald-500">Rp {finalAmount.toLocaleString('id-ID')}</span>
              <button onClick={() => handleCopy(finalAmount.toString())} className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 text-zinc-400 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {method === 'bca' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Bank Tujuan</span>
                <span className="font-bold text-zinc-100">BCA</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Nomor Rekening</span>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-zinc-100 tracking-wider">8732 1928 33</span>
                  <button onClick={() => handleCopy('8732192833')} className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 text-zinc-400 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Atas Nama</span>
                <span className="font-bold text-zinc-100">PT. ELL PANEL DIGITAL</span>
              </div>
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl mt-4">
                <p className="text-sm text-yellow-500 font-medium">PENTING: Transfer tepat hingga 3 digit terakhir agar saldo masuk otomatis.</p>
              </div>
            </div>
          )}

          {method === 'ewallet' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">E-Wallet Tujuan</span>
                <span className="font-bold text-zinc-100">DANA / OVO / GoPay</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Nomor Tujuan</span>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-zinc-100 tracking-wider">0812 3456 7890</span>
                  <button onClick={() => handleCopy('081234567890')} className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 text-zinc-400 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Atas Nama</span>
                <span className="font-bold text-zinc-100">ELL PANEL</span>
              </div>
            </div>
          )}

          {method === 'va' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Metode</span>
                <span className="font-bold text-zinc-100">Virtual Account (Semua Bank)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Nomor VA</span>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-zinc-100 tracking-wider">8890 1234 5678 9012</span>
                  <button onClick={() => handleCopy('8890123456789012')} className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 text-zinc-400 transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {method === 'qris' && (
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center">
                {/* Placeholder for QRIS Image */}
                <QrCode className="w-32 h-32 text-zinc-900" />
              </div>
              <p className="text-sm text-zinc-400 text-center">Scan QR Code di atas menggunakan aplikasi E-Wallet atau M-Banking Anda.</p>
            </div>
          )}
        </div>

        <button 
          onClick={() => {
            setStep(1);
            setAmount('');
            setMethod('');
          }} 
          className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold py-4 rounded-xl transition-colors"
        >
          Kembali ke Dashboard
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Isi Saldo</h1>
        <p className="text-zinc-400 mt-1">Pilih metode pembayaran untuk mengisi saldo akun Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {step === 1 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">
              <div className="space-y-4">
                <label className="text-sm font-medium text-zinc-300">Pilih Metode Pembayaran</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <MethodCard 
                    id="qris" 
                    title="QRIS (Otomatis)" 
                    desc="Bonus 0%" 
                    icon={QrCode} 
                    selected={method === 'qris'} 
                    onClick={() => setMethod('qris')} 
                  />
                  <MethodCard 
                    id="bca" 
                    title="Transfer BCA" 
                    desc="Bonus 5%" 
                    icon={Building2} 
                    selected={method === 'bca'} 
                    onClick={() => setMethod('bca')} 
                  />
                  <MethodCard 
                    id="ewallet" 
                    title="E-Wallet (Dana/Ovo/GoPay)" 
                    desc="Bonus 0%" 
                    icon={Wallet} 
                    selected={method === 'ewallet'} 
                    onClick={() => setMethod('ewallet')} 
                  />
                  <MethodCard 
                    id="va" 
                    title="Virtual Account" 
                    desc="Otomatis Masuk" 
                    icon={CreditCard} 
                    selected={method === 'va'} 
                    onClick={() => setMethod('va')} 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Jumlah Deposit</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-medium">Rp</span>
                  <input 
                    type="number" 
                    placeholder="100000"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-12 pr-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex justify-between items-center">
                <span className="text-zinc-400 font-medium">Saldo Diterima:</span>
                <span className="text-xl font-bold text-emerald-500">
                  Rp {amount ? (parseInt(amount) * (method === 'bca' ? 1.05 : 1)).toLocaleString('id-ID') : '0'}
                </span>
              </div>

              <button 
                onClick={handleNext}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold py-4 rounded-xl transition-colors"
              >
                Lanjut Pembayaran
              </button>
            </div>
          ) : (
            renderInstructions()
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-4">Cara Deposit</h2>
            <ol className="list-decimal pl-4 space-y-3 text-sm text-zinc-400">
              <li>Pilih metode pembayaran yang tersedia.</li>
              <li>Masukkan jumlah deposit (Minimal Rp 10.000).</li>
              <li>Klik tombol "Lanjut Pembayaran".</li>
              <li>Selesaikan pembayaran sesuai instruksi yang diberikan.</li>
              <li>Saldo akan masuk secara otomatis dalam 1-5 menit setelah pembayaran berhasil.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function MethodCard({ id, title, desc, icon: Icon, selected, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className={`p-4 rounded-xl border cursor-pointer transition-all ${
        selected 
          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-500' 
          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800/50'
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5" />
        <h3 className={`font-bold ${selected ? 'text-emerald-500' : 'text-zinc-100'}`}>{title}</h3>
      </div>
      <p className="text-xs">{desc}</p>
    </div>
  );
}
