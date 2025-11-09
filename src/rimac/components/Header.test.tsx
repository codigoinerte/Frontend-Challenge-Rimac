import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Header } from "./Header";
import { MemoryRouter } from "react-router";

const renderWithRouter = () => {
    return render(<MemoryRouter>
        <Header />
    </MemoryRouter>)
}

describe('Header.tsx', () => { 
    test('should take an snapshoot', () => {         
        const { container } = renderWithRouter()
        expect(container).toMatchSnapshot();
    });
    test('should Brand have alt and title', () => { 
        renderWithRouter();
        
        const img = screen.getByRole("img");

        expect(img.title).toBe("Rimac");
        expect(img.getAttribute("alt")).toBe("Rimac");
    });
    test('should Link had a phone', () => { 
        renderWithRouter();
        
        const link = screen.getByText("(01) 411 6001");

        expect(link).toBeDefined();
        expect(link.getAttribute("href")).toBe("tel:014116001");
        
    });
});