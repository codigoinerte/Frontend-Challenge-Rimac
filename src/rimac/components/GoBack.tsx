import { Link } from 'react-router'
import { ArrowBack } from '../icons'

interface Props{
    className?: string;
    to?: string;
}

export const GoBack:React.FC<Props> = ({className, to = "#"}) => {
    return (
        <div className={`w-full max-w-[928px] mt-10 mb-14 ${className}`}>
            <Link to={to} className="font-lato font-bold leading-5 tracking-[0.4px] text-[#4F4FFF] flex flex-row gap-2">
                <ArrowBack color="#4F4FFF"/> Volver
            </Link>
        </div>
    )
}
