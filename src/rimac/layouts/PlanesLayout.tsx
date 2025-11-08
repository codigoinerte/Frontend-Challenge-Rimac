import { Outlet } from "react-router"
import { GoBack, Header, Stepper, StepperMobile } from "../components"

export const PlanesLayout = () => {

    return (
        <div className="flex flex-col flex-1 w-full justify-center items-center">
            {/* Header */}
            <Header />

            <Stepper className="hidden md:block"/>
            
            <GoBack className="hidden md:block"/>
            
            <StepperMobile className="md:hidden"/>
            
            {/* Body */}
            <main className="flex-1 px-6 md:px-0 w-full mt-8 md:mt-0">
                <Outlet />
            </main>
        </div>
    )
}
