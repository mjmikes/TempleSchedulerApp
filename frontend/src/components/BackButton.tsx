import React from "react";

export const BackButton: React.FC = () => {
  return (
    <button
      className="flex overflow-hidden z-10 gap-2 justify-center items-center px-3 mt-7 ml-6 w-11 h-11 border border-solid bg-neutral-100 border-neutral-100 rounded-[32px]"
      aria-label="Go back"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ce2833fb9e128dcf7345d9aad7bc4e38305b0df5b219df916d0644bf9a8b6f2?placeholderIfAbsent=true&apiKey=30c280d5425d4f8283bc5b68e1911542"
        alt="Back"
        className="object-contain self-stretch my-auto w-5 aspect-square"
      />
    </button>
  );
};
