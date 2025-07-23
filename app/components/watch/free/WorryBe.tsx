// app /components /watch /free /WorryBe.tsx

export default function WorryBe() {
  return (
    <div className="pt-[120px] bg-[#ededed] h-0 overflow-hidden pb-[290px] relative text-center  max-md:pb-[25%] dark:bg-[#121212]">
      <img
        src="/images/free_visual_01.webp"
        alt="free"
        className="animate-[spin_30s_linear_infinite] max-md:w-[80%] dark:filter dark:invert"
      />
      <div className="absolute top-auto left-[50%] -bottom-[15%] -translate-x-[50%] w-[238px] h-[273px] max-md:w-[calc(100%/4.5)] max-md:pb-[calc(114.7%/4.5)] max-md:h-0">
        <img src="/images/free_visual_02.webp" alt="free2" />
      </div>
    </div>
  );
}
