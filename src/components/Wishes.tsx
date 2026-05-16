import { useState } from "react";

interface wishesprops{
    id: number;
    title:string,
    ondelete:()=> void;
    onupdate: (newname: string)=> void;  
    iscompleted: boolean;
    ontoggle: ()=> void;
}
export default function Wishes({id, title, ondelete, onupdate,iscompleted, ontoggle}:wishesprops){
 const[isedit, setisedit] = useState(false);
 const [editvalue, seteditvalue] = useState(title);

  // دالة الحفظ
  const handlesave = () => {
    onupdate(editvalue);
    setisedit(false);
  };

  // دالة الإلغاء
  const handlecancel = () => {
    setisedit(false);
  };


    return(
        <div className="w-full p-2 bg-pink-100 rounded shadow-sm text-black ">
            <div className="flex justify-between items-center w-full">
                {isedit ? (
                    <div className="flex gap-2 w-full" onClick={(e) => e.stopPropagation()}>
                        <input className="w-full border border-blue-300 rounded px-2 py-1 text-sm font-normal outline-none focus:border-blue-500 " value={editvalue} onChange={(e)=>seteditvalue(e.target.value)}></input>
                        <button onClick={handlesave} className="px-3 py-1 bg-green-500 text-white rounded">حسنا</button>
                        <button onClick={handlecancel} className="px-3 py-1 bg-red-500 text-white rounded">الغاء</button>
                    </div>       

                ):(
            <>
                <span className={`text-lg ${iscompleted ? "line-through text-gray-500" : "text-black"}`}>{title}</span>
                <div className="flex gap-4">
                    <button onClick={ondelete} className="px-3 py-1 bg-red-800 text-white rounded cursor-pointer">حذف</button>
                    <button onClick={(e) => { e.stopPropagation(); setisedit(true);}} className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer">تعديل</button>
                    <button onClick={ontoggle} className={`px-2 py-1 rounded text-sm text-white transition ${iscompleted ? "bg-gray-500 hover:bg-gray-600" : "bg-green-600 hover:bg-green-700"}`}> {iscompleted ? "تراجع" : "تم"} </button>
                </div>
            </>
           )}
        </div>
        </div>
    )
}