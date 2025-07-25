// app /components /search /LiveSearch.sx
'use client';

import RandomImg from '@/app/components/search/RandomImg';
import { useEffect, useState } from 'react';

export default function LiveSearch({ liveCount }: { liveCount: number }) {
  // 랜덤 이미지
  const [num, setNum] = useState(0);

  // 랜덤 이미지
  useEffect(() => {
    setNum(Math.floor(Math.random() * 3));
  }, []);

  return (
    <div>
      <h3 className="text-[18px] font-semibold pt-[64px] pb-[20px] dark:text-white max-sm:pt-[40px]">
        LIVE <span className="text-point2">{liveCount}</span>
      </h3>
      <div className="flex flex-col items-center py-[64px]">
        <span className="block mx-auto w-[120px]">
          <RandomImg num={num} />
        </span>
        <p className="text-[18px] mt-[20px] dark:text-point1">
          검색 결과가 없어요
        </p>
      </div>
    </div>
  );
}
