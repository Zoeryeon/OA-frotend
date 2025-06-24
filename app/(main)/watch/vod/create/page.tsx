// app/ (main)/ watch/ vod/ create/ Create.tsx
'use client';

import Form from '@/app/components/admin/vod/Form';
import { useState } from 'react';

export default function Create() {
  const [genreSelected, setGenreSelected] = useState('');
  const [ageSelected, setAgeSelected] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [totalSize, setTotalSize] = useState(0);

  // 폼 제출 핸들러 추가
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 제출 동작 방지
    alert('메일 전송이 완료되었습니다.'); // 알림 표시

    // 폼 리셋 - 모든 입력 필드 초기화
    event.currentTarget.reset();
    setGenreSelected('');
    setAgeSelected('');
    setFiles([]);
    setTotalSize(0);
  };

  //파일 선택하여 ul로 나타내기
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(event.target.files || []);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);

    // 파일 크기 합산
    const newTotalSize = uploadedFiles.reduce(
      (sum, file) => sum + file.size,
      totalSize
    );
    setTotalSize(newTotalSize);
  };

  // x버튼 누르면 파일 삭제
  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      const newTotalSize = updatedFiles.reduce(
        (sum, file) => sum + file.size,
        0
      );
      setTotalSize(newTotalSize);
      return updatedFiles;
    });
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
            files={files}
            handleRemoveFile={handleRemoveFile}
            totalSize={totalSize}
            handleFileUpload={handleFileUpload}
          />
        </div>
      </div>
    </main>
  );
}
