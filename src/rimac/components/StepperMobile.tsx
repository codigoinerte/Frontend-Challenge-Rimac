import React from 'react'
import { ArrowBack } from '../icons';
import { Progress } from '@/components/ui/progress';
import { useLocation, useNavigate } from 'react-router';
interface Props {
    className?: string;
}
export const StepperMobile:React.FC<Props> = ({className}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleOnNavigate = () => {
        navigate(location.pathname === "/planes/resumen" ? "/planes" : "/")
    }

    const progress = location.pathname === "/planes/resumen" ? 100: 1;

    return (
        <div className={`w-full py-4 px-6 flex flex-row border-b border-[#D7DBF5] gap-4 ${className}`}>
            
            <button onClick={handleOnNavigate} className='cursor-pointer'>
                <ArrowBack width={24} height={24} color='#4F4FFF'/>
            </button>

            <div className='flex flex-row flex-1 items-center gap-4'>
                <span className='uppercase font-black font-lato text-[10px] leading-4 tracking-[0.8px] block min-w-[68px]'>paso 1 de 2</span>

                <Progress value={progress} className="w-full bg-[#D7DBF5]"/>

            </div>

        </div>
    )
}
