// app /(main) /watch /page.tsx
'use client';

import CateMenu from '@/app/components/watch/CateMenu';
import Counsel from '@/app/components/watch/Counsel';
import SubMenu from '@/app/components/watch/SubMenu';
import WatchList from '@/app/components/watch/WatchList';
import { useQuery } from '@tanstack/react-query';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

export default function Watch({
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
  const [currentGenre, setCurrentGenre] = useState(paramsObj.genre);
  // 현재 선택된 타입을 관리하는 상태
  const [currentType, setCurrentType] = useState('all');
  // 현재 선택된 정렬방식 관리하는 상태
  const [currentSort, setCurrentSort] = useState('인기순');
  // 더보기 count
  const [count, setCount] = useState(0);
  // 누적 상태
  const [allList, setAllList] = useState<All[]>([]);
  // 수정
  const [editMode, setEditMode] = useState(false);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['vod', currentGenre, currentType, currentSort, count],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/watch?genre=${currentGenre}&type=${currentType}&sort=${currentSort}&count=${count}`
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
  }, [data, count, currentSort]);

  useEffect(() => {
    params.set('genre', currentGenre);
    params.set('type', currentType);
    router.replace(`?${params.toString()}`);
  }, [currentGenre, currentType]);

  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <div className="max-w-[1160px] mx-auto ">
        <CateMenu
          currentGenre={currentGenre}
          setCurrentGenre={setCurrentGenre}
        />
        <SubMenu
          currentType={currentType}
          setCurrentType={setCurrentType}
          currentSort={currentSort}
          setCurrentSort={setCurrentSort}
          isSingleColumn={isSingleColumn}
          setIsSingleColumn={setIsSingleColumn}
          setCount={setCount}
        />
        <div className="flex px-[20px] pb-[25px] gap-[10px] items-center justify-end w-full max-md:pb-[20px] max-sm:pb-[15px]">
          <Link
            href="/watch/vod/create"
            className="border border-gray-400 rounded-[5px] p-[8px] text-[12px] text-gray-500"
          >
            vod 작성하기
          </Link>
          <button
            onClick={() => setEditMode((prev) => !prev)}
            className="border border-gray-400 rounded-[5px] p-[8px] text-[12px] text-gray-500"
          >
            {editMode ? '편집 취소' : 'vod 수정하기'}
          </button>
        </div>
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
            editMode={editMode}
          />
        )}
        <Counsel />
      </div>
    </main>
  );
}
