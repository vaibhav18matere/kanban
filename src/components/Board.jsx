import React from "react";
import { CiCircleMore } from "react-icons/ci";
import { Card } from "./Card";
import AddCard from "./AddCard";

export default function Board() {
  return (
    <>
      <div className="min-w-fit">
        <div className="flex gap-5 items-center justify-end text-xl">
          <p className="font-bold flex align-middle">To Do</p>
          <span>2</span>
          <CiCircleMore className="text-xl cursor-pointer" />
        </div>
        <div className="mt-2">
          <Card />
          <Card />
          <AddCard text="Add new task" placeholder="task title" />
        </div>
      </div>
    </>
  );
}
