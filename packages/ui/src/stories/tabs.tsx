import { useState } from "react";

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  selectedTab: string;
  onChange?: (selectedTab: string) => void;
}

export const Tabs = ({ tabs, selectedTab, onChange }: TabsProps) => {
  return (
    <div className="relative w-48">
      <nav className="relative flex overflow-x-auto h-10 items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/10 rounded-3xl">
        <div
          className="absolute top-1 left-1 h-8 bg-primary rounded-3xl transition-all duration-300 ease-in-out"
          style={{
            width: `calc(100% / ${tabs.length} - 4px)`,
            transform: `translateX(${tabs.findIndex((tab) => tab.value === selectedTab) * 100}%)`,
          }}
        ></div>

        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            type="button"
            className={`relative flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-3xl outline-none transition-colors duration-300 ease-in-out z-10
              ${selectedTab === tab.value ? "text-white" : "hover:text-gray-800"}`}
            onClick={() => onChange && onChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
