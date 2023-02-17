import React from "react";

export default function Chip() {
  return (
    <>
      <span className="px-2 py-2 rounded-full bg-blue-400 font-medium text-sm flex align-center w-max cursor-pointer active:bg-blue-300 transition duration-300 ease text-black">
        UI Bug
      </span>
      <span className="px-4 py-2 rounded-full bg-blue-400 font-medium text-sm flex align-center w-max cursor-pointer active:bg-blue-300 transition duration-300 ease text-black">
        P1
      </span>
    </>
  );
}
