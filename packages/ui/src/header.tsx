import React from "react";

export const Header = () => {
  return (
    <header className="shadow-xl sticky z-10 w-full overflow-x-hidden shadow-cw-layout  duration-300 lg:landscape:top-0 top-0">
      <div className="relative mx-auto flex h-15 max-w-full flex-nowrap items-center justify-center gap-5 overflow-hidden px-5 pb-2.5 pt-3.5 md:justify-between lg:max-w-[852px] xl:max-w-[1030px] xl:px-13.75  2xl:max-w-[1272px] 2xl:px-15">
        <h1 className="text-lg font-semibold ">
          Order
          <span className="text-primary"> X</span>
        </h1>
        {process.env.NEXT_PUBLIC_BASE_URL}
      </div>
    </header>
  );
};
