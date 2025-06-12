//app /ui/home/DarkUp.tsx

import { ordinaryArtist } from '@/app/components/fonts';
import Link from 'next/link';

export default function DarkUp() {
  return (
    <div className="flex bottom-[150px] right-0 fixed z-10">
      <button
        type="button"
        className="w-auto h-auto right-[70px] py-[10px] px-[10px] fixed flex flex-col items-end text-[14px] font-medium after:content-['다크모드'] after:inline"
      >
        <i className="relative mb-[5px] w-[20px] h-[20px] rounded-[50%] after:content-[''] after:block after:w-[50%] after:h-[50%] after:rounded-[50%] after:absolute after:right-0 after:top-0 after:transition-all after:duration-75 after:bg-[#000]"></i>
      </button>
      <Link
        href="#"
        className="w-auto h-auto py-[9px] px-[10px] fixed flex flex-col items-center right-[5px] before:content-[''] before:block before:absolute before:left-[15px] before:top-0 before:1px before:bg-[#fff] before:transition-all before:duration-75 "
      >
        <i className="h-[20px] relative mb-[5px] w-[1px] transition-[height] duration-75 bg-[#fff] after: content-[''] after:block after:w-[15px] after:h-[15px] after:border after:border-[#fff] after:absolute after:left-[50%] after:top-[0.1875rem] after:-ml-[7.5px] after:rotate-45"></i>
        위로가기
      </Link>
    </div>
  );
}
