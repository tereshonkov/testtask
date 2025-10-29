"use client";
import { useEffect, useState } from "react";

type Variant = "success" | "error" | "info" | "wraning";

const bg = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  wraning: "bg-yellow-500",
};

interface ToastProps {
  type: Variant;
  message: string;
  duration?: number;
  closable?: boolean;
  onClose?: () => void;
}

export default function Toast({
  type,
  message,
  duration = 3000,
  closable,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    if (!visible && onClose) onClose();
  }, [visible, onClose]);
  return (
    <div
      className={`${bg[type]} fixed bottom-5 right-5 rounded-2xl text-white shadow-2xl transition-all duration-300`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="p-4">{message}</span>
        {closable && (
          <button className="p-4 text-white hover:opacity-75" onClick={onClose}>
            &times;
          </button>
        )}
      </div>
    </div>
  );
}
