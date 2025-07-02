// app /(main) /oatheme /oatheme.tsx

import MovieCounsel from '@/app/components/oatheme/MovieCounsel';
import MovieList from '@/app/components/oatheme/MovieList';
import Title from '@/app/components/oatheme/Title';

export default function Oatheme() {
  return (
    <main className="bg-point1 dark:bg-[#080808] pt-[80px]">
      <Title />
      <MovieList />
      <MovieCounsel />
    </main>
  );
}
