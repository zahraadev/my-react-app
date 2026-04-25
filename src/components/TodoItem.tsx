import React, { useState } from "react";

interface TodoItemProps {
  title: string;
  isDone: boolean;
  onDelete: () => void;
  onUpdate: (newName: string) => void;
  onToggle: () => void;
}

export default function TodoItem({ title, isDone, onDelete, onUpdate, onToggle }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(title);

  return (
    <li className="flex justify-between items-center p-3 bg-white mb-2 rounded shadow-sm text-black w-full">
      {isEditing ? (
        // --- وضع التعديل ---
        <div className="flex gap-2 w-full">
          <input
            className="border p-1 flex-1 rounded outline-none border-blue-400"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            autoFocus
          />
          <button
            onClick={() => {
              onUpdate(editValue);
              setIsEditing(false);
            }}
            className="bg-blue-500 text-white px-2 rounded text-xs"
          >
            save
          </button>
          <button onClick={() => setIsEditing(false)} className="text-gray-400 text-xs">
            cancel
          </button>
        </div>
      ) : (
        // --- وضع العرض العادي ---
        <>
          <div className="flex items-center gap-3">
            <input
              className="w-5 h-5 cursor-pointer"
              type="checkbox"
              checked={isDone}
              onChange={onToggle}
            />
            <span className={isDone ? "line-through text-gray-400" : "font-medium"}>
              {title}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-400 text-white px-3 py-1 rounded text-xs"
            >
              edit
            </button>
            <button
              onClick={onDelete}
              className="bg-red-700 text-white px-3 py-1 rounded text-xs"
            >
              delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}