import Main from "./components/Main";
import { useState } from "react";

interface cardsType{
    id : number;
    text: string;
    isVisible: boolean;
}
export default function Game(){
    const[cards, setCards] = useState<cardsType[]>([
        {id: 1, text: "react", isVisible: false},
        {id: 2, text: "vite", isVisible: false},
        {id: 3, text: "html", isVisible: false},
        {id: 1, text: "python", isVisible: false},
    ])
    return(
        <div className="flex justify-center max-w-md bg-gray-200 w-full h-screen">
            <h1 className="text-3xl text-indigo-600 font-bold py-5 my-5">Game of Cards</h1>
            <Main/>
        </div>
    )
}