import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function AddCard(props) {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      {showEdit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (props.onSubmit) props.onSubmit();
          }}
        >
          <input
            className="shadow border rounded py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="new-task"
            type="text"
            autoFocus
            defaultValue={props.text}
            placeholder={props.placeholder || "enter task title"}
          />
          <div className="flex items-center justify-start">
            <button className="p-2 m-2 rounded-sm bg-blue-400 text-black text-sm cursor-pointer active:bg-blue-300 transition duration-300 ease">
              {props.buttonText || "Add task"}
            </button>
            <AiFillCloseCircle
              className="text-xl font-extrabold text-white cursor-pointer"
              onClick={() => setShowEdit(false)}
            />
          </div>
        </form>
      ) : (
        <button
          className="p-2 m-2 rounded-sm bg-blue-400 text-black text-sm cursor-pointer active:bg-blue-300 transition duration-300 ease"
          onClick={() => setShowEdit(true)}
        >
          {props.text || "Add new task"}
        </button>
      )}
    </>
  );
}
