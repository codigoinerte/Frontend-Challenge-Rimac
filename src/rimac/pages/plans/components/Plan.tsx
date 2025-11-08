import React from 'react'
import type { Plan as PlanType } from '../types/types'
import { currencyConvert } from '@/rimac/helpers/currencyConvert'
import { Clinic, Home } from '@/rimac/icons'
import { ReplaceTextToBold } from '@/rimac/helpers/ReplaceTextToBold'

export const Plan:React.FC<PlanType> = ({ price, name, description}) => {
    return (
        <div key={name} className='shadow-[0px_1px_32px_0px_#AEACF359] px-8 pt-[68px] pb-6 rounded-3xl md:max-w-[288px] w-[288px] flex-1 h-full flex flex-col'>
            <div className='flex flex-row justify-between relative'>
                {
                    name.includes("Clínica") && (
                        <div className='absolute -top-8 left-0'>
                            <span className='font-lato text-[12px] leading-4 tracking-[0.4px] font-black text-[#141938] py-0.5 px-2 bg-[#7DF0BA] rounded-[6px] inline-block'>Plan recomendado</span>
                        </div>
                    )
                }
                <div>
                    <h3 className='font-lato text-[24px] leading-8 font-black text-[#141938]'>{name}</h3>
                    <h4 className='font-lato text-[12px] leading-2 font-black text-[#7981B2] mt-6 mb-1'>COSTO DEL PLAN</h4>
                    <p className='font-lato text-[20px] leading-7 font-black text-[#141938] tracking-[-0.2px]'>{currencyConvert(price)}</p>
                </div>
                <div className='self-start'>
                    {
                    name.includes("Clínica") ? <Clinic /> : <Home />
                    }
                </div>
            </div>
            <div className='border-b border-[#D7DBF5] h-px w-full my-6'></div>
            
            <ul className='list-disc ps-7 flex-1'>
                {
                description.map(item => (
                    <li key={item} className='font-lato font-normal text-[16px] leading-7 tracking-[0.1px] mb-6 '>
                    {ReplaceTextToBold(item)}
                    </li>
                ))
                }
            </ul>

            <button 
                type='button'
                className='w-full bg-[#FF1C44] text-white font-lato font-bold text-[18px] leading-5 tracking-[0.4px] py-3.5 rounded-4xl cursor-pointer'>Seleccionar Plan</button>
        </div>
    )
}
