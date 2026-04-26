import {useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";


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
    const totalTask = tasks.length;
    const compeletedTask = tasks.filter(task => task.isDone).length;
    const remainingTask = totalTask - compeletedTask;
    

    return(
        <div className="min-h-screen bg-blue-100 text-white flex flex-col items-center py-10 px-4 font-sans ">
            <h1 className="text-blue-900 text-3xl mb-14 font-bold">قائمة المهام</h1>
            <TodoInput onAdd={handleadd}/>
            <div className="flex gap-2 my-8 justify-center w-full max-w-md">
                <button onClick={()=> setfilter("all")} className="px-4 py-2 bg-blue-500 text-white rounded">all</button>
                <button onClick={()=> setfilter("done")} className="px-4 py-2 bg-green-500 text-white rounded">done</button>
                <button onClick={()=> setfilter("active")} className="px-4 py-2 bg-red-700 text-white rounded">active</button>
            </div>
           <div className="flex justify-center items-center w-full max-w-md gap-4 mb-4 text-gray-600 ">
                <span>Total: {totalTask}</span>
                <span>Compeleted: {compeletedTask}</span>
                <span>remaining: {remainingTask}</span>
            </div>
            <ul className="w-full max-w-md mt-8 flex flex-col gap-2">
                {filterdtask.map((task)=>(
                    <TodoItem
                    key={task.id}
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