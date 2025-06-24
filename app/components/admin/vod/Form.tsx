// components/ admin/ vod/ Form.tsx
'use client';

export default function Form({
  handleSubmit,
  genreSelected,
  setGenreSelected,
  ageSelected,
  setAgeSelected,
  files,
  handleRemoveFile,
  totalSize,
  handleFileUpload,
}: {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  genreSelected: string;
  setGenreSelected: (value: string) => void;
  ageSelected: string;
  setAgeSelected: (age: string) => void;
  files: any[];
  handleRemoveFile: (index: number) => void;
  totalSize: number;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center pb-[30px]">
        <div className="flex flex-col w-full">
          <label className="pr-[20px] pb-[10px]">장르</label>
          <select
            required
            value={genreSelected}
            onChange={(e) => setGenreSelected(e.target.value)}
            className={`border  py-[10px] px-[20px] rounded-[5px] ${
              genreSelected == ''
                ? 'text-gray-400 border-gray-400'
                : 'text-gray-600 border-point2'
            }`}
          >
            <option value="" disabled>
              장르를 선택하세요
            </option>
            <option value="1">뮤지컬</option>
            <option value="2">연극</option>
            <option value="3">무용</option>
            <option value="4">음악</option>
            <option value="5">인터뷰</option>
          </select>
        </div>
        <div className="flex flex-col w-full pl-[30px]">
          <label className="pr-[20px] pb-[10px]">연령</label>
          <select
            required
            value={ageSelected}
            onChange={(e) => setAgeSelected(e.target.value)}
            className={`border py-[10px] px-[20px] rounded-[5px] ${
              ageSelected == ''
                ? 'text-gray-400 border-gray-400'
                : 'text-gray-600 border-point2'
            }`}
          >
            <option value="" disabled>
              연령을 선택하세요
            </option>
            <option value="1">All</option>
            <option value="2">12</option>
            <option value="3">15</option>
            <option value="4">없음</option>
          </select>
        </div>
        <div className="flex flex-col w-full pl-[30px]">
          <label className="pr-[20px] pb-[5px]">가격</label>
          <div className="flex items-center">
            <label className="radio pr-[10px]">
              <input
                type="radio"
                name="price"
                value="1"
                className="sr-only"
                defaultChecked
                onChange={handleChange}
              />
              무료
            </label>
            <label className="radio">
              <input
                type="radio"
                name="price"
                value="2"
                className="sr-only"
                onChange={handleChange}
              />
              유료
              <input
                type="text"
                placeholder="가격을 입력하세요"
                className="w-[140px] border-gray-400 rounded-[5px]"
              />
              WoW~
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pb-[30px]">
        <label className="w-[80px]">해시태그</label>
        <input
          type="text"
          placeholder="해시태그를 입력하세요 ex)#뮤지컬 #트렌드 #일하는방식"
          className=" w-full placeholder:text-[12px]"
        />
      </div>
      <div className="flex items-center justify-between pb-[30px]">
        <label className="w-[80px]">제목</label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className=" w-full placeholder:text-[12px]"
        />
      </div>
      <div className="flex items-center justify-between pb-[30px]">
        <label className="w-[80px]">요약</label>
        <input
          type="text"
          placeholder="한 줄 소개를 입력하세요"
          className="w-full placeholder:text-[12px]"
        />
      </div>
      <div>
        <ul className="w-full text-[14px] leading-[28px]">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex w-full h-[40px] px-[16px] bg-point1 rounded-[10px] mb-[10px] relative items-center justify-between"
            >
              <span className="overflow-hidden whitespace-nowrap ">
                {file.name}
              </span>
              <div className="shrink-0">
                <span className="text-[#999] pr-[15px] pl-[10px]">
                  {(file.size / 1024).toFixed(1)}KB
                </span>
                <button
                  type="button"
                  className="pr-[8px] h-[40px]"
                  onClick={() => handleRemoveFile(index)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
        <label
          htmlFor="fUpload"
          className="h-[42px] block pr-[40px] cursor-pointer hover:underline"
        >
          + 썸네일 첨부하기 -
          {totalSize ? (totalSize / 1024).toFixed(1) : ' 0.0'}KB/ 15MB
        </label>
        <input
          id="fUpload"
          type="file"
          multiple
          className="absolute w-0 h-0 p-0 block"
          onChange={handleFileUpload}
        />
      </div>
      <div>
        <button type="submit">vod 등록하기</button>
      </div>
    </form>
  );
}
