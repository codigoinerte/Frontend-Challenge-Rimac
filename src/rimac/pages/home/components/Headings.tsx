interface Props{
    className?:string;
}
export const Headings:React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <span className="max-[407px]:text-[12px] py-1 px-2 rounded-sm font-bold text-[14px] leading-4 tracking-[0.4px] text-[#03050F] bg-[linear-gradient(86.01deg,#00F4E2_0%,#00FF7F_100%)] h-6 inline-flex items-center mb-4">
                Seguro Salud Flexible
            </span>
            <h1 className="max-md:text-[28px] max-md:leading-9 font-bold text-[32px] max-w-[352px] leading-10 text-[#03050F] mb-2">
                Creado para ti y tu familia
            </h1>
        </div>
    )
}
