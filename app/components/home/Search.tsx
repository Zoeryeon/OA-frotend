//app /components /home /Search.tsx

import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
import { ordinaryArtist } from '@/app/components/fonts';
import { useRouter } from 'next/navigation';

type SearchProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  isShadow: boolean;
  setShadow: Dispatch<SetStateAction<boolean>>;
};

const keywords = [
  '동아무용',
  '동아콩쿠르',
  '창작극',
  '주크박스 뮤지컬',
  '삶',
  '전쟁',
  '역사',
  '공연제작',
  '기술활용',
  '메타버스',
  '신규작품',
];

const category = [
  { name: '뮤지컬', href: '/watch?genre=musical' },
  { name: '연극', href: '/watch?genre=theater' },
  { name: '무용', href: '/watch?genre=dance' },
  { name: '음악', href: '/watch?genre=music' },
  { name: '오뗌 극장', href: '/oatheme' },
  { name: '오아플러스', href: '#' },
  { name: '동아콩쿠르', href: '#' },
];

export default function Search({
  isVisible,
  setIsVisible,
  isShadow,
  setShadow,
}: SearchProps) {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (keyword.trim()) {
        router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
        setIsVisible(false); //검색창닫기
        setKeyword(''); //입력창 초기화
      }
    }
  };

  return (
    <div className="absolute left-0 top-[75px] w-full z-10">
      {isVisible && (
        <div className="inline-flex max-w-[1920px] w-full h-screen  z-10 bg-black/70 backdrop-blur-sm max-md:block">
          <form className="w-full h-[405px] bg-point1 border-t border-t-gray-400 max-md:fixed max-md:left-0 max-md:top-0 max-md:h-full dark:bg-black dark:border-t-black">
            <div className="w-[calc(100%-160px)] max-w-[calc(1280px/2-160px)] py-[80px] mx-auto relative left-0 top-0 max-md:w-full max-md:max-w-full max-md:px-[20px] max-md:py-[40px]">
              <div
                className={`relative py-[10px] rounded-[15px] h-[60px] dark:bg-gray-600 ${
                  isShadow ? 'shadow-[0px_2px_6px_rgba(0,0,0,0.15)]' : ''
                }`}
                onClick={() => setShadow(true)}
              >
                <label className="relative px-[20px] flex items-center w-full h-[40px] gap-[10px]">
                  <i
                    className={`w-[24px] inline-flex items-center not-italic justify-center flex-wrap flex-row icon-search ${ordinaryArtist.className} before:text-[40px] before:text-gray-600 dark:before:text-point1`}
                  ></i>
                  <input
                    type="search"
                    placeholder="검색어를 입력해주세요"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="text-[20px] font-medium shrink w-full border-0 pl-0 placeholder:text-[17px] placeholder:font-semibold placeholder:text-gray-500 placeholder:tracking-tight max-md:text-[18px] max-md:placeholder:text-[15px] "
                  />
                </label>
                <ul></ul>
              </div>
              <div className="flex flex-col gap-[10px] mt-[20px] px-[10px]">
                <span className="text-[12px] opacity-50 dark:text-gray-400">
                  추천 검색어
                </span>
                <ul className="flex flex-wrap gap-[15px]">
                  {keywords.map((keyword, index) => (
                    <li key={index}>
                      <Link
                        href={`/search?keywrod=${keyword}`}
                        className="block py-[10px] px-[15px] bg-[#ededed] rounded-[5px] text-[14px] text-gray-600 tracking-tight dark:bg-gray-600 dark:text-point1"
                      >
                        {keyword}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden max-md:flex max-md:flex-col max-md:gap-[10px] max-md:mt-[20px] max-md:px-[10px]">
                <span className="text-[12px] opacity-50">카테고리</span>
                <ul className="flex flex-wrap gap-[15px]">
                  {category.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block py-[10px] px-[15px] rounded-[5px] text-[14px] bg-point2 text-white"
                      >
                        {item.name}
                        <i
                          className={`inline-flex items-center justify-center flex-wrap flex-row not-italic icon-link ${ordinaryArtist.className} before:text-[14px] before:text-white before:font-semibold`}
                        >
                          <span className="hidden">바로가기</span>
                        </i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
