import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { GoBack } from "./GoBack";
import { MemoryRouter } from "react-router";

const mockedNavigate = vi.fn();

vi.mock('react-router', async () => {    
    const actual = await vi.importActual('react-router');
    return {
        ...actual,
        useNavigate: () => mockedNavigate,
    };
});

const renderWithRouter = (initialEntries: string[] = ['/'], className:string = "") => {
    return render(<MemoryRouter initialEntries={initialEntries}>
                    <GoBack className={className}/>
                </MemoryRouter>)
}


describe('GoBack', () => { 

    beforeEach(()=>{
        vi.clearAllMocks();
    })

    test('should render component with default values', () => { 
        const { container } = renderWithRouter(["/"]);
        expect(container).toMatchSnapshot();
    });
    test('should component render with custom className', () => { 
        const { container } = renderWithRouter(["/"], "custom-class-name");
        expect(container.querySelector(".custom-class-name")).toBeDefined();
    });
    test('should component redirect to home', () => { 
        renderWithRouter(["/planes"]);

        const input = screen.getByRole("button");

        fireEvent.click(input)

        expect(mockedNavigate).toHaveBeenCalledOnce();
        expect(mockedNavigate).toHaveBeenLastCalledWith("/");
    });
    test('should component redirect to planes', () => { 
        renderWithRouter(["/planes/resumen"]);

        const input = screen.getByRole("button");

        fireEvent.click(input)

        expect(mockedNavigate).toHaveBeenCalledOnce();
        expect(mockedNavigate).toHaveBeenLastCalledWith("/planes");
    });
});