import { RouterProvider } from "react-router/dom";
import { RegisterContextProvider } from "./rimac/context/registerContext";
import { appRouter } from "./rimac/router/app.router";

export const Rimac = () => {

  return  <RegisterContextProvider>
            <RouterProvider router={appRouter} />
          </RegisterContextProvider>
}
