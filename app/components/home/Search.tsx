//app /components /home /Search.tsx

import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { ordinaryArtist } from '@/app/components/fonts';

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

export default function Search({
  isVisible,
  setIsVisible,
  isShadow,
  setShadow,
}: SearchProps) {
  return (
    <div className="ml-auto">
      <Link
        href="#"
        className={`inline-flex items-center justify-center flex-wrap flex-row mr-[5px] ${ordinaryArtist.className} before:content-['\\e90f'] before:text-[40px] before:text-gray-600`}
        onClick={() => setIsVisible((prev) => !prev)}
      >
        <span className="hidden">
          {isVisible ? '검색창 닫기' : '검색창 활성화'}
        </span>
      </Link>
      {isVisible && (
        <div className="inline-flex absolute left-[50%] top-full bottom-0 max-w-[1920px] w-full h-screen -translate-x-[50%] bg-black/70 backdrop-blur-sm">
          <form className="w-full h-[405px] bg-point1 border-t border-t-gray-400">
            <div className="w-[calc(100%-160px)] max-w-[calc(1280px/2-160px)] py-[80px] mx-auto relative left-0 top-0">
              <div
                className={`relative py-[10px] rounded-[15px] h-[60px] ${
                  isShadow ? 'shadow-[0px_2px_6px_rgba(0,0,0,0.15)]' : ''
                }`}
                onClick={() => setShadow(true)}
              >
                <label className="relative px-[20px] flex items-center w-full h-[40px] gap-[10px]">
                  <i
                    className={`w-[24px] inline-flex items-center justify-center flex-wrap flex-row ${ordinaryArtist.className} before:content-['\\e90f'] before:text-[40px] before:text-gray-600`}
                  ></i>
                  <input
                    type="search"
                    placeholder="검색어를 입력해주세요"
                    className="text-[20px] font-medium shrink w-full border-0 pl-0 placeholder:text-[17px] placeholder:font-semibold placeholder:text-gray-500 placeholder:tracking-tight"
                  />
                </label>
                <ul></ul>
              </div>
              <div className="flex flex-col gap-[10px] mt-[20px] px-[10px]">
                <span className="text-[12px] opacity-50">추천 검색어</span>
                <ul className="flex flex-wrap gap-[15px]">
                  {keywords.map((keyword, index) => (
                    <li key={index}>
                      <Link
                        href={`/search?/keywrod=${keyword}`}
                        className="block py-[10px] px-[15px] bg-[#ededed] rounded-[5px] text-[14px] text-gray-600 tracking-tight"
                      >
                        {keyword}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden max-sm:flex">
                <span>카테고리</span>
                <ul>
                  <li>
                    <Link href="/watch?genre=musical">
                      뮤지컬 <i></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/watch?genre=theater">
                      연극 <i></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/watch?genre=dance">
                      무용 <i></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/watch?genre=music">
                      음악 <i></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/oatheme">
                      오뗌 극장 <i></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/watch/oaplus">
                      오아플러스 <i></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/oatheme/%EB%8F%99%EC%95%84-%EC%BD%A9%EC%BF%A0%EB%A5%B4">
                      동아콩쿠르 <i></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
