"use client";
import { useState } from "react";
import { Button } from "./button.js";
import { Tabs } from "./stories/tabs.js";

export const Sidebar = () => {
  const [state, setState] = useState("pickup");
  return (
    <aside className="fixed z-20 row-span-2 shadow-2xl h-full w-full overflow-hidden lg:landscape:flex-start flex justify-end lg:landscape:flex-col lg:landscape:justify-start right-0 top-0 lg:landscape:shadow-cw-layout transition-transform duration-300 lg:landscape:translate-x-0 lg:landscape:translate-y-0 lg:landscape:duration-0 lg:landscape:w-[366px] xl:landscape:w-[28%] 2xl:landscape:w-[495px] translate-y-[120%]">
      <div className="flex h-full flex-col">
        <div className="flex justify-end w-full px-4 py-4">
          <Tabs
            tabs={[
              { label: "Pickup", value: "pickup" },
              { label: "Delivery", value: "delivery" },
            ]}
            selectedTab={state}
            onChange={(selectedTab) => setState(selectedTab)}
          />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div>Your individual Envs: {process.env.NEXT_PUBLIC_BASE_URL}</div>
          {state === "pickup" && (
            <div>
              <div className="text-lg font-bold">Pickup</div>
              <div className="text-sm">Select a store for pickup</div>
            </div>
          )}
          {state === "delivery" && (
            <div>
              <div className="text-lg font-bold">Delivery</div>
              <div className="text-sm">Select a store for delivery</div>
            </div>
          )}
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
