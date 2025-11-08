import { useLocation, useNavigate } from 'react-router';
import { ArrowBack } from '../icons'

interface Props{
    className?: string;    
}

export const GoBack:React.FC<Props> = ({className =""}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate((location.pathname === "/planes/resumen") ? "/planes" : "/");        
    }
    return (
        <div className={`w-full max-w-[928px] mt-10 mb-14 px-6 ${className}`}>
            <button onClick={handleGoBack} className="font-lato font-bold leading-5 tracking-[0.4px] text-[#4F4FFF] flex flex-row gap-2 cursor-pointer">
                <ArrowBack color="#4F4FFF"/> Volver
            </button>
        </div>
    )
}
