import React from "react";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsBell, BsFillKanbanFill } from "react-icons/bs";
import { GiHelp } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <a href="/">
          <div className="flex gap-1 items-center justify-center">
            <BsFillKanbanFill className="text-3xl text-blue-400" />
            <span className="text-xl text-blue-400 font-medium tracking-widest ml-4">
              Kanban
            </span>
          </div>
        </a>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form>
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none"
              />
              <AiOutlineClose className="text-xl cursor-pointer" />
            </div>
            <button className="h-10 w-10 flex items-center justify-center bg-zinc-800">
              <AiOutlineSearch />
            </button>
          </div>
        </form>
      </div>
      <div className="flex gap-5 items-center text-xl cursor-pointer">
        <AiOutlineSetting />
        <GiHelp />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-500 rounded-full px-1 cursor-pointer">
            8
          </span>
        </div>
        <img
          src="https://picsum.photos/200/300"
          className="w-9 h-9 rounded-full"
          alt="profile-logo"
        />
      </div>
    </div>
  );
}
