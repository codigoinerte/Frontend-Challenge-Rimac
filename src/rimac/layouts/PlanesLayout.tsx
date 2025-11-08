import { Outlet } from "react-router"
import { GoBack, Header, Stepper } from "../components"

export const PlanesLayout = () => {
    return (
        <div className="flex flex-col flex-1 w-full justify-center items-center">
            {/* Header */}
            <Header />

            <Stepper />

            <GoBack />
            
            {/* Body */}
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}
