interface itemsProps{
    name: string;
    isBought: boolean;
    onToggle: ()=> void;
}
export default function ShoppingItem({ name, isBought, onToggle }: itemsProps) {
  return (
    <div 
      onClick={onToggle}
      className={`flex justify-between items-center p-4 mb-3 border rounded-xl cursor-pointer transition-all duration-300
        ${isBought ? 'bg-gray-100 border-gray-300 opacity-60' : 'bg-blue-100 border-blue-100 shadow-md hover:scale-[1.01]'}`}
    >
      {/* جهة الاسم مع شرط الخط */}
      <span className={`text-lg ${isBought ? 'line-through text-gray-500' : 'text-gray-800 font-medium'}`}>
        {name}
      </span>

      {/* جهة الإيموجي (شرط اللحم وشرط الصح) */}
      <div className="flex items-center gap-2 text-xl">
        {name === "Meat" && <span>⚠️</span>} 
        {isBought && <span>✅</span>}
      </div>
    </div>
  );
}