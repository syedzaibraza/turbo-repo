"use client";
import { useState } from "react";
import { Button } from "./button";

export const Sidebar = () => {
  const [isPickup, setIsPickup] = useState(true);
  return (
    <aside className="fixed z-20 row-span-2 shadow-2xl h-full w-full overflow-hidden lg:landscape:flex-start flex justify-end lg:landscape:flex-col lg:landscape:justify-start right-0 top-0 lg:landscape:shadow-cw-layout transition-transform duration-300 lg:landscape:translate-x-0 lg:landscape:translate-y-0 lg:landscape:duration-0 lg:landscape:w-[366px] xl:landscape:w-[28%] 2xl:landscape:w-[495px] translate-y-[120%]">
      <div className="flex h-full flex-col">
        <div className="flex justify-end w-full px-4 py-4">
          <label className="relative flex w-48 h-10 bg-gray-300/50 rounded-full cursor-pointer select-none p-1">
            {/* Hidden Checkbox */}
            <input
              type="checkbox"
              className="peer hidden"
              checked={!isPickup}
              onChange={() => setIsPickup(!isPickup)}
            />

            {/* Moving background */}
            <div
              className={`absolute w-[47%] h-[80%] bg-primary rounded-full transition-all duration-300 flex items-center justify-center shadow-md ${
                isPickup ? "left-1" : "left-[51%]"
              }`}
            ></div>

            {/* Pickup Label */}
            <span
              className={`relative w-1/2 text-center flex items-center justify-center transition-colors duration-300 ${
                isPickup ? "text-white" : "text-black"
              }`}
            >
              Pickup
            </span>

            {/* Delivery Label */}
            <span
              className={`relative w-1/2 text-center flex items-center justify-center transition-colors duration-300 ${
                isPickup ? "text-black" : "text-white"
              }`}
            >
              Delivery
            </span>
          </label>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div>Your individual Envs: {process.env.NEXT_PUBLIC_BASE_URL}</div>
        </div>

        <div className="flex justify-center p-4 bg-white">
          <Button
            label="Pre-Order Pickup"
            loading={false}
            disabled={false}
            color="primary"
          />
        </div>
      </div>
    </aside>
  );
};
