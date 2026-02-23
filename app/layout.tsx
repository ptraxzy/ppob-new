import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ELL-PANEL | PPOB & SMM',
  description: 'Platform Layanan PPOB dan Sosial Media Terbaik',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className="dark">
      <body className="bg-zinc-950 text-zinc-50 antialiased min-h-screen flex font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
