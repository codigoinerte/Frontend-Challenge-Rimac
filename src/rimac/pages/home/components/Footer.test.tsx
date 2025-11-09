import { describe, expect, test } from "vitest"
import { Footer } from "./Footer";
import { render } from "@testing-library/react";

const resizeWindow = (width: number, height: number) => {
  // Hacemos que la propiedad innerWidth sea escribible
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width });
  Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: height });
  
  // Disparamos el evento 'resize' para que los listeners reaccionen
  window.dispatchEvent(new Event('resize'));
};

describe('Footer.tsx', () => { 
    
    test('should image brand to be Horizontal on mobile', () => { 
        resizeWindow(500, 500);

        const { container } = render(<Footer />);

        const img = container.querySelector("img");
        expect(img?.src.includes("horizontal")).toBeTruthy();
    });

});