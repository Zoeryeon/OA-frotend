// app /components /watch /free /WorryBe.tsx

export default function WorryBe() {
  return (
    <div className="pt-[120px] bg-[#ededed] h-[330px] overflow-hidden pb-[290px] relative max-md:pb-[25%] max-md:pt-[140px] text-center">
      <img
        src="/images/free_visual_01.webp"
        alt="free"
        className="animate-[spin_30s_linear_infinite] max-md:w-[80%]"
      />
      <div className="absolute top-[45%] left-[50%] -bottom-[50%] -translate-x-[50%] w-[238px] h-[273px] max-md:w-[calc(100% / 4.5)] max-md:-bottom-[20%]">
        <img src="/images/free_visual_02.webp" alt="free2" />
      </div>
    </div>
  );
}
