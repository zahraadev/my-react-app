/*import {useEffect, useState } from "react";
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

}*/

/*
import React, { useState } from "react";
import Main from "./components/Main"; // تأكدي إن المسار صح حسب مجلدج

// تعريف شكل البطاقة الواحدة بداخل المصفوفة
interface cardsType {
  id: number;
  text: string;
  isVisible: boolean;
}

export default function Game() {
  // المصفوفة اللي تحتوي على بيانات اللعبة
  const [cards, setCards] = useState<cardsType[]>([
    { id: 1, text: "react", isVisible: false },
    { id: 2, text: "html", isVisible: false },
    { id: 3, text: "css", isVisible: false },
    { id: 4, text: "python", isVisible: false },
  ]);

  // دالة تحديث الحالة عند الضغط على الكارت
  const handleclick = (id: number) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isVisible: !card.isVisible } : card
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 font-sans">
      <h1 className="text-4xl text-indigo-700 font-bold mb-12">Game of Cards</h1>
      
      {/* شبكة المربعات (صفين وعمودين) *//*
      <div className="grid grid-cols-2 gap-6">
        {cards.map((card) => (
          <Main
            key={card.id}
            text={card.text}
            isVisible={card.isVisible}
            onFilp={() => handleclick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}*/
/*
import { useState } from "react";
import Names from "./components/Names";

interface NamesMain {
  id: number;
  name: string;
  isActive: boolean;
}

export default function App(){

  const[names, setnames] = useState<NamesMain[]>([
    {id:1,name: "ali", isActive: false},
    {id:2,name: "zahraa", isActive: false},
    {id:3,name: "asraa", isActive: false},
    {id:4,name: "ahmed", isActive: false},
    {id:5,name: "alan", isActive: false},
  ])

  const handleToggle = (id: number)=>{
    setnames(names.map(name => name.id === id ?{...name, isActive: !name.isActive}: name));

  }

  return(
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 font-sans">
      {names.map(name =>(
        <Names 
        key={name.id}
        name={name.name}
        isActive={name.isActive}
        onToggle={()=> handleToggle(name.id)}
        />
      ))}
    </div>
  )
}*/
/*
import { useState } from "react";
import Bought from "./components/Bought";

// تعريف شكل العنصر الواحد في المصفوفة
interface Item {
  id: number;
  name: string;
  isBought: boolean;
}

export default function App() {
  // 1. المصفوفة (المخزن)
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Meat", isBought: false },
    { id: 2, name: "Milk", isBought: false },
    { id: 3, name: "Bread", isBought: false },
    { id: 4, name: "Apples", isBought: false },
  ]);

  // 2. دالة التغيير (المنطق)
  const handleToggle = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isBought: !item.isBought } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
          قائمة التسوق الذكية 🛒
        </h1>

        <div className="flex flex-col">
          {/* 3. ماكنة الطباعة (الـ map) */
          /*
          {items.map((item) => (
            <Bought
              key={item.id}
              name={item.name}
              isBought={item.isBought}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}*/
import { useState } from "react";
import Student from "./components/Student";

interface StudentType {
  id: number;
  name: string;
  score: number;
}

export default function App() {
  const [students, setStudents] = useState<StudentType[]>([
    { id: 1, name: "سارة محمود", score: 92 },
    { id: 2, name: "أحمد علي", score: 85 },
  ]);

  // States لحقول الإضافة الجديدة
  const [addName, setAddName] = useState("");
  const [addScore, setAddScore] = useState("");
  

  const totalscore = students.reduce((sum, student)=> sum + student.score, 0);
  const average = students.length > 0 ? (totalscore/students.length).toFixed(1) : 0;

  // دالة الإضافة
  const handleAdd = () => {
    if (addName && addScore) {
      const newStudent = {
        id: Math.random(),
        name: addName,
        score: Number(addScore),
      };
      setStudents([...students, newStudent]);
      setAddName(""); // تصغير الحقول بعد الإضافة
      setAddScore("");
    }
  };

  const updateStudent = (id: number, newName: string, newScore: number) => {
    setStudents(students.map(s => s.id === id ? { ...s, name: newName, score: newScore } : s));
  };

  const deleteStudent = (id: number) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8" dir="rtl">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8 text-blue-900">قائمة درجات الطلاب</h1>
        <div className="bg-blue-50 p-4 rounded-xl mb-6 flex justify-around border-2 border-blue-200">
        <div className="text-center">
        <p className="text-gray-500 text-sm">مجموع الدرجات</p>
        <p className="text-2xl font-bold text-blue-700">{totalscore}</p>
        </div>
        <div className="text-center">
        <p className="text-gray-500 text-sm">معدل الطلاب</p>
        <p className="text-2xl font-bold text-green-600">{average}%</p>
      </div>
   </div>
        {/* --- هذا هو قسم الإضافة اللي جان ناقص --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8 flex gap-4 justify-center items-center">
          <input
            value={addName}
            onChange={(e) => setAddName(e.target.value)}
            placeholder="اسم الطالب"
            className="border-2 border-gray-100 p-2 rounded-lg focus:border-blue-400 outline-none text-black font-bold"
          />
          <input
            type="number"
            value={addScore}
            onChange={(e) => setAddScore(e.target.value)}
            placeholder="الدرجة"
            className="border-2 border-gray-100 p-2 rounded-lg w-24 focus:border-blue-400 outline-none text-black font-bold"
          />
          <button 
            onClick={handleAdd}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-bold transition-all"
          >
            إضافة
          </button>
        </div>

        {/* عرض البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {students.map((student) => (
            <Student
              key={student.id}
              id={student.id}
              name={student.name}
              score={student.score}
              onDelete={() => deleteStudent(student.id)}
              onUpdate={updateStudent}
              onMassage={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}