import { RegisterContext } from "@/rimac/context/registerContext";
import { use, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
type Inputs = {
    documentType: boolean | null;
    document: boolean | null;
    phone: boolean | null;
    terms: boolean | null;
    politics: boolean | null;
}

export interface UserResponse {
    name:     string;
    lastName: string;
    birthDay: Date;
}


const VITE_API = import.meta.env.VITE_API;

export const useRegister = () => {

     const [error, setError] = useState({
        documentType: null,
        document: null,
        phone: null,
        terms: null,
        politics: null,
    } as Inputs)

    const { setUser } = use(RegisterContext);

    const navigate = useNavigate();

    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const documentType = formData.get('documentType') as string;
        const document = formData.get('document') as string;
        const phone = formData.get('phone') as string;
        const terms = formData.get('terms') as string;
        const politics = formData.get('politics') as string;

        const inputs: Inputs = {
            documentType: !!documentType,
            document: !!document,
            phone: !!phone,
            terms: !!terms,
            politics: !!politics,
        }

        setError(inputs);

        for(const i in inputs){
            if(inputs[i as keyof Inputs] === false) return;
        }

        try {
            const response = await fetch(`${VITE_API}api/user.json`);
            const data:UserResponse = await response.json();
            
            setUser({
                name: data.name,
                lastName: data.lastName,
                birthDay: data.birthDay,
                documentType,
                document,
                phone,
            });

            navigate('/plans');
            
        } catch {
            toast.error('Hubo un error al registrarte, intenta de nuevo más tarde.');
        }
       
    }

    return {
        error,
        handleSubmit
    }
}
