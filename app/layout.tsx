import './globals.css';
import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Client Portal - Built with ChatAndBuild',
  description: 'Vaporwave-themed client portal and community platform for website management retainer services',
  keywords: 'no-code, app builder, conversation-driven development, client portal, community platform, vaporwave, retainer management',
  openGraph: {
    title: 'Client Portal - Built with ChatAndBuild',
    description: 'Vaporwave-themed client portal and community platform for website management retainer services',
    images: ['https://cdn.chatandbuild.com/images/preview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Portal - Built with ChatAndBuild',
    description: 'Vaporwave-themed client portal and community platform for website management retainer services',
    images: ['https://cdn.chatandbuild.com/images/preview.png'],
    site: '@chatandbuild',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
