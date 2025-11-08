import { createContext, useState } from "react";

type User = {
    name: string;
    lastName: string;
    birthDay: Date;
    documentType: string;
    document: string;
    phone: string;
    age: number;

    isForMe?:boolean;
    planName?:string;
    planPrice?:string;
}

interface registerContextProps {
    user: User;
    setUser: (user:User) => void;
    setPlanToUser: (isForMe:boolean, planName:string, planPrice:string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const RegisterContext = createContext({} as registerContextProps);

export const RegisterContextProvider = ({children}:React.PropsWithChildren) => {

    const [user, setUser] = useState<User>({} as User);

    const setParamsUser = (user:User) => setUser(user);

    const setPlanToUser = (isForMe:boolean, planName:string, planPrice:string) => {
        setUser(user=>({...user, isForMe, planName, planPrice}));
    }

    return (<RegisterContext value={{
                    user: user,
                    setUser: setParamsUser,
                    setPlanToUser: setPlanToUser
                }}>
                {children}
            </RegisterContext>)
};
    