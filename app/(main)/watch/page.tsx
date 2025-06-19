// app /(main) /watch /page.tsx
'use client';

import CateMenu from '@/app/components/watch/CateMenu';
import Counsel from '@/app/components/watch/Counsel';
import SubMenu from '@/app/components/watch/SubMenu';
import WatchList from '@/app/components/watch/WatchList';
import { useQuery } from '@tanstack/react-query';
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
  // 더보기 count
  const [count, setCount] = useState(0);
  // 누적 상태
  const [allList, setAllList] = useState<All[]>([]);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['vod', count],
    queryFn: () =>
      fetch(`http://localhost:3001/watch?count=${count}`).then((res) =>
        res.json()
      ),
  });

  // 새 데이터가 들어올 때마다 누적 저장
  useEffect(() => {
    if (data) {
      setAllList([...allList, ...data]);
    }
  }, [data]);

  // ul 반응형
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  return (
    <main className="bg-point1">
      <div className="max-w-[1160px] mx-auto ">
        <CateMenu />
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
