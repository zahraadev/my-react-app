
interface taskprops {
    nametask: string;
    difftask: string;
    scoretask: string;
    subtasks: string[];
    iscompleted: boolean;
    ondelete: () => void;
}
export default function TaskCard({ iscompleted, nametask, difftask, scoretask, subtasks, ondelete }: taskprops) {

    return (
        <div className="w-full max-w-sm bg-slate-900/50 p-5 rounded-2xl border border-slate-700 backdrop-blur-sm flex flex-col items-center text-center">
            <h1 className="font-bold text-white text-sm">{nametask}</h1>
            <p className="text-xs text-slate-400 mt-1">
                Threat:{' '}
                <span className={`font-bold ${difftask === 'easy' ? 'text-emerald-400' : difftask === 'medium' ? 'text-yellow-400' : 'text-red-400'}`}>
                    {difftask}
                </span>
                {' '} ({Number(scoretask)} XP)
            </p>
            <div className={`w-20 h-20 rounded-full border-4 flex items-center mt-4 justify-center animate-pulse shadow-[0_0_15px_rgba(0,0,0,0.3)] ${difftask === 'easy' ? 'border-emerald-500 shadow-emerald-500/20' :
                difftask === 'medium' ? 'border-yellow-500 shadow-yellow-500/20' :
                    'border-red-500 shadow-red-500/20'
                }`}>
                <div className="text-center">
                    <span className="text-white font-black text-lg block tracking-wider">0/2</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Progress</span>
                </div>
            </div>
            {/* 📋 قائمة المهام الفرعية الديناميكية */}
            <div className="w-full flex flex-col gap-2.5 mt-5 pt-4 border-t border-slate-800/60 text-right">

                {subtasks?.map((subtask, id) => (
                    <label
                        key={id}
                        className="flex items-center gap-2.5 text-xs text-slate-400 cursor-pointer select-none hover:text-slate-200 transition-colors"
                    >
                        <input
                            type="checkbox"
                            className="w-4 h-4 accent-emerald-500 rounded border-slate-750 bg-slate-950 cursor-pointer"
                        />
                        <span>{subtask}</span> {/* 👈 هنا ينطبع نص الخطوة الفرعية */}
                    </label>
                ))}
                <button onClick={ondelete} className="py-2 px-3 bg-red-500 hover:bg-red-600 text-white rounded-lg cursor-pointer">Delete</button>
            </div>
        </div>
    )
}