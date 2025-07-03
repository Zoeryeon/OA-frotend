// app /(main) /search /page.tsx
'use client';

import { ordinaryArtist } from '@/app/components/fonts';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Search() {
  const searchParams = useSearchParams();
  // form에 입력하는 값
  const [inputKeyword, setInputKeyword] = useState('');
  // 제목에 들어가는 값
  const [searchedKeyword, setSearchedKeyword] = useState('');

  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputKeyword.trim()) {
        const encoded = encodeURIComponent(inputKeyword.trim());
        router.push(`/search?keyword=${encoded}`);
        setSearchedKeyword(inputKeyword); // 결과 제목에 반영
        setInputKeyword(''); // 입력창 초기화
      }
    }
  };

  useEffect(() => {
    const newKeyword = searchParams.get('keyword') || '';
    setSearchedKeyword(newKeyword);
    setInputKeyword(''); // 입력창은 항상 비우기
  }, [searchParams]);

  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <div className="max-w-[1160px] mx-auto ">
        <div className="px-[20px] pt-[80px]">
          <div className="pt-[64px] px-[64px]">
            <h3 className="text-[28px] font-semibold text-center">
              <strong className="text-point2 font-semibold">
                {searchedKeyword}
              </strong>
              에 대해 총{' '}
              <strong className="text-point2 font-semibold">27</strong>
              개가 검색됐어요
            </h3>
            <form className="w-full h-[405px] bg-point1 max-md:fixed dark:bg-black dark:border-t-black py-[64px]">
              <div className="w-[calc(100%-160px)] max-w-[calc(1280px/2-160px)] mx-auto relative py-[10px] rounded-[15px] h-[60px] dark:bg-gray-600 shadow-[0px_2px_6px_rgba(0,0,0,0.15)]">
                <label className="relative px-[20px] flex items-center w-full h-[40px] gap-[10px]">
                  <i
                    className={`w-[24px] inline-flex items-center not-italic justify-center flex-wrap flex-row ${ordinaryArtist.className} before:content-['\\e90f'] before:text-[40px] before:text-gray-600 dark:before:text-point1`}
                  ></i>
                  <input
                    type="search"
                    placeholder="검색어를 입력해주세요"
                    value={inputKeyword}
                    onChange={(e) => setInputKeyword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="text-[20px] font-medium shrink w-full border-0 pl-0 placeholder:text-[17px] placeholder:font-semibold placeholder:text-gray-500 placeholder:tracking-tight max-md:text-[18px] max-md:placeholder:text-[15px] "
                  />
                </label>
              </div>
            </form>
          </div>
          <div>
            <ul className="flex justify-start mx-auto gap-[15px] pb-[8px] w-fit">
              <li className="text-[15px]">
                <button className="flex items-center p-[12px] gatp-[10px] rounded-[100px] shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.4,13.9c.2-1.5.3-3,1.3-4.3s1.8-2.3,3.2-2.9,2.9-.8,4.3-.4,2.3,1.7,3,2.9,1.6,3.2,1.6,5,1.2,0,1.2-.3c0-1.8-.6-3.6-1.6-5.1s-1.8-2.5-3.3-3-3.3-.2-4.8.3-2.9,1.5-4,2.8-1.2,1.5-1.5,2.4-.4,1.9-.5,2.8,1.2.2,1.2-.2h0Z"></path>
                    <path d="M7.9,10.9c-1.1.2-2.2.8-2.4,2s0,1.9.6,2.5c.9.9,2.4.7,3.5.2s1.1-.7,1.4-1.4.2-1,0-1.5c-.4-1.3-1.7-2.1-3-1.8s-.6.1-.7.4.4.3.5.3.1,0,.2,0c.1,0,0,0,0,0s.1,0,.2,0c-.1,0,0,0,0,0s0,0,.1,0c0,0,0,0,0,0,0,0,0,0,0,0,.1,0,.2,0,.3.2s.1,0,.2.2.2.2.2.2c.1.2.3.3.4.5.2.4.3.8.2,1.2s0,.2,0,.3,0,0,0,.1c0,0,0,0,0,0,0,0,0,0,0,.1,0,0-.1.2-.2.3s0,0,0,0,0,0,0,0c0,0-.1,0-.2.1s.1,0,0,0,0,0,0,0-.2.1,0,0c0,0-.1,0-.2,0s0,0,0,0c-.1,0,0,0,0,0s-.1,0-.2,0,0,0-.1,0c0,0,.1,0,0,0s-.1,0-.2,0,0,0,0,0c0,0,0,0,0,0s-.1,0-.2,0,0,0,0,0c.1,0,0,0,0,0-.1,0-.2,0-.3,0,.1,0,0,0,0,0,0,0,0,0-.1,0s0,0-.1,0,0,0,0,0c0,0,0,0,0,0-.3-.3-.5-.5-.6-.8s-.1-.4-.1-.6,0-.3,0-.5,0-.4.1-.6,0,0,0,0c0,0,0,0,0,0s0,0,0-.1c0,0,.1-.2.2-.3s0,0,0,0c0,0,0,0,0,0,0,0,0,0,.1-.1s0,0,0,0c0,0,0,0,0,0s0,0,.1,0c.1,0,0,0,0,0s0,0,0,0c.1,0,0,0,0,0,0,0,.1,0,.2,0,0,0,.1,0,0,0,0,0,0,0,.1,0,.2,0,.6-.1.7-.4s-.4-.3-.5-.3h0Z"></path>
                    <path d="M7.4.5c0,1.2.1,2.3,0,3.5s.3.4.5.3.7-.2.7-.5c0-1.2,0-2.3,0-3.5S8.3,0,8.1,0s-.7.2-.7.5h0Z"></path>
                    <path d="M13.2,2.1c0-.1,0,0,0,0s0,0,0,0c0,0,0,.1,0,.2s0,.1,0,.2,0,0,0,0c0-.1,0,0,0,0-.2.2-.4.5-.5.7-.4.4-.8.8-1.1,1.3s-.1.2,0,.3.1.2.3.2c.3,0,.7,0,.9-.2.7-1,1.8-1.8,2.2-3s0-.2-.1-.3-.3-.1-.4,0c-.3,0-.6.2-.7.5h0Z"></path>
                    <path d="M1.7,2.3c.4,1,1.4,1.6,1.9,2.6s.5,0,.7,0,.6-.2.6-.4c-.5-1-1.5-1.6-1.9-2.6s-.5,0-.7,0-.3,0-.4.2-.2.1-.1.2h0Z"></path>
                  </svg>
                  전체
                  <span>12</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
