import { Button } from "./button";

export const Sidebar = () => {
  return (
    <aside className="fixed z-20 row-span-2 shadow-2xl border-l h-full w-full overflow-hidden lg:landscape:flex-start flex justify-end lg:landscape:flex-col lg:landscape:justify-start right-0 top-0 lg:landscape:shadow-cw-layout transition-transform duration-300 lg:landscape:translate-x-0 lg:landscape:translate-y-0 lg:landscape:duration-0 lg:landscape:w-[366px] xl:landscape:w-[28%] 2xl:landscape:w-[495px] translate-y-[120%]">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-4 py-4">
          <h2 className="text-lg font-semibold">Panel title</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div>Your content goes here...</div>
        </div>

        <div className="flex justify-center p-4">
          <Button label="Pre-Order Pickup" />
        </div>
      </div>
    </aside>
  );
};
