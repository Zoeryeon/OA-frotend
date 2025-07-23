// app /components /watch /free /ArrayMenu.tsx
import { useState } from 'react';

const sortOptionList = [
  {
    name: '최신순',
  },
  {
    name: '인기순',
  },
];

export default function ArrayMenu({
  currentSort,
  setCurrentSort,
  isSingleColumn,
  setIsSingleColumn,
}: {
  currentSort: string;
  setCurrentSort: (sort: string) => void;
  isSingleColumn: boolean;
  setIsSingleColumn: (a: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1160px] mx-auto flex px-[20px] pb-[50px] items-center justify-between w-full max-md:pb-[38px] max-sm:pb-[30px]">
      <div className="pb-[65px] ml-auto max-md:pb-0 max-sm:flex max-sm:gap-[10px] max-sm:items-center max-sm:pb-[10px]">
        <div
          className={`items-center content-center border h-[40px] bg-point1 w-[130px] px-[10px] relative cursor-pointer select-none max-md:h-[36px] max-md:text-[14px] max-md:w-auto max-sm:text-[13px] max-sm:pr-[4px] max-sm:pl-[7px] dark:bg-[#080808] ${
            isOpen
              ? 'border-point2 rounded-tr-[5px] rounded-tl-[5px]'
              : 'border-gray-400 rounded-[5px]'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex justify-between gap-[5px] whitespace-nowrap w-full max-sm:gap-[3px]">
            <span className="dark:text-point1">{currentSort}</span>{' '}
            {/* 선택된 값 표시 */}
            <img
              src="/images/arrow_drop_down.svg"
              alt="메뉴버튼"
              className={` dark:filter dark:invert ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
          <ol
            className={`absolute top-full -left-[1px] -right-[1px] flex-wrap bg-point1 w-auto rounded-br-[5px] rounded-bl-[5px] z-10 h-auto border border-point2 border-t-0 dark:bg-[#080808] dark:text-gray-500 ${
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
                className={`w-full h-[40px] items-center p-[10px] border-t border-t-black/5 hover:bg-black/5 max-md:h-[36px] max-md:py-0 max-md:content-center dark:border-t-gray-600 dark:hover:bg-gray-600 ${
                  currentSort === item.name ? 'bg-black/5 dark:bg-gray-600' : ''
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
