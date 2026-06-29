import { useState } from "react";

interface skincareproduct {
    id: string;
    name: string;
    activeingredient: "Salicylic" | "Glycolic" | "Retinol" | "VitaminC" | "Niacinamide" | "Other";
    time: "morning" | "night" | "both";
}
export default function SkinCareHub() {
    const [products, setproducts] = useState<skincareproduct[]>([]);
    const [productname, setproductname] = useState("");
    const [ingredient, setingredient] = useState<skincareproduct["activeingredient"]>("Other");
    const [usetime, setusetime] = useState<skincareproduct["time"]>("morning");

    const handleaddproduct = (e: React.FormEvent) => {
        e.preventDefault();
        if (!productname.trim()) return;
        const newproduct: skincareproduct = {
            id: Date.now().toString(),
            name: productname,
            activeingredient: ingredient,
            time: usetime,
        }
        setproducts([...products, newproduct]);
        setproductname("");
    }
    return (
        <div className="w-full bg-white border border-stone-200 p-6 rounded-2xl shadow-sm text-right" dir="rtl">

            <div className="border-b border-stone-200 pb-4 mb-6">
                <h2 className="text-xl font-bold text-rose-600 flex items-center gap-2">روتين العناية ومعالج المواد الذكي</h2>
                <p className="text-xs text-stone-500 mt-1">اضيفي منتجاتج وتأكدي من توافق المواد الفعالة لحماية بشرتج</p>
            </div>
            <form onSubmit={handleaddproduct} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end bg-stone-50 p-4 rounded-xl border border-stone-200/60 mb-6">
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-stone-600">اسم المنتج</label>
                    <input type="text" value={productname} onChange={(e) => setproductname(e.target.value)} placeholder="مثلا سيروم نياسينامد لاروش.."
                        className="text-sm p-2.5 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-400 bg-white" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-stone-600">المادة الفعالة :</label>
                    <select value={ingredient} onChange={(e) => setingredient(e.target.value as skincareproduct["activeingredient"])}
                        className="text-sm p-2.5 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-400 bg-white">
                        <option value="Other">ترطيب عادي / اخرى</option>
                        <option value="Niacinamide">نياسيناميد</option>
                        <option value="Salicylic">ساليسيلك اسيد</option>
                        <option value="Glycolic">جلايكولك اسيد</option>
                        <option value="Retinol">ريتينول</option>
                        <option value="VitaminC">فيتامين سي</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-stone-600">وقت الاستخدام :</label>
                    <select value={usetime} onChange={(e) => setusetime(e.target.value as skincareproduct["time"])}
                        className="text-sm p-2.5 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-400 bg-white">
                        <option value="morning">صباحا</option>
                        <option value="night">مساءا</option>
                        <option value="both">صباحا ومساءا</option>
                    </select>
                </div>
                <button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 px-4 rounded-lg text-sm transition-colors duration-200 focus:outline-none shadow-sm h-[42px">اضافة للمجموعة +</button>
            </form>

            <div className="mt-6">
                <h3 className="text-sm font-bold text-stone-700 mb-3">منتجاتچ الحالية ({products.length}):</h3>
                {products.length === 0 ? (
                    <p className="text-xs text-stone-400 text-center py-6 bg-stone-50/50 rounded-xl border border-dashed border-stone-200">رف العناية فارغ هسة.. أضيفي منتج لتبدأي! ✨</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {products.map((product) => (
                            <div key={product.id} className="p-3 bg-white border border-stone-200 rounded-xl flex justify-between items-center shadow-xs">
                                <div>
                                    <h4 className="text-sm font-bold text-stone-800">{product.name}</h4>
                                    <p className="text-xs text-stone-400 mt-0.5">
                                        المادة: {product.activeingredient} | الوقت: {product.time === "morning" ? "صباحاً" : product.time === "night" ? "مساءً" : "كليهما"}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setproducts(products.filter((p) => p.id !== product.id))}
                                    className="text-xs  font-bold text-rose-400 hover:text-rose-600 p-1"
                                >
                                    حذف
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}