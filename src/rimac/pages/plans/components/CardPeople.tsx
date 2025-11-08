import { Check } from '@/rimac/icons';
import React from 'react'

interface Props{
    className?:string;
    id:string;
    title:string;
    description:string;
    icon:React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    selectedCard:string;
}

export const CardPeople:React.FC<Props> = ({id, title, description, icon, onClick, selectedCard}) => {
    return (
        <button 
            onClick={onClick}
            className={`shadow-[0px_1px_32px_0px_#AEACF359] pt-4 pr-6 pb-10 ps-6 rounded-3xl bg-white w-full md:max-w-[256px] h-auto ${selectedCard == id ? "border-3 border-[#03050F]" : "border-3 border-transparent"}`}>
            <div className="w-full flex justify-end">
                    <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        selectedCard == id
                        ? 'bg-green-500'
                        : 'bg-gray-200'
                    }`}
                    >
                    {selectedCard == id && (
                        <Check className="" color="#fff" />
                    )}
                    </div>
            </div>
            <div className="max-md:flex max-md:flex-row max-md:gap-2">
                {icon}
                <h2 className="font-lato font-bold text-[20px] leading-7 tracking-[-0.2px] text-[#141938] text-left mb-2 mt-[11px]">{title}</h2>
            </div>
            <p className="font-lato font-normal text-[12px] leading-5 tracking-[0.2px] text-[#141938] text-left">{description}</p>
        </button>
    )
}
