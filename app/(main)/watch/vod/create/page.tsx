// app/ (main)/ watch/ vod/ create/ Create.tsx
'use client';

import Form from '@/app/components/admin/vod/Form';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

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

export default function Create() {
  const [genreSelected, setGenreSelected] = useState('');
  const [ageSelected, setAgeSelected] = useState('');

  const { mutate } = useMutation({
    // 자동완성에 나오는 user타입을 복붙
    mutationFn: (data: Partial<Data>) => {
      return fetch('http://localhost:3001/vod', {
        method: 'POST',
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
  };

  return (
    <main className="bg-point1 dark:bg-[#080808]">
      <div className="max-w-[1160px] mx-auto ">
        <div className="pt-[155px] px-[80px] pb-[80px] items-center w-full max-md:px-[20px] max-md:flex-col max-md:pt-[153px] max-md:pb-[48px] max-sm:pt-[145px] max-sm:pb-[40px]">
          <h4 className="text-[28px] font-bold pb-[50px]">vod 작성하기</h4>
          <Form
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
