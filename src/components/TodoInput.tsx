import React, { useState } from "react";

interface TodoInputProps {
  onAdd: (name: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, settext] = useState("");

  const handleAddClick = () => {
    if (text.trim() !== "") {
      onAdd(text);
      settext(""); // تصفير الحقل بعد الإضافة
    }
  };

  return (
    <div className="flex justify-between gap-4 w-full max-w-md ">
      <input
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
        placeholder="Write the project..."
        className="flex-1 p-2 border rounded outline-none text-black"
      />
      <button
        onClick={handleAddClick}
        className="py-2 px-4 bg-blue-700 text-white rounded font-medium hover:bg-blue-800 transition-colors"
      >
        Add Project
      </button>
    </div>
  );
}