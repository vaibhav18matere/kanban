import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Card } from "./Card";

export default function Board() {
  return (
    <>
      <div className="min-w-fit">
        <div className="flex">
          <p className="font-bold flex align-middle">To Do</p>
          <FiMoreHorizontal />
          <span className="text-zinc-700">2</span>
        </div>
        <div className="board_cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
