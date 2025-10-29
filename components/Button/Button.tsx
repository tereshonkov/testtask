"use client";
export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[320px] h-[51px] rounded-2xl bg-blue-700 p-4 flex justify-center items-center text-neutral-900 font-bold text-2xl hover:bg-blue-600 cursor-pointer mt-5">{children}</div>
  )
}
