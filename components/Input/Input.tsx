"use client";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

type Variant = "password" | "text" | "email" | "number";

interface InputProps {
  variants: Variant;
  label: string;
}

export default function Input({ variants, label, ...props }: InputProps) {
  const [visible, setVisible] = useState(false);
  const handleTooglePassword = () => {
    setVisible(!visible);
  };
  return (
    <div className="flex flex-col gap-3 w-full">
      <label htmlFor={variants}>{label}</label>
      <div
        className="w-full relative"
      >
        <input
          className="w-full border border-gray-300 rounded-lg p-3.5 outline-none focus-within:border-blue-500 cursor-text"
          id={variants}
          type={
            variants === "password" ? (visible ? "text" : "password") : variants
          }
          {...props}
        />
        {variants === "password" && (
          <button
            type="button"
            onClick={handleTooglePassword}
            className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-600 cursor-pointer"
          >
            {visible ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}
