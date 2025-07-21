// app /components /search /OaplusSearch.sx
import { ordinaryArtist } from '@/app/components/fonts';
import RandomImg from '@/app/components/search/RandomImg';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type oaplus = {
  vod_id: number;
  title: string;
  summary: string;
  img_url: string;
  price: string;
  age: string | null;
  favorite: number;
  created_at: Date;
  keyword: [];
};

export default function OaplusSearch({
  selected,
  setSelected,
  plusCount,
  data,
}: {
  selected: string;
  setSelected: (a: string) => void;
  plusCount: number;
  data: oaplus[];
}) {
  const plusData =
    selected === 'all'
      ? data?.slice(0, 3)
      : selected === 'plus'
      ? data?.slice(0, 9)
      : data;

  // 랜덤 이미지
  const [num, setNum] = useState(0);

  // 랜덤 이미지
  useEffect(() => {
    setNum(Math.floor(Math.random() * 3));
  }, []);

  return (
    <div>
      <h3 className="text-[18px] font-semibold pt-[64px] pb-[20px]">
        오아플러스 <span className="text-point2">{plusCount}</span>
      </h3>
      {plusData && plusData.length > 0 ? (
        <ul className="grid gap-[40px] max-sm:gap-y-[15px] max-sm:gap-x-[10px] grid-cols-3 max-sm:grid-cols-2">
          {plusData?.slice(0, 3).map((item, index) => (
            <li key={index} className="relative">
              <Link
                href="#"
                className="block border border-gray-400 rounded-[10px] overflow-hidden group dark:border-gray-600 relative aspect-[344.67/375.86]"
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
                      width="100%"
                      height="100%"
                      viewBox="0 0 22.678 22.632"
                      enableBackground="new 0 0 22.678 22.632"
                      preserveAspectRatio="none"
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
                <div className="w-full overflow-hidden aspect-[16/9]">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${item.img_url}`}
                    alt="썸네일"
                    className="w-full h-full bg-[#ededed] object-cover transition-all duration-100 group-hover:duration-200 group-hover:transform group-hover:scale-105"
                    style={{ boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                  />
                </div>
                <div className="flex flex-col h-[180px] border-t border-t-gray-400 px-[10px] pb-[15px] bg-white max-md:h-[140px] dark:bg-black dark:border-t-gray-600 max-sm:h-[170px]">
                  <div className="mt-[15px] text-[13px] flex flex-wrap items-start gap-[5px] text-gray-600 tracking-tight w-full text-ellipsis break-all max-md:text-[11px]">
                    <p className="text-point1 bg-point2 block mb-[6px] py-[1px] px-[6px] rounded-[3px]">
                      {item.price}
                    </p>
                    {item.keyword?.map((keyword, index) => (
                      <p
                        key={index}
                        className="bg-[#ededed] block mb-[6px] py-[1px] px-[6px] rounded-[3px] dark:bg-gray-600 dark:text-point1"
                      >
                        {keyword}
                      </p>
                    ))}
                  </div>
                  <h4 className="h-[50px] tracking-tighter text-[20px] font-semibold mb-[7px] text-gray-600 overflow-hidden text-ellipsis line-clamp-2 max-md:text-[16px] max-md:h-[43px] dark:text-point1 max-sm:h-[50px]">
                    {item.title}
                  </h4>
                  <div className="flex mt-auto items-end h-[40px] justify-between gap-[10px] max-md:h-auto">
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
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center py-[64px]">
          <span className="block mx-auto w-[120px]">
            <RandomImg num={num} />
          </span>
          <p className="text-[18px] mt-[20px]">검색 결과가 없어요</p>
        </div>
      )}
      {selected === 'all' && data?.length > 3 && (
        <button
          type="button"
          onClick={() => setSelected('plus')}
          className="border border-gray-600 w-full h-[55px] flex justify-center items-center rounded-[5px] gap-[10px] mt-[64px] text-[15px]"
        >
          오아플러스 더보기
          <i
            className={`inline-flex not-italic items-center icon-more ${ordinaryArtist.className} before:text-[24px] before:text-gray-600`}
          ></i>
        </button>
      )}
    </div>
  );
}
