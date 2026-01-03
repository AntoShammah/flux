import './globals.css';

export const metadata = {
  title: 'Flux | API Oracle',
  description: 'crafted with ♡모 by Anto Shammah',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
