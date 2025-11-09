import { render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Stepper } from './Stepper';
import { MemoryRouter } from 'react-router';
import { RegisterContextProvider } from '../context/registerContext';

vi.mock("./Step", ()=> ({
    Step: () => <div>step</div>
}));

const renderWithLocation = () => {
    return render(<MemoryRouter>
                        <RegisterContextProvider>
                            <Stepper />
                        </RegisterContextProvider>
                    </MemoryRouter>)
}

describe('Stepper.tsx', ()=>{
    test('should take snapshot', () => { 
        const { container } =  renderWithLocation();
        expect(container).toMatchSnapshot();
    });
})