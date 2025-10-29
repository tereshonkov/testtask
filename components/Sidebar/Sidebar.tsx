"use client";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

type Item = {
  label: string;
  subItems?: Item[];
};

interface SliderProps {
  open: boolean;
  onClose: () => void;
  items: Item[];
}

export default function Sidebar({ items, open, onClose }: SliderProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose}>
      <div
        className={`fixed right-0 top-0 h-full w-[30vw]  shadow-lg z-50 border border-white  rounded-l-2xl transform transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
          <ul className="flex flex-col gap-3">
            {items &&
              items?.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 flex flex-col justify-between p-2 cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex justify-between">
                    {" "}
                    {open && item.label}
                    {item.subItems ? (
                      openItems[index] ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowForward />
                      )
                    ) : null}
                  </div>
                  {openItems[index] && item.subItems && (
                    <ul className="mt-4 ml-4">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="mb-3">
                          {subItem.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
