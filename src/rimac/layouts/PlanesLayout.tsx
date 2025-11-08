import { Outlet, useNavigate } from "react-router"
import { GoBack, Header, Stepper } from "../components"

export const PlanesLayout = () => {

    const navigate = useNavigate();


    return (
        <div className="flex flex-col flex-1 w-full justify-center items-center">
            {/* Header */}
            <Header />

            <Stepper />

            <GoBack onClick={() => navigate(-1)}/>
            
            {/* Body */}
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}
