import { Figtree } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BootstrapClient';
import SplashCursor from '@/components/SplashCursor';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Agencia Digital Colombia | GoHighLevel, WordPress y Marketing | Global Concept Agency',
  description: 'Especialistas en GoHighLevel CRM, desarrollo WordPress y marketing digital. Soluciones completas para empresas en Colombia y USA.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={figtree.variable}>
      <body>
        <BootstrapClient />
        <SplashCursor DENSITY_DISSIPATION={8} TRANSPARENT={false} RAINBOW_MODE={false} COLOR="#a7dd3c" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
