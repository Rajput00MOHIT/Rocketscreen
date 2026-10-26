import type { Metadata } from 'next';
import '@/styles/globals/globals.css';
import { siteConfig } from '@/lib/config';
import { Navbar } from '@/components/navigation';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: 'RocketScreens Team' }],
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col font-sans antialiased selection:bg-pink-100 selection:text-pink-900 bg-[#FAFAFB]"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="pt-[72px] flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
