import { RegisterContext } from "@/rimac/context/registerContext"
import { People } from "@/rimac/icons";
import { use } from "react"

export const Resume = () => {
    const { user } = use(RegisterContext);
    return (
        <>
            <div className="w-full max-w-[928px] m-auto md:px-6">
                <h1 className="hidden md:block ms-0 me-auto w-full font-lato text-[#141938] text-[40px] leading-8 tracking-[-0.6px] font-bold text-left mb-12">Resumen del seguro</h1>
                <div className="shadow-[0px_1px_24px_0px_#AEACF340] rounded-3xl py-6 px-8 bg-white">
                    <span className="text-[#141938] font-black font-lato text-[10px] leading-4 tracking-[0.8px] text-left uppercase">Precios calculados para:</span>
                    <div className="flex flex-row gap-4 items-center mt-2">
                        <People width={24} />
                        <h1 className="font-lato font-bold text-[20px] leading-7 tracking-[-0.2px] text-[#141938]">{user.name} {user.lastName}</h1>
                    </div>
                    <div className="h-px border-b border-[#D7DBF5] w-full my-4"></div>

                    <div className="mb-4">
                        <h2 className="font-lato font-bold text-[16px] leading-6 tracking-[0.2px] text-[#141938] mb-1">Responsable de pago</h2>
                        <p className="font-lato font-normal text-[14px] leading-6 tracking-[0.1px] text-[#141938] uppercase mb-1">{user.documentType}: {user.document}</p>
                        <p className="font-lato font-normal text-[14px] leading-6 tracking-[0.1px] text-[#141938] uppercase">Celular: {user.phone}</p>
                    </div>
                    
                    <div className="mb-4">
                        <h2 className="font-lato font-bold text-[16px] leading-6 tracking-[0.2px] text-[#141938] mb-1">Plan elegido</h2>
                        <p className="font-lato font-normal text-[14px] leading-6 tracking-[0.1px] text-[#141938] uppercase mb-1">{user.planName}: {user.document}</p>
                        <p className="font-lato font-normal text-[14px] leading-6 tracking-[0.1px] text-[#141938] uppercase">Costo del plan: {user.planPrice}</p>
                    </div>

                </div>
            </div>
        </>
    )
}
