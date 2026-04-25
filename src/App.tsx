import {useEffect, useState } from "react";
import MyButton from "./components/MyButton";


interface task{
    id: number;
    title: string;
    isDone : boolean;
}
export default function App(){
    const[tasks, setTasks] = useState<task[]>([]);
    const [filter, setfilter] = useState("all");

    //local storage
    useEffect(()=>{
    const saved = localStorage.getItem("tasks");
    if(saved){
        setTasks(JSON.parse(saved));
    }
   },[])
    useEffect(()=>{
    if(tasks.length >0){
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    },
    [tasks])



    const handleadd = (taskname: string)=>{
        const newObj : task = {id: Date.now(), title: taskname, isDone: false};
        setTasks([...tasks, newObj]);
    }

    const handledelete = (id: number)=>{
        setTasks(tasks.filter((task)=> task.id !== id));
    }

    const handleupdate = (id: number, newtitle: string)=>{
        setTasks(tasks.map((task)=> task.id === id ? {...task, title: newtitle} : task));
    }

    const handleontoggle = (id: number)=>{
        setTasks(tasks.map((task)=> task.id === id ? {...task, isDone: !task.isDone} : task))
    }

    const filterdtask =  tasks.filter(task =>{
        if(filter === "done"){
            return task.isDone === true;
        }
        if(filter === "active"){
            return task.isDone === false;
        }
        return true;

    })
    
    return(
        <div className="min-h-screen bg-gray-100 text-white flex flex-col items-center py-10 px-4 font-sans ">
            <h1 className="text-black font-bold text-3xl mb-10">قائمة المهام</h1>
            <MyButton isListMode={false} onAdd={handleadd} isDone={false}/>
            <div className="flex gap-2 my-6 justify-center w-full max-w-md">
                <button onClick={()=> setfilter("all")} className="px-4 py-2 bg-blue-500 text-white rounded">all</button>
                <button onClick={()=> setfilter("done")} className="px-4 py-2 bg-green-500 text-white rounded">done</button>
                <button onClick={()=> setfilter("active")} className="px-4 py-2 bg-red-500 text-white rounded">active</button>
            </div>
            <ul className="w-full max-w-md mt-8 flex flex-col gap-2">
                {filterdtask.map((task)=>(
                    <MyButton
                    key={task.id}
                    isListMode={true}
                    onAdd={handleadd}
                    onDelete={()=> handledelete(task.id)}
                    title={task.title}
                    onUpdate={(newtitle) => handleupdate(task.id, newtitle)}
                    isDone={task.isDone}
                    onToggle={() => handleontoggle(task.id)}
                    />
                ))}
            </ul>
        </div>
    )

}