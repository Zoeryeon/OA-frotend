// app /components /watch /SubMenu.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const typeList = [
  {
    name: '전체유형',
    type: 'all',
  },
  {
    name: 'VOD',
    type: 'vod',
  },
  {
    name: 'OA SET',
    type: 'oaset',
  },
];
const sortOptionList = [
  {
    name: '인기순',
  },
  {
    name: '가격낮은순',
  },
  {
    name: '최신순',
  },
];

export default function SubMenu({
  currentType,
  setCurrentType,
  currentSort,
  setCurrentSort,
  isSingleColumn,
  setIsSingleColumn,
}: {
  currentType: string;
  setCurrentType: (type: string) => void;
  currentSort: string;
  setCurrentSort: (sort: string) => void;
  isSingleColumn: boolean;
  setIsSingleColumn: (a: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex px-[20px] pb-[50px] items-center justify-between w-full max-md:pb-[38px] max-sm:pb-[30px]">
      <ol className="flex gap-[10px] ">
        {typeList.map((item, index) => (
          <li key={index}>
            <Link
              href="#"
              onClick={() => setCurrentType(item.type)}
              className={`pr-[10px] text-[18px] font-medium relative tracking-tight max-md:text-[16px] max-sm:text-[13px] max-sm:pr-[8px] ${
                currentType === item.type
                  ? 'text-gray-600 dark:text-[#dedede]'
                  : 'text-gray-500'
              } ${
                index < 2
                  ? "before:content-[''] before:block before:absolute before:left-full before:top-[50%] before:-mt-[9px] before:h-[18px] before:border-l before:border-l-gray-400"
                  : ''
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
      <div className="flex gap-[5px] items-center">
        <div
          className={`flex items-center content-center border h-[40px] bg-point1 w-[130px] px-[10px] relative cursor-pointer select-none max-md:h-[36px] max-md:text-[14px] max-md:w-auto max-sm:text-[13px] max-sm:pr-[4px] max-sm:pl-[7px] dark:bg-[#080808] ${
            isOpen
              ? 'border-point2 rounded-tr-[5px] rounded-tl-[5px]'
              : 'border-gray-400 rounded-[5px] dark:border-gray-600 '
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex justify-between gap-[5px] whitespace-nowrap w-full max-sm:gap-[3px]">
            <span className="dark:text-point1">{currentSort}</span>{' '}
            {/* 선택된 값 표시 */}
            <img
              src="/images/arrow_drop_down.svg"
              alt="메뉴버튼"
              className={`${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
          <ol
            className={`absolute top-full -left-[1px] -right-[1px] flex-wrap bg-point1 w-auto rounded-br-[5px] rounded-bl-[5px] z-10 h-auto border border-point2 border-t-0 ${
              isOpen ? 'flex' : 'hidden'
            }`}
          >
            {sortOptionList.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  setIsOpen(false); // 선택 후 닫기
                  setCurrentSort(item.name);
                }}
                className={`w-full h-[40px] items-center p-[10px] border-t border-t-black/5 hover:bg-black/5 max-md:h-[36px] max-md:py-0 max-md:content-center ${
                  currentSort === item.name ? 'bg-black/5' : ''
                }`}
              >
                {item.name}
              </li>
            ))}
          </ol>
        </div>
        {/* 모바일에 나오는 버튼 */}
        <button
          type="button"
          className="hidden w-[16px] h-[16px] max-sm:block"
          onClick={() => setIsSingleColumn(true)}
        >
          <i
            className={`${
              isSingleColumn ? 'bg-[#676767]' : 'bg-gray-400'
            } w-full h-[9px]  block mb-[2px] `}
          ></i>
          <i
            className={`${
              isSingleColumn ? 'bg-[#676767]' : 'bg-gray-400'
            } w-full h-[5px] block`}
          ></i>
        </button>
        <button
          type="button"
          className={`hidden flex-wrap w-[16px] h-[16px] ml-[4px] max-sm:flex ${
            isSingleColumn ? '[&_i]:bg-gray-400' : '[&_i]:bg-[#676767]'
          }`}
          onClick={() => setIsSingleColumn(false)}
        >
          <i className="w-[7px] h-[7px] block mb-[2px] mr-[2px]"></i>
          <i className="w-[7px] h-[7px] block mb-[2px] "></i>
          <i className="w-[7px] h-[7px] block mr-[2px]"></i>
          <i className="w-[7px] h-[7px] block"></i>
        </button>
      </div>
    </div>
  );
}
