// app /components /Chatbot.tsx
'use client';

import { ordinaryArtist } from '@/app/components/fonts';
import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  // 챗봇 켜고 끄기
  function toggleChatbot() {
    if (isOpen) {
      setMessages([]);
      setInput('');
    }
    setIsOpen(!isOpen);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!input.trim()) return;

    setMessages((prev) => [...prev, `${input}`]);
    setInput('');

    // ai 답변 가져오기
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FASTAPI_URL}/chat`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await response.json();
      console.log(data.response);
      setMessages((prev) => [...prev, `${data.response}`]);
    } catch (error) {
      setMessages((prev) => [...prev, '오류']);
      console.error('api요청실패:', error);
    }
    setInput('');
  }

  return (
    <div className="flex right-[10px] z-10 fixed bottom-[80px]">
      {/* 모든 페이지에 뜨는 버튼 */}
      <button
        type="button"
        onClick={toggleChatbot}
        className={`w-auto h-auto py-[10px] px-[14px] rounded-full flex flex-col items-center text-[10px] text-point1 leading-3 bg-point2`}
      >
        <i
          className={`not-italic icon-chat ${ordinaryArtist.className} before:text-[28px] before:leading-4 before:text-point1  before:font-medium dark:before:text-point1`}
        ></i>
        챗봇
      </button>

      {isOpen && (
        <div className="fixed bottom-[80px] right-[10px] max-w-[400px] h-[500px] bg-point1 border border-gray-400 rounded-[20px] w-full z-60 shadow-[0px_2px_6px_rgba(0,0,0,0.18) max-sm:max-w-[290px] max-sm:h-[450px] dark:bg-[#080808] dark:border-gray-600 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.3)]">
          <div className="overflow-auto px-[20px] h-[calc(100%-70px)] scroll-w-[5px] max-sm:px-[14px] max-sm:h-[calc(100%-60px)]">
            <div className="fixed flex h-[60px] pt-[20px] items-center gap-[150px] bg-point1 max-sm:gap-[94px] max-sm:h-[40px] max-sm:pt-[14px]">
              <h2 className="text-[20px] font-bold max-sm:text-[16px] dark:text-point1">
                무엇을 도와드릴까요?
              </h2>
              <button
                onClick={toggleChatbot}
                className="relative opacity-50 hover:opacity-90 dark:opacity-60"
              >
                <div className="w-[25px] max-sm:w-[21px]">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    href="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100%"
                    viewBox="0 0 22.678 22.632"
                    enableBackground="new 0 0 22.678 22.632"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="var(--color-point2)"
                      d="M11.586,0.008c-7.5-0.332-14.125,10.498-10.625,16.83c2.5,4.668,7.723,6.4,12.125,5.609 c6.167-1.109,11.143-10.605,9.143-16.105C20.729,2.842,14.919,0.002,11.586,0.008"
                    ></path>
                  </svg>
                </div>
                <div className="absolute left-[8px] top-[2px] text-point1 max-sm:text-[12px] max-sm:left-[6px] max-sm:top-[2px] dark:text-gray-600">
                  X
                </div>
              </button>
            </div>
            <div className="flex flex-col items-end mb-[10px] pt-[70px] max-sm:pt-[44px]">
              {messages.map((msg, i) => (
                <p
                  key={i}
                  className={`whitespace-pre-line  max-sm:text-[14px] ${
                    i % 2 === 0
                      ? 'mb-[10px] border border-point2 rounded-[12px] px-[8px] py-[3px] ml-[18px] max-sm:mb-[6px] dark:text-point1'
                      : 'mb-[22px] w-full pr-[20px] max-sm:mb-[18px] dark:text-point1'
                  }`}
                >
                  {msg}
                </p>
              ))}
            </div>
          </div>
          <form className="absolute bottom-[10px] left-0 w-full px-[24px] justify-between max-sm:bottom-[8px] max-sm:px-[14px]">
            <div className="flex items-center border h-[50px] border-gray-400 rounded-[20px] pr-[10px] max-sm:h-[40px] max-sm:rounded-[14px] ">
              <input
                className="w-full border-0 max-sm:text-[14px] max-sm:placeholder:text-[14px] dark:text-point1"
                type="text"
                placeholder="메세지를 입력하세요"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className={`py-[4px] rounded-full -rotate-[90deg] transition-transform ${
                  input.trim()
                    ? 'bg-point2'
                    : 'bg-gray-400 cursor-default dark:bg-gray-600'
                }`}
                onClick={handleSubmit}
              >
                <i
                  className={`not-italic icon-send px-[4px] ${ordinaryArtist.className} before:text-[18px] before:leading-6 before:text-point1  before:font-medium dark:before:text-gray-400 max-sm:before:text-[14px] max-sm:before:leading-1`}
                ></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
