// app /(main) /search /page.tsx
'use client';

import Pagination from '@/app/components/Pagination';
import InterviewSearch from '@/app/components/search/InterviewSearch';
import OaplusSearch from '@/app/components/search/OaplusSearch';
import OasetSearch from '@/app/components/search/OasetSearch';
import SearchCate from '@/app/components/search/SearchCate';
import Title from '@/app/components/search/Title';
import VodSearch from '@/app/components/search/VodSearch';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

type Item = {
  source?: string;
  is_interview?: string;
  summary: string;
  intro: string;
};

export default function Search({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string; page: string }>;
}) {
  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  // form에 입력하는 값
  const [inputKeyword, setInputKeyword] = useState('');
  // 제목에 들어가는 값
  const [searchedKeyword, setSearchedKeyword] = useState('');
  // 검색 카테고리
  const [selected, setSelected] = useState('all');

  const router = useRouter();
  // 데이터 개수
  const [vodCount, setVodCount] = useState(0);
  const [oaCount, setOaCount] = useState(0);

  // 검색어 입력 후 엔터
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value;
      setInputKeyword(value);

      if (value.trim()) {
        router.push(`/search?keyword=${value}`);
        setSearchedKeyword(value); // 결과 제목에 반영
        e.currentTarget.value = '';
      }
    }
  };

  // 데이터 가져오기
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['search', inputKeyword, selected, page],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search?keyword=${inputKeyword}&select=${selected}&page=${page}`
      ).then((res) => res.json()),
  });

  // 메인에서 키워드 검색해서 들어올때
  useEffect(() => {
    const newKeyword = params.get('keyword') || '';
    setSearchedKeyword(newKeyword);
  }, [params]);

  // data 상태 변경시 totalPage 계산
  useEffect(() => {
    // data 없으면 NaN이므로 0으로 초기화
    setTotalPage(Math.ceil(data?.total / 12) || 0);
  }, [data]);

  // 데이터 개수
  useEffect(() => {
    if (selected === 'all') {
      const vodNum = data?.data.filter(
        (item: Item) => item.source === 'vod'
      ).length;
      setVodCount(vodNum);

      const oaNum = data?.data.filter(
        (item: Item) => item.source === 'oaset'
      ).length;
      setOaCount(oaNum);
    }
  }, [data]);

  // 데이터분류
  const vodList = data?.data.filter((item: Item) => item.source === 'vod');
  const oaList = data?.data.filter((item: Item) => item.source === 'oaset');

  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <div className="max-w-[1160px] mx-auto ">
        <div className="px-[20px] pt-[80px] pb-[48px]">
          {isPending ? (
            <p>로딩 중입니다...</p>
          ) : isError ? (
            <p>에러 발생: {error.message}</p>
          ) : (
            <Title
              searchedKeyword={searchedKeyword}
              inputKeyword={inputKeyword}
              handleKeyUp={handleKeyUp}
              resultCount={data?.total}
            />
          )}
          <SearchCate
            selected={selected}
            setSelected={setSelected}
            resultCount={data?.total}
            vodCount={vodCount}
            oaCount={oaCount}
            plusCount={data?.total}
            interCount={data?.total}
          />
          {(selected === 'all' || selected === 'vod') && (
            <VodSearch selected={selected} vodCount={vodCount} data={vodList} />
          )}
          {(selected === 'all' || selected === 'oaset') && (
            <OasetSearch selected={selected} oaCount={oaCount} data={oaList} />
          )}
          {(selected === 'all' || selected === 'plus') && (
            <OaplusSearch plusCount={data?.total} plusList={oaList} />
          )}
          {(selected === 'all' || selected === 'interview') && (
            <InterviewSearch interCount={data?.total} interList={oaList} />
          )}
          {selected !== 'all' && data?.length > 0 && (
            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
          )}
        </div>
      </div>
    </main>
  );
}
