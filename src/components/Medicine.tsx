import { useState } from "react";

interface medicinetype {
  id: number;
  name: string;
  price: number;
  iscompleted: boolean;
  ondelete:()=> void;
  onupdate: (newname: string, newprice: string)=> void;
}

export default function Medicine({ id, name, price, iscompleted ,ondelete, onupdate}: medicinetype) {
    const[isedit, setisedit] = useState(false);
    const[newname, setnewname]= useState(name);
    const[newprice, setnewprice] = useState<number>(price);

    const handlesave=()=>{
        onupdate(newname, newprice.toString());
        setisedit(false);
    }
    
    const handlecancel=()=>{
        setisedit(false);
    }
  return (
    <div className="w-full p-4 rounded bg-indigo-100 shadow-md text-black">
      <div className="flex justify-between items-center w-full">
        {isedit ? (
            <div className="flex gap-2 w-full" onClick={(e) => e.stopPropagation()}>
                <input className="w-full border border-indigo-200 rounded outline-none focus:border-indigo-300" type="text" value={newname} onChange={(e)=>setnewname(e.target.value)}></input>
                <input className="w-full border border-indigo-200 rounded outline-none focus:border-indigo-300" type="number" value={newprice} onChange={(e)=> setnewprice(Number(e.target.value))}></input>
                <button onClick={handlesave} className="px-2 py-1 rounded bg-green-700 text-white">حفظ</button>
                <button onClick={handlecancel} className="px-2 py-1 rounded bg-red-700 text-white">الغاء</button>
            </div>
        ) : (
            <>
                <div className="flex gap-2">
                    <span className="text-lg font-medium">{name}</span>
                    <span className="text-sm bg-indigo-200 px-2 py-1 rounded">
                     {price} دينار
                    </span>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => setisedit(true)} className="px-3 py-1 rounded bg-blue-600 text-white cursor-pointer">تعديل</button>
                    <button onClick={ondelete} className="px-3 py-1 rounded bg-red-800 text-white cursor-pointer">حذف</button>
                </div>
            </>
        )}
      </div>
    </div>
  );
}