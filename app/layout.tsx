import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flux | API Oracle',
  description: 'Liquifying API complexity - crafted with ♡모 by Anto Shammah',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
