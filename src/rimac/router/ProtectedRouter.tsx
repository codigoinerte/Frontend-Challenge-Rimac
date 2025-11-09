import { use, type PropsWithChildren } from "react"
import { Navigate, useLocation } from "react-router";
import { RegisterContext } from "../context/registerContext";

export const ProtectedRouter = ({children}:PropsWithChildren) => {
      
    const location = useLocation();

    const { user } = use(RegisterContext);
  
    if(user.name == undefined && location.pathname == "/planes"){
        return <Navigate to="/"/>;
    }

    if(user.planPrice == undefined && location.pathname == "/planes/resumen"){
        return <Navigate to="/"/>;
    }

    return children;
}
