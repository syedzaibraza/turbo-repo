import { Button } from "./button";

export function Layout({ children }: { children: React.ReactNode }) {
  const order = [
    {
      id: 1,
      name: "Pizza",
      price: 10,
      quantity: 2,
    },
  ];
  return (
    <div className="ui-relative ui-block ui-h-full ui-bg-gray-175 lg:landscape:ui-pr-[366px] xl:landscape:ui-pr-[28%] 2xl:landscape:ui-pr-[495px] ui-grid-rows-[106px_1fr]">
      <header className="ui-sticky ui-z-10 ui-w-full ui-overflow-x-hidden ui-bg-white ui-shadow-cw-layout  ui-duration-300 lg:landscape:ui-top-0 ui-top-0">
        <div className="ui-relative ui-mx-auto ui-flex ui-h-15 ui-max-w-full ui-flex-nowrap ui-items-center ui-justify-center ui-gap-5 ui-overflow-hidden ui-px-5 ui-pb-2.5 ui-pt-3.5 md:ui-justify-between lg:ui-max-w-[852px] xl:ui-max-w-[1030px] xl:ui-px-13.75  2xl:ui-max-w-[1272px] 2xl:ui-px-15">
          <h1 className="ui-text-lg ui-font-semibold ui-text-gray-900">
            Order X
          </h1>
        </div>
      </header>

      <aside className="ui-fixed ui-z-20 ui-row-span-2 ui-h-full ui-w-full ui-overflow-hidden lg:landscape:ui-flex-start ui-flex ui-justify-end lg:landscape:ui-flex-col lg:landscape:ui-justify-start ui-right-0 ui-top-0 lg:landscape:ui-shadow-cw-layout ui-transition-transform ui-duration-300 lg:landscape:ui-translate-x-0 lg:landscape:ui-translate-y-0 lg:landscape:ui-duration-0 lg:landscape:ui-w-[366px] xl:landscape:ui-w-[28%] 2xl:landscape:ui-w-[495px] ui-translate-y-[120%]">
        <div className="ui-flex ui-h-full ui-flex-col">
          <div className="ui-flex ui-items-center ui-justify-between ui-px-4 ui-py-4">
            <h2 className="ui-text-lg ui-font-semibold ui-text-gray-900">
              Panel title
            </h2>
          </div>

          <div className="ui-flex-1 ui-overflow-y-auto ui-p-4">
            <p>Your content goes here...</p>
          </div>

          <div className="ui-flex ui-justify-center ui-p-4">
            <button className="ui-rounded-xl ui-w-full ui-bg-red-600 ui-px-3 ui-py-2 ui-text-sm ui-font-semibold ui-text-white ui-shadow-sm hover:ui-bg-red-700">
              Pre-Order Pickup
            </button>
          </div>
        </div>
      </aside>
      <main className="ui-relative ui-z-1 ui-bg-white">
        <div className="ui-mx-auto ui-max-w-full ui-px-5 ui-py-5 lg:ui-max-w-[852px] xl:ui-max-w-[1030px] xl:ui-px-13.75 xl:ui-pt-4 2xl:ui-max-w-[1272px] 2xl:ui-px-15 2xl:ui-pt-4.5 ui-pb-20 lg:ui-pb-5 ui-min-h-[calc(100vh_-_105px)]">
          {children}
        </div>
        {order.length ? (
          <div className="ui-fixed ui-bottom-0 ui-left-0 ui-z-10 ui-w-full ui-bg-white ui-px-5 ui-py-2.5 ui-border-t ui-shadow-cw-footer ui-duration-300 lg:landscape:ui-bottom-0 lg:landscape:ui-hidden">
            <Button label="View Order" />
          </div>
        ) : (
          <ul
            className="ui-flex ui-justify-center ui-w-full visible-xs visible-sm lg:ui-hidden xl:ui-hidden 2xl:ui-hidden"
            style={{ position: "fixed", bottom: "20px", zIndex: 9999 }}
          >
            <li className="ui-rounded-xl ui-bg-gray-200 ui-p-2 ui-shadow-xl">
              About
            </li>
          </ul>
        )}
      </main>
    </div>
  );
}
