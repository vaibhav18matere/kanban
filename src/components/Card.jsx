import React from "react";
import { CiCircleMore } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import Chip from "./Chip";

export const Card = () => {
  return (
    <>
      <div className="max-w-sm mb-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Ticket Number
          </h5>
          <Chip />
          <CiCircleMore className="text-xl font-extrabold text-blue-600 hover:underline dark:text-blue-500 cursor-pointer" />
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-1 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://picsum.photos/200/300"
                    alt="Neil"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Task description will go here Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Placeat, sapiente tempore iste
                    facere eligendi ipsam. Maiores praesentium officiis quae in.
                    Sed expedita harum facilis tempore distinctio consequatur
                    tempora quos itaque.
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <AiOutlineClockCircle className="cursor-pointer" />
                  <FaTasks className="ml-3 cursor-pointer" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
