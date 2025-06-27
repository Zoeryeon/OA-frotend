// app/ (main)/ watch/ vod/ [id]/ edit/ VodEdit.tsx
'use client';

import EditForm from '@/app/components/admin/vod/EditForm';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';

type Data = {
  category: string;
  age: string;
  priceType: string;
  price: string;
  keyword: string;
  summary: string;
  title: string;
  img: string;
};

export default function VodEdit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [genreSelected, setGenreSelected] = useState('');
  const [ageSelected, setAgeSelected] = useState('');
  const router = useRouter();

  // vod 조회요청
  const {
    data: vodData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['vod'],
    queryFn: () =>
      fetch(`http://localhost:3001/vod/${id}`).then((res) => res.json()),
  });

  // vod 수정요청
  const { mutate } = useMutation({
    // 자동완성에 나오는 타입을 복붙
    mutationFn: (data: Partial<Data>) => {
      return fetch(`http://localhost:3001/vod/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    },
  });

  // 폼 제출 핸들러 추가
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 제출 동작 방지
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    mutate(data);
    router.push('/watch');
  };

  // 숫자를 문자로 바꾸기
  useEffect(() => {
    if (vodData) {
      setGenreSelected(String(vodData[0].category_id));

      // 연령 처리
      if (vodData[0].age === 'All') {
        setAgeSelected('1');
      } else if (vodData[0].age === '12') {
        setAgeSelected('2');
      } else if (vodData[0].age === '15') {
        setAgeSelected('3');
      } else if (vodData[0].age === null) {
        setAgeSelected('4');
      }
    }
  }, [vodData]);

  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <div className="max-w-[1160px] mx-auto ">
        <div className="pt-[155px] px-[80px] pb-[80px] items-center w-full max-md:px-[20px] max-md:flex-col max-md:pt-[153px] max-md:pb-[48px] max-sm:pt-[145px] max-sm:pb-[40px]">
          <h4 className="text-[28px] font-bold pb-[50px]">vod 수정하기{id}</h4>
          <EditForm
            id={id}
            vodData={vodData}
            handleSubmit={handleSubmit}
            genreSelected={genreSelected}
            setGenreSelected={setGenreSelected}
            ageSelected={ageSelected}
            setAgeSelected={setAgeSelected}
          />
        </div>
      </div>
    </main>
  );
}
