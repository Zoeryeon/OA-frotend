// app /(main) /oaset /oaset.tsx
'use client';

import CateMenu from '@/app/components/oaset/CateMenu';
import Counsel from '@/app/components/oaset/Counsel';
import OasetList from '@/app/components/oaset/OasetList';
import SubMenu from '@/app/components/oaset/SubMenu';
import { useState } from 'react';

export default function oaset() {
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  return (
    <main className="bg-point1">
      <div className="max-w-[1160px] mx-auto ">
        <CateMenu />
        <SubMenu
          isSingleColumn={isSingleColumn}
          setIsSingleColumn={setIsSingleColumn}
        />
        <OasetList isSingleColumn={isSingleColumn} />
        <Counsel />
      </div>
    </main>
  );
}
