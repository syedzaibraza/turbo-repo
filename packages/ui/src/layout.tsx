import { Button } from "./button";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

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
    <div className="relative block h-full bg-gray-175 lg:landscape:pr-[366px] xl:landscape:pr-[28%] 2xl:landscape:pr-[495px] grid-rows-[106px_1fr]">
      <Header />
      <main className="relative z-1">
        <div className="mx-auto max-w-full px-5 py-5 lg:max-w-[852px] xl:max-w-[1030px] xl:px-13.75 xl:pt-4 2xl:max-w-[1272px] 2xl:px-15 2xl:pt-4.5 pb-20 lg:pb-5 min-h-[calc(100vh_-_105px)]">
          {children}
        </div>
        {order.length ? (
          <div className="fixed bottom-0 left-0 z-10 w-full px-5 py-2.5 border-t shadow-cw-footer duration-300 lg:landscape:bottom-0 lg:landscape:hidden">
            <Button label="View Order" />
          </div>
        ) : (
          <ul
            className="flex justify-center w-full visible-xs visible-sm lg:hidden xl:hidden 2xl:hidden"
            style={{ position: "fixed", bottom: "20px", zIndex: 9999 }}
          >
            <li className="rounded-xl bg-gray-200 p-2 shadow-xl">About</li>
          </ul>
        )}
      </main>
      <Sidebar />
    </div>
  );
}
