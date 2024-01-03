import '@/app/ui/global.css';
import { glitch as main_font } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${main_font.className} antialiased`}>{children}</body>
    </html>
  );
}
