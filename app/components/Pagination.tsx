// app/ui/Pagination.tsx

import { ordinaryArtist } from '@/app/components/fonts';

export default function Pagination({
  page,
  setPage,
  totalPage,
}: {
  totalPage: number;
  setPage: (num: number) => void;
  page: number;
}) {
  return (
    <div className="flex mt-[64px] justify-center">
      <button
        type="button"
        onClick={() => setPage(page - 1)}
        className={`btn leading-[28px] border-0 px-0 icon-pageL ${ordinaryArtist.className} before:text-[40px] before:text-gray-600 dark:before:text-point1`}
        disabled={page === 1}
      ></button>

      <p className="flex items-center h-[40px] text-[18px] dark:text-point1">
        <strong className="text-[30px] ">{page}</strong> / <em>{totalPage}</em>
      </p>

      <button
        type="button"
        onClick={() => setPage(page + 1)}
        className={`btn leading-[28px] border-0 px-0 icon-pageR ${ordinaryArtist.className} before:text-[40px] before:text-gray-600 dark:before:text-point1`}
        disabled={page === totalPage}
      ></button>
    </div>
  );
}
