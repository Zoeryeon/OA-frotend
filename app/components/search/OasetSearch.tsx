// app /components /search /OasetSearch.sx
import { ordinaryArtist } from '@/app/components/fonts';
import Link from 'next/link';

const oaList = [
  {
    id: 1,
    img_url: '/images/oaset/fc5985bf045888542064a90afb80a1e4.webp',
    price: '50 W0W~',
    title: '내 작품으로 세상과 교감하고 싶다면',
    intro: '오아플러스 큐레이션',
  },
  {
    id: 2,
    img_url: '/images/oaset/fc5985bf045888542064a90afb80a1e4.webp',
    price: '50 W0W~',
    title: '내 작품으로 세상과 교감하고 싶다면',
    intro: '오아플러스 큐레이션',
  },
  {
    id: 3,
    img_url: '/images/oaset/fc5985bf045888542064a90afb80a1e4.webp',
    price: '50 W0W~',
    title: '내 작품으로 세상과 교감하고 싶다면',
    intro: '오아플러스 큐레이션',
  },
  {
    id: 4,
    img_url: '/images/oaset/fc5985bf045888542064a90afb80a1e4.webp',
    price: '50 W0W~',
    title: '내 작품으로 세상과 교감하고 싶다면',
    intro: '오아플러스 큐레이션',
  },
];
export default function OasetSearch() {
  return (
    <div>
      <h3 className="text-[18px] font-semibold pt-[64px] pb-[20px]">
        OA SET <span className="text-point2">5</span>
      </h3>
      <ul className="grid gap-[40px] max-sm:gap-y-[15px] max-sm:gap-x-[10px] grid-cols-3 max-sm:grid-cols-2">
        {oaList.map((item, index) => (
          <li key={index}>
            <Link
              href="#"
              className=" block border border-gray-400 rounded-[10px] overflow-hidden group dark:border-gray-600 relative aspect-[344.67/375.86]"
              style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.07)' }}
            >
              <div className="min-w-[15px] h-[30px] whitespace-nowrap absolute z-10 left-[10px] top-[13px] max-sm:h-[24px]">
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
                  src={item.img_url}
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
                <h4 className="h-[30px] tracking-tighter text-[18px] font-semibold mb-[5px] overflow-hidden text-ellipsis line-clamp-2 max-md:text-[16px] max-md:h-[43px]">
                  {item.title}
                </h4>
                <div className="flex mt-auto items-end h-[40px] justify-between gap-[10px] max-md:h-auto">
                  <p className="tracking-tight">{item.intro}</p>
                  <i
                    className={`inline-flex not-italic ${ordinaryArtist.className} before:content-['\\e949'] before:text-[18px] before:text-point2 before:font-bold`}
                  ></i>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="border border-gray-600 w-full h-[55px] flex justify-center items-center rounded-[5px] gap-[10px] mt-[64px] text-[15px]"
      >
        OA SET 더보기
        <i
          className={`inline-flex not-italic items-center ${ordinaryArtist.className} before:content-['\\e93c'] before:text-[24px] before:text-gray-600`}
        ></i>
      </button>
    </div>
  );
}
