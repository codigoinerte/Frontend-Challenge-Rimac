import { RegisterContext } from "@/rimac/context/registerContext";
import { calcAge } from "@/rimac/helpers/calc.age";
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

const validateDocumentByDocumentType = (document: string, documentType: 'dni' | 'ce' | 'passport') => {
    let isValid = false;
    switch (documentType) {
        case "dni":
            isValid = /^\d{8}$/.test(document);
        break;
        case "ce":
            isValid = /^[a-zA-Z0-9]{8,12}$/.test(document);
        break;
        case "passport":
            isValid = /^[a-zA-Z0-9]{8,12}$/.test(document);
        break;
        default:
            isValid = false;
        break;
    }
    return isValid;
}

const validatePhoneNumber = (phone: string) => {
    const peruvianPhoneRegex = /^(?:51)?9\d{8}$/;
    return peruvianPhoneRegex.test(phone);
}

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

    //70035252
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const documentType = formData.get('documentType') as 'dni' | 'ce' | 'passport';
        const document = formData.get('document') as string;
        const phone = formData.get('phone') as string;
        const terms = formData.get('terms') as string;
        const politics = formData.get('politics') as string;

        const isDocumentValid = validateDocumentByDocumentType(document, documentType);
        const isPhoneValid = validatePhoneNumber(phone);

        const inputs: Inputs = {
            documentType: !!documentType,
            document: isDocumentValid,
            phone: isPhoneValid,
            terms: !!terms,
            politics: !!politics,
        }

        setError(inputs);

        for(const i in inputs){
            if(inputs[i as keyof Inputs] === false) {
                return;
            };
        }

        try {
            const response = await fetch(`${VITE_API}/user.json`);
            const data:UserResponse = await response.json();
            
            const age = calcAge(data.birthDay.toString());

            setUser({
                name: data.name,
                lastName: data.lastName,
                birthDay: data.birthDay,
                documentType,
                document,
                phone,
                age,
                targetPeopleId: "",
            });

           
            navigate('/planes');
            
        } catch {
            toast.error('Hubo un error al registrarte, intenta de nuevo más tarde.');
        }
       
    }

    return {
        error,
        handleSubmit
    }
}
