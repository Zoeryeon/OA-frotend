// app /components /search /titlet.sx
import { ordinaryArtist } from '@/app/components/fonts';

type TitleProps = {
  searchedKeyword: string;
  inputKeyword: string;
  setInputKeyword: (value: string) => void;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function Title({
  searchedKeyword,
  inputKeyword,
  setInputKeyword,
  handleKeyUp,
}: TitleProps) {
  return (
    <div className="pt-[64px] px-[64px]">
      <h3 className="text-[28px] font-semibold text-center">
        <strong className="text-point2 font-semibold">{searchedKeyword}</strong>
        에 대해 총 <strong className="text-point2 font-semibold">27</strong>
        개가 검색됐어요
      </h3>
      <div className="w-full h-[188px] bg-point1 max-md:fixed dark:bg-black dark:border-t-black py-[64px]">
        <div className="w-[calc(100%-160px)] max-w-[calc(1280px/2-160px)] mx-auto relative py-[10px] rounded-[15px] h-[60px] dark:bg-gray-600 shadow-[0px_2px_6px_rgba(0,0,0,0.15)]">
          <label className="relative px-[20px] flex items-center w-full h-[40px] gap-[10px]">
            <i
              className={`w-[24px] inline-flex items-center not-italic justify-center flex-wrap flex-row ${ordinaryArtist.className} before:content-['\\e90f'] before:text-[40px] before:text-gray-600 dark:before:text-point1`}
            ></i>
            <input
              type="search"
              placeholder="검색어를 입력해주세요"
              value={inputKeyword}
              onChange={(e) => setInputKeyword(e.target.value)}
              onKeyUp={handleKeyUp}
              className="text-[20px] font-medium shrink w-full border-0 pl-0 placeholder:text-[17px] placeholder:font-semibold placeholder:text-gray-500 placeholder:tracking-tight max-md:text-[18px] max-md:placeholder:text-[15px] "
            />
          </label>
        </div>
      </div>
    </div>
  );
}
