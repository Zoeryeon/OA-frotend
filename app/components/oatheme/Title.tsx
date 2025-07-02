// app /components /oatheme /Title.tsx

export default function Title() {
  return (
    <div className="bg-[linear-gradient(0deg,#e4e4f0,rgba(228,228,240,0))]">
      <div className="max-w-[1152px] py-[64px] text-center mx-auto px-[20px] relative">
        <h3 className="text-[30px] font-light max-md:text-[28px]">
          OA THEME{' '}
          <span className="inline-block whitespace-nowrap">THEATRE</span>
        </h3>
        <p className="mt-[20px]">
          오아라이브에서만 즐길 수 있는{' '}
          <span className="inline-block">당신만의 전용극장</span>
        </p>
        <img
          src="/images/oaThemeVisual_220801_1.png"
          alt="구름"
          className="w-[80%] absolute left-1/2 top-1/2 transform -translate-x-1/2 max-md:hidden"
        />
      </div>
      <img
        src="/images/oaThemeVisual_220801_0.png"
        alt="오똄극장"
        className="w-full max-md:hidden"
      />
      <img
        src="/images/oaThemeVisual_220801_m.png"
        alt="오뗌극장_m"
        className="hidden max-md:flex"
      />
    </div>
  );
}
