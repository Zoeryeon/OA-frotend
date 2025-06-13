// app /components /watch /SubMenu.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const sortOptionList = [
  {
    name: '오아추천순',
  },
  {
    name: '인기순',
  },
  {
    name: '가격낮은순',
  },
  {
    name: '최신순',
  },
];

export default function SubMenu() {
  const [sortType, setSortType] = useState(false);

  return (
    <div className="flex px-[20px] pb-[80px] items-center justify-between w-full">
      <div>
        <ol className="flex">
          <li>
            <Link href="#">전체유형</Link>
          </li>
          <li>
            <Link href="#">VOD</Link>
          </li>
          <li>
            <Link href="#">OA SET</Link>
          </li>
        </ol>
      </div>
      <div>
        <select>
          {sortOptionList.map((item, i) => (
            <option key={i} value="">
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
