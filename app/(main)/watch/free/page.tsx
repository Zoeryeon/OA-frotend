// app /(main) /watch /free /free.tsx
'use client';

import ArrayMenu from '@/app/components/watch/free/ArrayMenu';
import VodList from '@/app/components/watch/free/VodList';
import GenreMenu from '@/app/components/watch/free/GenreMenu';
import WorryBe from '@/app/components/watch/free/WorryBe';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

type All = {
  vod_id: number;
  title: string;
  summary: string;
  img_url: string;
  price: string;
  age: string | null;
  favorite: number;
  created_at: Date;
  is_interview: string;
  category_id: number;
  keyword: [];
};

export default function free({
  searchParams,
}: {
  searchParams: Promise<{ genre: string; type: string }>;
}) {
  // 주소
  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));

  const router = useRouter();

  // ul 반응형
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  // 현재 선택된 장르를 관리하는 상태 (자식 컴포넌트에서 받아옵니다)
  const [currentGenre, setCurrentGenre] = useState('all');
  // 현재 선택된 정렬방식 관리하는 상태
  const [currentSort, setCurrentSort] = useState('최신순');
  // 더보기 count
  const [count, setCount] = useState(0);
  // 누적 상태
  const [allList, setAllList] = useState<All[]>([]);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['free', currentGenre, currentSort, count],
    queryFn: () =>
      fetch(
        `http://localhost:3001/watch/free?genre=${currentGenre}&sort=${currentSort}&count=${count}`
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

  console.log(allList);

  useEffect(() => {
    params.set('genre', currentGenre);
    router.replace(`?${params.toString()}`);
  }, [currentGenre]);

  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <div className="max-w-[1160px] mx-auto">
        <WorryBe />
        <GenreMenu
          currentGenre={currentGenre}
          setCurrentGenre={setCurrentGenre}
        />
        <ArrayMenu
          currentSort={currentSort}
          setCurrentSort={setCurrentSort}
          isSingleColumn={isSingleColumn}
          setIsSingleColumn={setIsSingleColumn}
        />
        <VodList
          isSingleColumn={isSingleColumn}
          allList={allList}
          count={count}
          setCount={setCount}
        />
      </div>
    </main>
  );
}
