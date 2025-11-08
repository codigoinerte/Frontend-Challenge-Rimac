import { Separate } from "@/rimac/icons"
import { Step } from "./Step"
import { useLocation } from "react-router";

export const Stepper = () => {

    const location = useLocation();
    
    return (
        <div className="py-4 bg-[#EDEFFC] w-full flex justify-center">
            <div className="max-w-[1120px] w-full px-6 m-0 flex flex-row items-center justify-center">                
                <Step 
                    route="/planes" 
                    isActive={location.pathname == "/planes"}                     
                    number={1} 
                    label="Planes y coberturas"/>
                <Separate color="#4F4FFF" className="mx-4"/>
                <Step 
                    route="/planes/resumen" 
                    isActive={location.pathname == "/planes/resumen"} 
                    isDisabled={location.pathname == "/planes"}
                    number={2} 
                    label="Resumen" 
                    className="-ms-2"/>
            </div>
        </div>
    )
}
