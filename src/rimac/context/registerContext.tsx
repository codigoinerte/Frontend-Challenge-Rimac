import { createContext, useState } from "react";

type User = {
    name: string;
    lastName: string;
    birthDay: Date;
    documentType: string;
    document: string;
    phone: string;
    age: number;
}

interface registerContextProps {
    user: User;
    setUser: (user:User) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const RegisterContext = createContext({} as registerContextProps);

export const RegisterContextProvider = ({children}:React.PropsWithChildren) => {

    const [user, setUser] = useState<User>({} as User);

    const setParamsUser = (user:User) => setUser(user);

    return (<RegisterContext value={{
                    user: user,
                    setUser: setParamsUser
                }}>
                {children}
            </RegisterContext>)
};
    