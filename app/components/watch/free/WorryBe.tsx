// app /components /watch /free /WorryBe.tsx

export default function WorryBe() {
  return (
    <div className="pt-[120px] bg-[#ededed] h-[330px] overflow-hidden pb-[290px] relative -ml-[50vw] -mr-[50vw]">
      <div className="text-center">
        <img
          src="/images/free_visual_01.webp"
          alt="free"
          style={{
            animation: 'spin 30s linear infinite',
          }}
        />
      </div>
      <div className="absolute top-[80%] left-[50%] -bottom-[50%] -translate-[50%] w-[238px] h-[273px] ">
        <img src="/images/free_visual_02.webp" alt="free2" />
      </div>
    </div>
  );
}
