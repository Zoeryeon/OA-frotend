// app /ui /fonts.ts
import { Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';

// 변수형 폰트는 weight지정없이 사용
export const notosanskr = Noto_Sans_KR({
  subsets: ['latin'],
  // 브라우저의 폰트 표현방식을 swap으로 하여 시스템폰트로 보여준후
  // 웹폰트 다운로드되면 웹폰트로 보여짐
  display: 'swap',
});

export const ordinaryArtist = localFont({
  src: [{ path: '../../public/fonts/OrdinaryArtist-ico.woff', weight: '400' }],
  display: 'swap',
});
