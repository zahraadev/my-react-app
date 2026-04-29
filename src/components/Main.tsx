import React from "react";

// تعريف البيانات اللي يحتاجها المكون من الأب
interface mainProps {
  isVisible: boolean;
  onFilp: () => void;
  text: string;
}

export default function Main({ isVisible, onFilp, text }: mainProps) {
  return (
    <button
      onClick={onFilp}
      // ستايل المربع (ألوان، حواف، حجم)
      className="py-10 px-12 bg-indigo-300 rounded-3xl text-white font-bold text-2xl shadow-lg transition-all hover:bg-indigo-400 min-w-[150px]"
    >
      {/* إذا الحالة true يظهر النص، إذا false يظهر علامة استفهام */}
      {isVisible ? text : "?"}
    </button>
  );
}