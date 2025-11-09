import { describe, expect, test } from "vitest"
import { Step } from "./Step";
import { render, screen } from "@testing-library/react";
import { RegisterContextProvider } from "../context/registerContext";
import { MemoryRouter } from "react-router";

const renderWithContext = (children:React.ReactElement) => {
    return render (
        <MemoryRouter>
            <RegisterContextProvider>
                {children}
            </RegisterContextProvider>
        </MemoryRouter>)
}

describe('Step.tsx', () => { 
 
    test('should render screenshot', () => { 

        const { container } = renderWithContext(<Step isActive={false} label="Planes y cobertura" number={1} />)

        expect(container).toMatchSnapshot();
    });

    test('should button if is disabled', () => { 

        const { container} = renderWithContext(<Step isActive={false} label="Planes y cobertura" number={1} isDisabled={true}/>)

        const button = container.querySelector("button");

        expect(button).toBeDefined();
    });

    test('should componente render with props', () => { 

        const label = "Planes y cobertura";
        const number = 1;
        renderWithContext(<Step isActive={true} label={label} number={number}/>)

        const el = screen.getByText(label);
        const span = el.querySelector("span");
        
        expect(el).toBeDefined();
        expect(span?.classList.contains("bg-[#4F4FFF]")).toBeTruthy();
        expect(span?.innerHTML).toBe(number.toString());
    });

});