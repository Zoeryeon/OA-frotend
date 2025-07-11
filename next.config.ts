// next.config.ts
import type { NextConfig } from 'next';

// 이미지컴포넌트에 외부이미지 사용시 필요
// 외부 url을 사용한 데이터 이미지일 경우 악의적인 사용자로 부터 보호하기위해
// 특정 도메인의 이미지만 사용가능하도록 설정
const nextConfig: NextConfig = {
  images: {
    // 특정도메인만 허용 또는
    domains: ['example.com', 'cdn.example.org'],
    // 모든도메인 허용
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
