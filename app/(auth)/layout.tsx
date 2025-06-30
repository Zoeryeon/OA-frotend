// app /(auth) /layout.tsx
'use client';

import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
