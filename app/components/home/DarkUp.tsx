//app /components /home /DarkUp.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// 스크롤 맨 위로 이동
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function DarkUp({ isFixed }: { isFixed: boolean }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  function handleDarkMode() {
    document.body.classList.toggle('dark');
  }

  // 스크롤 위치에 따라 showScrollTop 상태 업데이트
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 10); // 10px 이상 스크롤됐을 때만 표시
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`flex right-0 z-9 mix-blend-exclusion ${
        isFixed
          ? 'absolute bottom-[190px] max-md:bottom-[260px] max-sm:bottom-[300px]'
          : 'fixed bottom-[10px]'
      }`}
    >
      <button
        type="button"
        className={`w-auto h-auto right-[70px] py-[10px] px-[10px] flex flex-col items-center text-[14px] text-[#fff] after:inline after:content-['다크모드'] dark:after:content-['라이트모드'] max-sm:hidden`}
        onClick={handleDarkMode}
      >
        <i className="relative mb-[5px] w-[20px] h-[20px] rounded-[50%] bg-[#fff] after:content-[''] after:block after:w-[50%] after:h-[50%] after:rounded-[50%] after:absolute after:right-0 after:top-0 after:transition-all after:duration-75 after:bg-[#000] dark:after:-right-[50%] dark:after:-top-[50%]"></i>
      </button>
      {showScrollTop && (
        <Link
          href="#"
          className={`w-auto h-auto py-[9px] px-[10px] flex flex-col items-center right-[5px] text-[#fff] before:content-[''] before:block before:absolute before:left-[15px] before:top-0 before:1px before:bg-[#fff] before:transition-all before:duration-75 max-sm:text-[12px]`}
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <i className="h-[20px] relative mb-[5px] w-[1px] transition-[height] duration-75 bg-[#fff] after: content-[''] after:block after:w-[15px] after:h-[15px] after:border after:border-[#fff] after:border-r-0 after:border-b-0 after:absolute after:left-[50%] after:top-[0.1875rem] after:-ml-[7.5px] after:rotate-45"></i>
          위로가기
        </Link>
      )}
    </div>
  );
}
