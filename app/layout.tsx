import '@/app/ui/global.css';
import { inter as primary_font } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${primary_font.className} antialiased`}>{children}</body>
    </html>
  );
}
