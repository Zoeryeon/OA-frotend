// app /(main) /watch /page.tsx
'use client';

import CateMenu from '@/app/components/watch/CateMenu';
import Counsel from '@/app/components/watch/Counsel';
import SubMenu from '@/app/components/watch/SubMenu';
import WatchList from '@/app/components/watch/WatchList';
import { useState } from 'react';

export default function watch() {
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  return (
    <main className="bg-point1">
      <div className="max-w-[1160px] mx-auto ">
        <CateMenu />
        <SubMenu
          isSingleColumn={isSingleColumn}
          setIsSingleColumn={setIsSingleColumn}
        />
        <WatchList isSingleColumn={isSingleColumn} />
        <Counsel />
      </div>
    </main>
  );
}
