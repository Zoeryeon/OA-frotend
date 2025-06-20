// app /(main) /watch /page.tsx
'use client';

import CateMenu from '@/app/components/watch/CateMenu';
import Counsel from '@/app/components/watch/Counsel';
import SubMenu from '@/app/components/watch/SubMenu';
import WatchList from '@/app/components/watch/WatchList';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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

export default function watch() {
  // 현재 선택된 장르를 관리하는 상태 (자식 컴포넌트에서 받아옵니다)
  const [currentGenre, setCurrentGenre] = useState('all');
  // 더보기 count
  const [count, setCount] = useState(0);
  // 누적 상태
  const [allList, setAllList] = useState<All[]>([]);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['vod', currentGenre, count],
    queryFn: () =>
      fetch(
        `http://localhost:3001/watch?genre=${currentGenre}&count=${count}`
      ).then((res) => res.json()),
  });

  // 새 데이터가 들어올 때
  useEffect(() => {
    // tab메뉴 클릭시 데이터 교체
    if (data && count === 0) {
      setAllList([...data]);
      // 더보기 클릭시 데이터 추가
    } else if (data && count >= 1) {
      setAllList([...allList, ...data]);
    }
  }, [data, count]);

  // ul 반응형
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  return (
    <main className="bg-point1">
      <div className="max-w-[1160px] mx-auto ">
        <CateMenu
          currentGenre={currentGenre}
          setCurrentGenre={setCurrentGenre}
        />
        <SubMenu
          isSingleColumn={isSingleColumn}
          setIsSingleColumn={setIsSingleColumn}
        />
        {isPending ? (
          <p>로딩 중입니다...</p>
        ) : isError ? (
          <p>에러 발생: {error.message}</p>
        ) : (
          <WatchList
            isSingleColumn={isSingleColumn}
            allList={allList}
            count={count}
            setCount={setCount}
          />
        )}
        <Counsel />
      </div>
    </main>
  );
}
