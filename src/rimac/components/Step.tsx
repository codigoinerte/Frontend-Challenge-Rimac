import { Link } from "react-router";

interface Props{
    number: number;
    label: string;
    isActive: boolean;
    isDisabled?: boolean;
    className?: string;
    route?: string;
}    
export const Step:React.FC<Props> = ({isActive, isDisabled = false, number, label, className, route = "#"}) => {
    const classNameNumber = isActive ? "bg-[#4F4FFF] text-white " : "text-[#7981B2] border-1 border-[#7981B2] bg-transparent";
    const classNameStep = isActive ? "text-[#141938]" : "text-[#7981B2]";
    if(isDisabled)
        return (<button className={`font-bold font-lato flex flex-row gap-4 ${classNameStep} ${className} cursor-default`} aria-disabled={!isActive} disabled>
                    <span className={`flex rounded-full w-6 h-6 justify-center items-center text-[12px] font-bold tracking-[0.4px] font-lato! ${classNameNumber}`}>{number}</span>
                    {label}
                </button>)

    return (<Link to={route} className={`font-bold font-lato flex flex-row gap-4 ${classNameStep} ${className} cursor-pointer`}>
                <span className={`flex rounded-full w-6 h-6 justify-center items-center text-[12px] font-bold tracking-[0.4px] font-lato! ${classNameNumber}`}>{number}</span>
                {label}
            </Link>)
}
