import { useState } from "react";

export default function Calculate() {
  // 1. الخزانات (States)

  const[firstNumber, setfirstNumber] = useState<number>(0);// الرقم اللي يظهر بالشاشة
  const[secondNumber, setsecondNumber] = useState<number>(0);    // الرقم المخزون (الأول)
  const[result, setresult] = useState<number>(0);                // النتيجة النهائية
  const[operation, setoperation] = useState<string>("");  // نوع العملية (+, -, *, /)



  // 2. دالة ضغطة الرقم
 const handleClickNumber = (num: number)=>{
 
    // إذا جانت الشاشة 0 نكتب الرقم الجديد، وإذا لا نلزقهم (بضرب القديم في 10)
  setfirstNumber((prev)=> prev * 10 + num);
 }

  // 3. دالة اختيار العملية
 const handleOperation = (op: string)=>{

   setsecondNumber(firstNumber);// نضم الرقم الحالي بالخزنة
   setoperation(op);           // نحفظ العلامة
   setfirstNumber(0);             // نصفر الشاشة حتى نكتب الرقم الثاني 
 }
  // 4. دالة المسح (C)
 const handleClear = ()=>{
    setfirstNumber(0);
    setsecondNumber(0);
    setoperation("");
    setresult(0);
 }

  // 5. دالة اليساوي (المدير)
  const handleEqual = ()=>{
   let res = 0;
   if(operation === "+") res = secondNumber + firstNumber;
   if(operation === "-") res = secondNumber - firstNumber;
   if(operation === "*") res = secondNumber * firstNumber;
   if(operation === "/") res = secondNumber / firstNumber;
    setresult(res);        // نحدث ذاكرة النتيجة
    setfirstNumber(res);  // نعرض النتيجة بالشاشة
    setoperation("");       // نصفر العملية
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-xs bg-white p-5 rounded-2xl shadow-xl border border-purple-100 ">
        <div className="grid grid-cols-1 ">
          <input 
          type="text" 
          value={firstNumber}
          readOnly
          className="w-full border-2 border-indigo-500 text-black p-3 rounded-2xl text-2xl mb-4 text-right bg-gray-50"
          ></input>
        </div>
         {/** ازرار الارقام */}
        <div className="grid grid-cols-4 gap-2">
          {[1,2,3,4,5,6,7,8,9,0].map((num)=>(
            <button className="py-4 px-6 rounded bg-indigo-400 text-white text-xl cursor-pointer"
            key={num}
            onClick={()=> handleClickNumber(num)}
            >{num}</button>
          ))}
          {/** ازرار العمليات */}
          <button className="py-4 px-6 rounded bg-indigo-400 text-white text-xl cursor-pointer" onClick={()=> handleOperation("+")}>+</button>
          <button className="py-4 px-6 rounded bg-indigo-400 text-white text-xl cursor-pointer" onClick={()=> handleOperation("-")}>-</button>
          <button className="py-4 px-6 rounded bg-indigo-400 text-white text-xl cursor-pointer" onClick={()=> handleOperation("*")}>*</button>
          <button className="py-4 px-6 rounded bg-indigo-400 text-white text-xl cursor-pointer" onClick={()=> handleOperation("/")}>/</button>
          {/** ازرار التحكم */}
          <button className="py-4 px-6 rounded bg-pink-400 text-white text-xl cursor-pointer" onClick={handleClear}>C</button>
          <button className="py-4 px-6 rounded bg-pink-400 text-white text-xl cursor-pointer" onClick={ handleEqual}>=</button>
        </div>
      </div>
    </div>
  );
}