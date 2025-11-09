import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, test, vi } from 'vitest';
import { StepperMobile } from './StepperMobile';

vi.mock("@/components/ui/progress", ()=>({
    Progress: ({value}: {value:number})=> <div data-testid="progress">{value}</div>
}))

const renderWithRouter = (initialEntries: string[] = ['/']) => {
    return render(<MemoryRouter initialEntries={initialEntries}>
        <StepperMobile />
    </MemoryRouter>)
}

describe('StepperMobile.tsx', () => { 
    
    test('should take snapshoot', () => { 
        const {container} = renderWithRouter();
        expect(container).toMatchSnapshot();
    });

    test('should progress to be 100% on step 2', () => { 
        renderWithRouter(["/planes/resumen"]);
        const progress = screen.getByTestId("progress");

        expect(progress.innerHTML).toBe("100");
    });
    test('should progress to be 1% on step 1', () => { 
        renderWithRouter(["/planes"]);
        const progress = screen.getByTestId("progress");

        expect(progress.innerHTML).toBe("1");
    });
    
});