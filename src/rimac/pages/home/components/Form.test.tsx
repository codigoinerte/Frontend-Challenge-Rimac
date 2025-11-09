import { describe, test, expect, vi } from 'vitest';
import { Form } from './Form';
import { RegisterContextProvider } from '@/rimac/context/registerContext';
import { fireEvent, render, renderHook } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { useRegister } from '../hooks/useRegister';
//()=>{ return {error:{}, handleSubmit: vi.fn()}}

const handleSubmitMock = vi.fn();

vi.mock("../hooks/useRegister", ()=>({
    useRegister: vi.fn(()=> ({ error:{}, handleSubmit: handleSubmitMock }))
}));

const mocketUseRegister = vi.mocked(useRegister);

if(typeof window.ResizeObserver === "undefined"){
    class ResizeObserver{
        observe(){}
        unobserve(){}
        disconnect(){}
    }
    window.ResizeObserver = ResizeObserver;
}

const renderWithRotuer = () => {
    return render(<MemoryRouter>
        <RegisterContextProvider>
            <Form />
        </RegisterContextProvider>
    </MemoryRouter>)
}

describe('Form.tsx', () => { 
    
    test('should render the form correctly and match snapshot', () => { 
        const { container } = renderWithRotuer();

        expect(container).toMatchSnapshot();
    });

    test('should mocketUseRegister be call', () => { 
        const { container } = renderWithRotuer();
        const form = container.querySelector("form");
        
        fireEvent.submit(form!)

        const { result } = renderHook(()=> useRegister())

        expect(mocketUseRegister).toHaveBeenCalled();

        expect(handleSubmitMock).toHaveBeenCalled();

        expect(handleSubmitMock).toHaveBeenCalledTimes(1);
        
        expect(result.current.error).toStrictEqual({});
    });
    
});