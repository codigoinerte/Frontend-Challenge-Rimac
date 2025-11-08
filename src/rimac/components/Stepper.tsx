import { Separate } from "@/rimac/icons"
import { Step } from "./Step"

export const Stepper = () => {
    return (
        <div className="py-4 bg-[#EDEFFC] w-full flex justify-center">
            <div className="max-w-[1120px] w-full px-6 m-0 flex flex-row items-center justify-center">                
                <Step isActive={true} number={1} label="Planes y coberturas"/>
                <Separate color="#4F4FFF" className="mx-4"/>
                <Step isActive={false} number={2} label="Resumen" className="-ms-2"/>                
            </div>
        </div>
    )
}
