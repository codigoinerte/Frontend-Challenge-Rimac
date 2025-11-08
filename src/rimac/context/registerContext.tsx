import { createContext, useState } from "react";
import type { selectPlanType } from "../pages/plans/types/types";

type User = {
    name: string;
    lastName: string;
    birthDay: Date;
    documentType: string;
    document: string;
    phone: string;
    age: number;

    targetPeopleId: selectPlanType | "";
    isForMe?:boolean;
    planName?:string;
    planPrice?:string;
}

interface setPlanToUserParams {
    isForMe:boolean,
    planName:string,
    planPrice:string,
    targetPeopleId: selectPlanType | "";
}
interface registerContextProps {
    user: User;
    setUser: (user:User) => void;
    setPlanToUser: (param:setPlanToUserParams) => void;
}


// eslint-disable-next-line react-refresh/only-export-components
export const RegisterContext = createContext({} as registerContextProps);

export const RegisterContextProvider = ({children}:React.PropsWithChildren) => {

    const [user, setUser] = useState<User>({} as User);

    const setParamsUser = (user:User) => setUser(user);

    const setPlanToUser = (params: setPlanToUserParams) => {
        setUser(user=>({...user, ...params}));
    }

    return (<RegisterContext value={{
                    user: user,
                    setUser: setParamsUser,
                    setPlanToUser: setPlanToUser
                }}>
                {children}
            </RegisterContext>)
};
    