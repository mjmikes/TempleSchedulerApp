"use client";

import React from "react";

export const StatusBar: React.FC = () => {
  return (
    <header className="pt-5 w-full bg-white h-[39px]">
      <div className="flex justify-between items-center w-full">
        <time className="flex-1 shrink gap-2.5 self-stretch pr-1.5 pl-4 my-auto text-lg leading-none text-center text-black whitespace-nowrap basis-0 font-[590]">
          9:41
        </time>
        <div className="flex shrink-0 self-stretch my-auto h-2.5 w-[124px]" />
        <div className="flex flex-1 shrink gap-2 justify-center items-center self-stretch pr-4 pl-1.5 my-auto basis-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2daff01164d1f56f28b0d1cd21000ea5c0857de85b1f08ac1c20b2912a0e0d43?placeholderIfAbsent=true&apiKey=30c280d5425d4f8283bc5b68e1911542"
            alt="Signal strength"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.58] w-[19px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcdd998f43ab4d9083b9bd1ee1889ecac086abef97cd5ce992a95b24ded9eae4?placeholderIfAbsent=true&apiKey=30c280d5425d4f8283bc5b68e1911542"
            alt="Battery level"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.42] w-[17px]"
          />
        </div>
      </div>
    </header>
  );
};
