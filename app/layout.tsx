// app /laout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { notosanskr } from '@/app/components/fonts';
import TanStackProvider from '@/providers/TanStackProvider';
import ThemeProvider from '@/app/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'OALive',
    template: '%s | OALive',
  },
  description:
    '오아 BEST VOD · 슬라이드 버튼 · [53회 동아무용] 한국무용(창작) 일반부(남자) 본선 진출작 · [53회 동아무용] 한국무용(창작) 일반부(남자) 본선 진출작.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body className={notosanskr.className}>
          <TanStackProvider>{children}</TanStackProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
