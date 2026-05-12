import { useState } from "react";

interface Props {
  id: number;
  name: string;
  score: number;
  onDelete: () => void;
  onUpdate: (id: number, newName: string, newScore: number) => void;
  onMassage: () => void;
}

export default function Student({ id, name, score, onDelete, onUpdate, onMassage }: Props) {
  // حالات التعديل
  const [isedit, setisedit] = useState(false);
  const [newname, setnewname] = useState(name);
  const [newscore, setnewscore] = useState(score);

  // دالة الحفظ
  const handlesave = () => {
    onUpdate(id, newname, newscore);
    setisedit(false);
  };

  // دالة الإلغاء
  const handlecancel = () => {
    setnewname(name);
    setnewscore(score);
    setisedit(false);
  };

  return (
    <div onClick={onMassage} className="px-4 py-8 justify-center shadow-md rounded-xl p-4 mb-4 bg-white text-black font-bold">
      <div className="flex justify-between gap-6">
        {isedit ? (
          // --- هذا هو وضع التعديل (الانبوت) اللي ردتيه ---
          <div className="flex gap-2 w-full" onClick={(e) => e.stopPropagation()}>
            <input 
              value={newname} 
              onChange={(e) => setnewname(e.target.value)}
              className="border border-blue-300 rounded px-2 py-1 text-sm font-normal w-full outline-none focus:border-blue-500 text-black"
            />
            <input 
              type="number"
              value={newscore} 
              onChange={(e) => setnewscore(Number(e.target.value))}
              className="border border-blue-300 rounded px-2 py-1 text-sm font-normal w-20 outline-none focus:border-blue-500 text-black"
            />
          </div>
        ) : (
          // --- وضع العرض الأصلي مالتج ---
          <>
            <span>{name}</span>
            <span className={`font-bold ${
              score >= 90 ? 'text-blue-500' : 
              score >= 80 ? 'text-green-600' : 
              score >= 70 ? 'text-orange-500' : 
              score >= 60 ? 'text-amber-300' : 
              score >= 50 ? 'text-amber-900' : 'text-red-600'
            }`}>
              {score}
            </span>
          </>
        )}
      </div>

      <div className="flex gap-2 justify-center mt-8">
        {isedit ? (
          // أزرار تظهر فقط وقت التعديل
          <>
            <button onClick={(e) => { e.stopPropagation(); handlesave(); }} className="text-xs text-center py-1 px-3 bg-green-600 text-white rounded">حفظ</button>
            <button onClick={(e) => { e.stopPropagation(); handlecancel(); }} className="text-xs text-center py-1 px-3 bg-gray-500 text-white rounded">إلغاء</button>
          </>
        ) : (
          // أزرار العرض العادي
          <>
            <button onClick={(e) => { e.stopPropagation(); onDelete(); }} className="text-xs text-center py-1 px-3 bg-red-700 text-white rounded">حذف</button>
            <button onClick={(e) => { e.stopPropagation(); setisedit(true); }} className="text-xs text-center py-1 px-3 bg-blue-950 text-white rounded">تعديل</button>
          </>
        )}
      </div>
    </div>
  );
}