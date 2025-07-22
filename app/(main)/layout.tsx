// app/(main)/laout.tsx

import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import Chatbot from '@/app/components/Chatbot';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Chatbot />
      <Footer />
    </div>
  );
}
