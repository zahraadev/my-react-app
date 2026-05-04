interface studetProps{
    name: string;
    score: number;
    onMassage: () => void;
}
export default function Student({name, score, onMassage}: studetProps){
    return(
        <div onClick={onMassage} className="px-4 py-8 flex justify-center shadow-md rounded-xl p-4 mb-4 bg-white text-black font-bold text-xl cursor-pointer hover:scale-[1.01] transition-all duration-300">
            <div className="flex justify-between gap-6">
            <span>{name}</span>
            <span className={`font-bold ${score >=90 ? 'text-blue-500' : score>=80 ? 'text-green-600' : score>=70 ? 'text-orange-600' : 
            score >= 60 ? 'text-amber-300' : score >=50 ? 'text-amber-900' : 'text-red-600'}`}>{score}</span>
            </div>
        </div>
    )
}