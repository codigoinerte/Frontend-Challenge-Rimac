import { use, type PropsWithChildren } from "react"
import { Navigate, useLocation } from "react-router";
import { RegisterContext } from "../context/registerContext";

export const ProtectedRouter = ({children}:PropsWithChildren) => {
  
    const protectedRoutes = ["/planes", "/planes/resumen"];    
    const location = useLocation();

    const { user } = use(RegisterContext);
    console.log({
        name: !user.name,
        price: !user.planPrice,
        includes: protectedRoutes.includes(location.pathname)
    });
    if((!user.name || !user.planPrice) && protectedRoutes.includes(location.pathname)){
        return <Navigate to="/"/>;
    }

    if(!!user.planPrice && protectedRoutes.includes(location.pathname)){
        return <Navigate to="/"/>;
    }

    return children;
}
