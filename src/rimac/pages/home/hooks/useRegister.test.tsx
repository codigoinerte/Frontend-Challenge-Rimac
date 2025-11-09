
import { describe, test, expect, vi, beforeEach, type Mock } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useRegister } from "./useRegister";
import { RegisterContext } from "@/rimac/context/registerContext";
import type { User } from "@/rimac/context/registerContext";
import React, { type ReactNode } from "react";

// Mock de dependencias externas
const navigate = vi.fn();
vi.mock("react-router", () => ({
  useNavigate: () => navigate,
}));

const setUser = vi.fn();
vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
  },
}));

// Mock de la respuesta de la API
const mockUserResponse = {
  name: "John",
  lastName: "Doe",
  birthDay: new Date("1990-01-01"),
};

// Componente Wrapper para proveer el Contexto al hook
const Wrapper = ({ children }: { children: ReactNode }) => (
  <RegisterContext.Provider value={{ user: {} as User, setUser, setPlanToUser: () =>{} }}>
    {children}
  </RegisterContext.Provider>
);

describe("useRegister.ts", () => {

  beforeEach(() => {
    // Limpiamos los mocks antes de cada test
    vi.clearAllMocks();
    // Mock global de fetch
    globalThis.fetch = vi.fn();
  });

  test("should return initial error state as null", () => {
    const { result } = renderHook(() => useRegister(), { wrapper: Wrapper });

    expect(result.current.error.document).toBe(null);
    expect(result.current.error.phone).toBe(null);
    expect(result.current.error.terms).toBe(null);
    expect(result.current.error.politics).toBe(null);
  });

  test("should update error state and not submit if document is invalid", async () => {
    const { result } = renderHook(() => useRegister(), { wrapper: Wrapper });

    const form = document.createElement("form");
    form.innerHTML = `
      <input name="documentType" value="dni" />
      <input name="document" value="123" /> 
      <input name="phone" value="987654321" />
      <input name="terms" type="checkbox" checked value="on" />
      <input name="politics" type="checkbox" checked value="on" />
    `;

    const event = new SubmitEvent("submit", { cancelable: true });
    Object.defineProperty(event, 'target', { value: form, enumerable: true });

    await act(async () => {
      await result.current.handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
    });

    expect(result.current.error.document).toBe(false);
    expect(setUser).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
  });

  test("should call setUser and navigate on successful submission", async () => {
    // Mock de fetch para una respuesta exitosa
    (globalThis.fetch as Mock).mockResolvedValue({
        ok: true,
        json: async () => mockUserResponse,
    });

    const { result } = renderHook(() => useRegister(), { wrapper: Wrapper });

    const form = document.createElement("form");
    form.innerHTML = `
      <input name="documentType" value="dni" />
      <input name="document" value="70035252" />
      <input name="phone" value="987654321" />
      <input name="terms" type="checkbox" checked value="on" />
      <input name="politics" type="checkbox" checked value="on" />
    `;
    
    const event = new SubmitEvent("submit", { cancelable: true });
    Object.defineProperty(event, 'target', { value: form, enumerable: true });

    await act(async () => {
      await result.current.handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
    });

    expect(result.current.error.document).toBe(true);
    expect(result.current.error.phone).toBe(true);

    expect(setUser).toHaveBeenCalled();
    expect(setUser).toHaveBeenCalledWith(expect.objectContaining({
        name: mockUserResponse.name,
        lastName: mockUserResponse.lastName,
        document: "70035252",
    }));

    expect(navigate).toHaveBeenCalledWith('/planes');
  });

});
