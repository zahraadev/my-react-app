import { useState } from "react";

interface MyButtonprops{
    onAdd? : (name: string) =>  void;
    onDelete? : () =>  void;
    isListMode? : boolean;
    title? : string;
    onUpdate? :(newtitle : string)=> void;
    isDone? : boolean;
    onToggle? : ()=> void;
}

export default function MyButton({onAdd, onDelete, isListMode, title ,onUpdate, isDone, onToggle}: MyButtonprops){
    const[text, settextvalue] = useState("");
    const[isEditting, setisEditting] = useState(false);
    const[editValue, setEditValue] = useState(title || "");

    if(isListMode){
        return(
          <li className="flex justify-between items-center p-3 bg-white rounded text-black shadow-sm w-full">
            {isEditting ? (
              <div className="flex gap-2 w-full">
                <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} className="border p-1 flex-1 rounded outline-none border-blue-400"></input>
                <button 
                 onClick={()=>{ onUpdate?.(editValue)
                   setisEditting(false);
                  }}
                 className="px-3 py-1 bg-pink-400 text-white rounded">save</button>
                <button onClick={()=> setisEditting(false)} className="text-gray-400 text-xs">cancel</button>
              </div>
            ): (
              <>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={isDone} onChange={onToggle}></input>
                <span className={isDone? "line-through text-gray-400": ""}>{title}</span>
              </div>
              <div className="flex gap-2">
                  <button onClick={()=>setisEditting(true)} className="px-3 py-1 bg-blue-400 text-white rounded">edit</button>
                  <button onClick={onDelete} className="px-3 py-1 bg-red-700 text-white rounded">delete</button>
              </div>
              </>
            )}
          </li>
          
        )
    }
    return( 
        <div className="flex justify-between gap-4">
            <input className="flex-1 p-2 border rounded outline-none text-black " type="text" value={text} onChange={(e)=> settextvalue(e.target.value)} placeholder="please write project"></input>
            <button 
             onClick={()=>{
              if(text.trim()!== "" && onAdd){
                onAdd(text);
                settextvalue("");
              }
             }}
            className="bg-red-400 px-4 py-1 rounded text-white">add project</button>
        </div>
    )
}