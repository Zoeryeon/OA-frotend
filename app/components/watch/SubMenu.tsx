// app /components /watch /SubMenu.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const sortOptionList = [
  {
    name: '오아추천순',
  },
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
  setIsSingleColumn,
  isSingleColumn,
}: {
  // setIsSingleColumn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSingleColumn: (a: boolean) => void;
  isSingleColumn: boolean;
}) {
  const [active, setActive] = useState('전체유형');
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptionList[0].name); // 기본 선택값

  return (
    <div className="flex px-[20px] pb-[80px] items-center justify-between w-full max-md:pb-[48px] max-sm:pb-[40px]">
      <ol className="flex gap-[10px] ">
        {['전체유형', 'VOD', 'OA SET'].map((item, index) => (
          <li key={item}>
            <Link
              href="#"
              onClick={() => setActive(item)}
              className={`pr-[10px] text-[18px] font-medium relative tracking-tight max-md:text-[16px] max-sm:text-[13px] max-sm:pr-[8px] ${
                active === item ? 'text-gray-600' : 'text-gray-500'
              } ${
                index < 2
                  ? "before:content-[''] before:block before:absolute before:left-full before:top-[50%] before:-mt-[9px] before:h-[18px] before:border-l before:border-l-gray-400"
                  : ''
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ol>
      <div className="flex gap-[5px] items-center">
        <div
          className={`flex items-center content-center border h-[40px] bg-point1 w-[130px] px-[10px] relative cursor-pointer select-none max-md:h-[36px] max-md:text-[14px] max-md:w-auto max-sm:text-[13px] max-sm:pr-[4px] max-sm:pl-[7px] ${
            isOpen
              ? 'border-point2 rounded-tr-[5px] rounded-tl-[5px]'
              : 'border-gray-400 rounded-[5px]'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex justify-between gap-[5px] whitespace-nowrap w-full max-sm:gap-[3px]">
            <span>{selected}</span> {/* 선택된 값 표시 */}
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
                className={`w-full h-[40px] items-center p-[10px] border-t border-t-black/5 hover:bg-black/5 max-md:h-[36px] max-md:py-0 max-md:content-center ${
                  selected === item.name ? 'bg-black/5' : ''
                }`}
                onClick={() => {
                  setSelected(item.name);
                  setIsOpen(false); // 선택 후 닫기
                }}
              >
                {item.name}
              </li>
            ))}
          </ol>
        </div>
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
