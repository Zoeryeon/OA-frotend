// app /components /search /OasetSearch.sx
import { ordinaryArtist } from '@/app/components/fonts';
import RandomImg from '@/app/components/search/RandomImg';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type oaset = {
  oaset_id: number;
  price: string;
  title: string;
  intro: string;
  img_url: string;
  favorite: number;
  created_at: Date;
};
export default function OasetSearch({
  selected,
  setSelected,
  oaCount,
  data,
}: {
  selected: string;
  setSelected: (a: string) => void;
  oaCount: number;
  data: oaset[];
}) {
  // 전체에서 3개, 더보기에서 9개씩 보여주기
  const oaData =
    selected === 'all'
      ? data?.slice(0, 6)
      : selected === 'oaset'
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
      <h3 className="text-[18px] font-semibold pt-[64px] pb-[20px] dark:text-white max-sm:pt-[40px]">
        OA SET <span className="text-point2">{oaCount}</span>
      </h3>
      {oaData && oaData.length > 0 ? (
        <ul className="grid gap-[40px] max-sm:gap-y-[15px] max-sm:gap-x-[10px] grid-cols-3 max-sm:grid-cols-2">
          {oaData?.map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className=" block border border-gray-400 rounded-[10px] overflow-hidden group dark:border-gray-600 relative aspect-[344.67/375.86] max-sm:aspect-auto max-sm:h-[200px]"
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
                  <h4 className="tracking-tighter text-[18px] font-semibold mb-[5px] line-clamp-2 max-md:text-[16px] max-sm:text-[15px]">
                    {item.title}
                  </h4>
                  <div className="flex mt-auto items-end h-[40px] justify-between gap-[10px] max-md:h-auto">
                    <p className="tracking-tight line-clamp-2 max-sm:text-[13px]">
                      {item.intro}
                    </p>
                    <i
                      className={`inline-flex not-italic icon-heart ${ordinaryArtist.className} before:text-[18px] before:text-point2 before:font-bold`}
                    ></i>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        // oaData가 0일때
        <div className="flex flex-col items-center py-[64px]">
          <span className="block mx-auto w-[120px]">
            <RandomImg num={num} />
          </span>
          <p className="text-[18px] mt-[20px]">검색 결과가 없어요</p>
        </div>
      )}
      {/* 전체이면서 데이터가 10개이상일때 나오기 */}
      {selected === 'all' && data?.length > 9 && (
        <button
          type="button"
          onClick={() => setSelected('oaset')}
          className="border border-gray-600 w-full h-[55px] flex justify-center items-center rounded-[5px] gap-[10px] mt-[64px] text-[15px] dark:border-gray-300 dark:text-point1 max-sm:mt-[40px]"
        >
          OA SET 더보기
          <i
            className={`inline-flex not-italic items-center icon-more ${ordinaryArtist.className} before:text-[24px] before:text-gray-600 dark:before:text-point1`}
          ></i>
        </button>
      )}
    </div>
  );
}
