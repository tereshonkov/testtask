"use client";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

type Variant = "password" | "text" | "email" | "number";

interface InputProps {
  variants: Variant;
  label: string;
  clearable?: boolean;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

export default function Input({ variants, label, clearable, error, value, onChange, onBlur, ...props }: InputProps) {
  const [visible, setVisible] = useState(false);
  const handleTooglePassword = () => {
    setVisible(!visible);
  };

  const handleClear = () => {
    if (onChange) onChange("");
  };
  const showClear = clearable && !!value;
  return (
    <div className="flex flex-col gap-3 w-full">
      <label htmlFor={variants}>{label}</label>
      <div className="w-full relative">
        <input
          className={`w-full border ${error ? "border-red-500" : "border-gray-300"} rounded-lg p-3.5 outline-none focus-within:border-blue-500 cursor-text`}
          id={variants}
          onBlur={onBlur}
          onChange={(e) => onChange?.(e.target.value)}
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
        {showClear && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute top-1/2 -translate-y-1/2 right-10 text-white cursor-pointer"
          >
            x
          </button>
        )}
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
