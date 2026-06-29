import { Checkbox } from "@nextui-org/react";
import type { number } from "framer-motion";
import { useState } from "react";

interface Fitnessprops {
    id: number;
    name: string;
    dose: string;
    taken: boolean;

}
interface Fitnessprops2 {
    id: number;
    excrise: string;
    numberjola: number;
    taken: boolean;

}

export default function FitnessHub() {
    const [water, setwater] = useState<number>(0);
    const [supplements, setsupplements] = useState<Fitnessprops[]>([]);
    const [supplements2, setsupplements2] = useState<Fitnessprops2[]>([]);
    const [name, setname] = useState<string>("");
    const [dose, setdose] = useState<string>("");
    const [namesupp, setnamesupp] = useState<string>("");
    const [numjola, setnumjola] = useState<number>(0);

    const handleadd = () => {
        if (!name.trim() || !dose.trim()) return;
        const newsupplement: Fitnessprops = {
            id: Date.now(),
            name: name,
            dose: dose,
            taken: false,
        };
        setsupplements([...supplements, newsupplement]);
        setname("");
        setdose("");
    };

    const handleaddsupp = () => {
        if (!namesupp.trim() || !numjola) return;
        const newsuoojj: Fitnessprops2 = {
            id: Date.now(),
            excrise: namesupp,
            numberjola: numjola,
            taken: false,
        };
        setsupplements2([...supplements2, newsuoojj]);
        setnamesupp("");
        setnumjola(0);
    };

    const togglesupplement = (id: number) => {
        setsupplements(supplements.map((item) => item.id === id ? { ...item, taken: !item.taken } : item));
    }
    const togglesupplement2 = (id: number) => {
        setsupplements2(supplements2.map((item2) => item2.id === id ? { ...item2, taken: !item2.taken } : item2));
    }
    return (
        <div className="p-6 bg-white border border-white shadow-sm rounded-2xl text-right">

            <div className="grid grid-cols-2 " dir="rtl">

                <div className="flex flex-col justify-center gap-2 mt-6">
                    <h1 className="text-xl font-bold text-emerald-700">مصنع العضلات 🏋️‍♀️</h1>
                    <p className="text-sm text-gray-500 font-medium">نظمي تمارينج ومكملاتج وحاسبة الماء الذكية</p>
                    {/* حاسبة الماء */}
                    <div className="w-full max-w-sm bg-white text-black rounded-lg shadow-sm">
                        <h1 className="font-bold text-sm text-right pr-6 pt-4">حاسبة شرب الماء (Water Tracker)</h1>
                        <hr className="border-stone-300/80 my-4 mx-6"></hr>
                        <h1 className="text-sm font-medium pr-6">عدد الاكواب: 8/{water}</h1>
                        <div className="my-4 mx-6 h-4 rounded-xl bg-slate-100" dir="ltr">
                            <div className="bg-emerald-600 rounded-xl h-full transition-all duration-300" style={{ width: `${Math.min((water / 8) * 100, 100)}%` }}></div>
                        </div>
                        <div className="flex justify-center gap-2 mb-4">
                            <button onClick={() => setwater(water + 1)} className="py-1 px-3.5 bg-emerald-700 rounded-lg text-white text-xl cursor-pointer hover:bg-emerald-800 font-bold">+</button>
                            <button onClick={() => setwater(water > 0 ? water - 1 : 0)} className="py-1 px-4 bg-emerald-700 rounded-lg text-white text-xl cursor-pointer hover:bg-emerald-800 font-bold">-</button>
                        </div>
                    </div>

                    {/* مفكرة المكملات */}
                    <div className="w-full max-w-sm bg-white text-black rounded-lg shadow-sm">
                        <div className="p-4">
                            <h1 className="font-bold text-sm text-right">مفكرة مكملات</h1>
                            <input value={name} onChange={(e) => setname(e.target.value)} type="text" className="mt-3 p-1.5 w-full border border-stone-300 focus:outline-none focus:border-emerald-700 rounded text-sm text-right" placeholder="اسم المكمل" />
                            <input value={dose} onChange={(e) => setdose(e.target.value)} type="text" className="mt-3 p-1.5 w-full border border-stone-300 focus:outline-none focus:border-emerald-700 rounded text-sm text-right" placeholder="الجرعة" />
                            <div className="flex justify-center">
                                <button onClick={handleadd} className="py-2 px-3 rounded bg-emerald-700 text-sm text-white font-bold mt-4 hover:bg-emerald-800 cursor-pointer">اضافة مكمل +</button>
                            </div>
                            <hr className="border-stone-300/80 my-4 w-full"></hr>
                        </div>

                        {/* 🌟 سحر الطباعة والظهور الديناميكي */}
                        <div className="space-y-2 w-full p-4 pt-0">
                            {supplements.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between p-3 bg-stone-50 border border-stone-200/60 rounded-xl"
                                    dir="rtl"
                                >
                                    {/* جهة اليمين: معلومات المكمل */}
                                    <div className="text-right">
                                        <p className={`text-md font-bold ${item.taken ? 'line-through text-stone-400' : 'text-stone-800'}`}>
                                            {item.name}
                                        </p>
                                        <p className={`text-[10px] ${item.taken ? 'line-through text-stone-400' : 'text-stone-500'}`}>
                                            {item.dose}
                                        </p>
                                    </div>

                                    {/* جهة اليسار: الـ Checkbox */}
                                    <input
                                        type="checkbox"
                                        checked={item.taken}
                                        onChange={() => togglesupplement(item.id)}
                                        className="w-4 h-4 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* الجهة الثانية*/}
                <div className="flex flex-col  mt-6">
                    <h1 className="text-xl font-bold text-emerald-700">مفكرة التمارين اليومية 🏋️‍♀️</h1>
                    <p className="text-sm text-gray-500 font-medium">تمارين اليوم 💪</p>
                    <div className="mt-4 flex flex-col ">
                        <p className="text-xs font-bold text-black">اسم التمرين</p>
                        <input value={namesupp} onChange={(e) => setnamesupp(e.target.value)} type="text" className="mt-3 p-1.5 w-full border border-stone-300 focus:outline-none focus:border-emerald-700 rounded text-sm text-right" placeholder="اسم التمرين" />
                        <p className="text-xs font-bold text-black mt-4">الجولات</p>
                        <input value={numjola} onChange={(e) => setnumjola(Number(e.target.value))} type="text" className="mt-3 p-1.5 w-full border border-stone-300 focus:outline-none focus:border-emerald-700 rounded text-sm text-right" placeholder="الجرعة" />
                        <button onClick={handleaddsupp} className="w-full rounded bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 mt-4">اضافة تمرين +</button>
                        <hr className="border-emerald-700/80 my-4 w-full border-1.5"></hr>
                    </div>
                    <div className="space-y-2 w-full p-4 pt-0">
                        {supplements2.map((item2) => (
                            <div
                                key={item2.id}
                                className="flex items-center justify-between p-3 bg-stone-50 border border-stone-200/60 rounded-xl"
                                dir="rtl"
                            >
                                {/* جهة اليمين: معلومات المكمل */}
                                <div className="text-right">
                                    <p className={`text-md font-bold ${item2.taken ? 'line-through text-stone-400' : 'text-stone-800'}`}>
                                        {item2.excrise}
                                    </p>
                                    <p className={`text-[10px] ${item2.taken ? 'line-through text-stone-400' : 'text-stone-500'}`}>
                                        {item2.numberjola}
                                    </p>
                                </div>

                                {/* جهة اليسار: الـ Checkbox */}
                                <input
                                    type="checkbox"
                                    checked={item2.taken}
                                    onChange={() => togglesupplement2(item2.id)}
                                    className="w-4 h-4 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}