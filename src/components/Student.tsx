import { useState } from "react";

interface studetProps{
    name: string;
    score: number;
    onMassage: () => void;
    onDelete: ()=> void;
    onUpdate: (id:number, newname:string, newscore: number)=> void;
   
}
export default function Student({name, score, onMassage, onDelete, onUpdate}: studetProps){
    const[isupdate, setisupdate]= useState(false);
    const [newname, setnewname] = useState("");
    const [newscore, setnewscore] = useState("");
    return(
        <div onClick={onMassage} className="px-4 py-8  justify-center shadow-md rounded-xl p-4 mb-4 bg-white text-black font-bold text-xl cursor-pointer hover:scale-[1.01] transition-all duration-300">
            <div className="flex justify-between gap-6">
            <span>{name}</span>
            <span className={`font-bold ${score >=90 ? 'text-blue-500' : score>=80 ? 'text-green-600' : score>=70 ? 'text-orange-600' : 
            score >= 60 ? 'text-amber-300' : score >=50 ? 'text-amber-900' : 'text-red-600'}`}>{score}</span>
            </div>
            <div className="flex gap-2 justify-center mt-8">
                 <button onClick={onDelete} className="text-xs text-center py-1 px-3 bg-red-700 text-white rounded">حذف</button>
                 <button  className="text-xs text-center py-1 px-3 bg-blue-950 text-white rounded">تعديل</button>
            </div>    
        </div>
    )
}