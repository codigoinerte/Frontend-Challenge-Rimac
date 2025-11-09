import { RegisterContext, type User } from "@/rimac/context/registerContext";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, test, vi } from "vitest";
import { Resume } from "./Resume";
const user = {
        name: "Juan",
        lastName: "Perez",
        birthDay: new Date(),
        documentType: "dni",
        document: "7895468",
        phone: '987654321',
        age: 21,
    
        targetPeopleId:'para-mi',
        isForMe:true,
        planName:"Mi plan",
        planPrice:"100$ por mes",
    } as User;

const mockRegisterContextValue = {
    user,
    setUser: vi.fn(),
    setPlanToUser: vi.fn(),
};

const renderWithContext = (customValues = {}) => {
    const contextValue = {...mockRegisterContextValue, ...customValues};
    return render(<MemoryRouter>
        <RegisterContext.Provider value={contextValue}>
            <Resume />
        </RegisterContext.Provider>
    </MemoryRouter>)
}

describe('Resume.tsx', () => { 
    test('should to have render with params', () => { 
        const { container } = renderWithContext();
        
        const paramsToSearch = {
            name: user.name,
            lastName: user.lastName,
            document: user.document,
            phone: user.phone,
            planName: user.planName,
            planPrice: user.planPrice,
        }
        for(const i in paramsToSearch){
            const text = user[i as unknown as keyof User] as string;
            const result = container.innerHTML.includes(text);
            
            expect(result).toBeTruthy();
        }
    }) 
});