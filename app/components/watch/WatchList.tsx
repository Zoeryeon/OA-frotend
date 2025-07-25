// app /components /watch /WatchList.tsx
'use client';

import Link from 'next/link';
import { ordinaryArtist } from '@/app/components/fonts';
import { useEffect } from 'react';

type All = {
  vod_id: number;
  oaset_id: number;
  title: string;
  summary: string;
  img_url: string;
  price: string;
  age: string | null;
  favorite: number;
  created_at: Date;
  is_interview: string;
  category_id: number;
  intro: string;
  source: string;
  keyword: [];
};

let scroll = 0;

export default function WatchList({
  allList,
  isSingleColumn,
  count,
  setCount,
  editMode,
}: {
  allList: All[];
  isSingleColumn: boolean;
  count: number;
  setCount: (a: number) => void;
  editMode: boolean;
}) {
  // 더보기 count
  function handleClick() {
    setCount(count + 1);
    scroll = window.scrollY;
  }
  // 더보기 눌렀을때 위치 고정
  useEffect(() => {
    window.scrollTo({ top: scroll });
  }, []);

  return (
    <div className="px-[20px]">
      <ul
        className={`grid gap-[40px] max-sm:gap-y-[15px] max-sm:gap-x-[10px] ${
          isSingleColumn ? 'grid-cols-1' : 'grid-cols-3 max-sm:grid-cols-2 '
        }`}
      >
        {allList.map((item, index) =>
          item.source === 'vod' ? (
            <li key={index} className="relative">
              {editMode && (
                <Link
                  href={`/watch/vod/${item.vod_id}/edit`}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="absolute top-2 right-2 z-20 bg-gray-600 opacity-70 text-xs px-2 py-1 rounded text-point1 hover:bg-point2"
                >
                  편집
                </Link>
              )}
              <Link
                href="#"
                className="block border border-gray-400 rounded-[10px] overflow-hidden group dark:border-gray-600 relative aspect-[344.67/375.86] max-sm:aspect-auto"
                style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
              >
                {item.age !== null && (
                  <div className="min-w-[15px] h-[27px] whitespace-nowrap absolute z-10 left-[10px] top-[13px] max-sm:h-[24px]">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      href="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="27"
                      height="26"
                      viewBox="0 0 22.678 22.632"
                      enableBackground="new 0 0 22.678 22.632"
                    >
                      <path
                        fill={
                          item.age === '12'
                            ? '#ffb647'
                            : item.age === '15'
                            ? '#f70'
                            : 'var(--point-color2)'
                        }
                        d="M11.586,0.008c-7.5-0.332-14.125,10.498-10.625,16.83c2.5,4.668,7.723,6.4,12.125,5.609 c6.167-1.109,11.143-10.605,9.143-16.105C20.729,2.842,14.919,0.002,11.586,0.008"
                      ></path>
                    </svg>
                    <em className="text-point1 text-[12px] w-full text-center absolute left-0 top-0 leading-[27px] max-sm:leading-[24px] max-sm:text-[10px]">
                      {item.age}
                    </em>
                  </div>
                )}
                <div className="w-full overflow-hidden aspect-[16/9] max-sm:aspect-[87/49]">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item.img_url}`}
                    alt="썸네일"
                    className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
                    style={{ boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                  />
                </div>
                <div className="flex flex-col h-[180px] border-t border-t-gray-400 px-[10px] pb-[15px] bg-white max-md:h-[150px] dark:bg-black dark:border-t-gray-600 max-sm:h-[170px] max-[500px]:h-[180px] max-[450px]:h-[190px]">
                  <div className="mt-[15px] text-[13px] flex flex-wrap items-start gap-[5px] text-gray-600 tracking-tight w-full text-ellipsis break-all max-md:text-[11px] max-md:mt-[5px] max-sm:mt-[10px]">
                    <p className="text-point1 bg-point2 block mb-[6px] py-[1px] px-[6px] rounded-[3px] max-md:mb-0">
                      {item.price}
                    </p>
                    {item.keyword?.map((keyword, index) => (
                      <p
                        key={index}
                        className="bg-[#ededed] block mb-[6px] py-[1px] px-[6px] rounded-[3px] max-md:mb-0 dark:bg-gray-600 dark:text-point1"
                      >
                        {keyword}
                      </p>
                    ))}
                  </div>
                  <h4 className="h-[50px] tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600 overflow-hidden text-ellipsis line-clamp-2 max-md:text-[16px] max-md:h-[43px] max-md:mt-[3px] max-md:mb-[2px] dark:text-point1 max-sm:h-[40px]">
                    {item.title}
                  </h4>
                  <div className="flex mt-auto items-end h-[44px] justify-between gap-[10px] max-md:h-auto max-md:mt-0">
                    <p className="text-[#676767] overflow-hidden text-ellipsis line-clamp-2 dark:text-point1">
                      {item.summary}
                    </p>
                    <i
                      className={`inline-flex not-italic icon-heart ${ordinaryArtist.className} before:text-[18px] before:text-point2 before:font-bold`}
                    >
                      <span className="sr-only">좋아요 하트</span>
                    </i>
                  </div>
                </div>
              </Link>
            </li>
          ) : item.source === 'oaset' ? (
            <li key={index}>
              <Link
                href="#"
                className=" block border border-gray-400 rounded-[10px] overflow-hidden group dark:border-gray-600 relative aspect-[344.67/375.86] max-sm:aspect-[14/15] max-[650px]:aspect-[14/17] max-[550px]:aspect-[14/18] max-[500px]:aspect-[14/20] max-[400px]:aspect-[12/20] max-[360px]:aspect-[11/21] max-[340px]:aspect-[11/22]"
                style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
              >
                <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px] max-sm:h-[24px]">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    href="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="27"
                    height="26"
                    viewBox="0 0 22.678 22.632"
                    enableBackground="new 0 0 22.678 22.632"
                  >
                    <path
                      fill="var(--gray-600)"
                      d="M11.586,0.008c-7.5-0.332-14.125,10.498-10.625,16.83c2.5,4.668,7.723,6.4,12.125,5.609 c6.167-1.109,11.143-10.605,9.143-16.105C20.729,2.842,14.919,0.002,11.586,0.008"
                    ></path>
                  </svg>
                  <em className="text-point1 text-[12px] w-full text-center absolute left-0 top-0 leading-[30px] max-sm:leading-[24px] max-sm:text-[10px]">
                    SET
                  </em>
                </div>
                <div className="relative w-full h-full rounded-[10px]">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item.img_url}`}
                    alt="썸네일"
                    className=" w-full h-full bg-[#ededed] object-cover object-center transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
                    style={{ boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                  />
                </div>
                <div
                  className="flex flex-col absolute left-0 bottom-0 z-1 px-[10px] pb-[20px] w-full text-point1 rounded-b-[10px]"
                  style={{
                    background:
                      'linear-gradient(0deg, var(--gray-600), transparent)',
                  }}
                >
                  <div className="mt-[15px] text-[13px] flex flex-wrap items-start gap-[5px] text-gray-600 tracking-tight w-full text-ellipsis break-all max-md:text-[11px]">
                    <p className="text-point1 bg-point2 block mb-[6px] py-[1px] px-[6px] rounded-[3px]">
                      {item.price}
                    </p>
                  </div>
                  <h4 className="h-[50px] tracking-tighter text-[18px] font-semibold mb-[5px] overflow-hidden text-ellipsis line-clamp-2 max-md:text-[16px] max-md:h-[43px]">
                    {item.title}
                  </h4>
                  <div className="flex mt-auto items-end h-[40px] justify-between gap-[10px] max-md:h-auto">
                    <p className="tracking-tight">{item.intro}</p>
                    <i
                      className={`inline-flex not-italic icon-heart ${ordinaryArtist.className} before:text-[18px] before:text-point2 before:font-bold`}
                    ></i>
                  </div>
                </div>
              </Link>
            </li>
          ) : null
        )}
      </ul>
      <button
        type="button"
        className="border border-gray-600 w-full flex justify-center items-center h-[55px] rounded-[5px] gap-[10px] mt-[80px] dark:border-gray-400 dark:text-point1"
        onClick={handleClick}
      >
        더보기
        <i
          className={`inline-flex not-italic icon-puls ${ordinaryArtist.className} before:text-[24px]`}
        ></i>
      </button>
    </div>
  );
}
