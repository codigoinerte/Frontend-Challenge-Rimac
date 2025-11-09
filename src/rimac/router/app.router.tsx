import { createBrowserRouter, createHashRouter } from "react-router";
import { Home, Plans, Resume } from "../pages";
import { ProtectedRouter } from "./ProtectedRouter";
import { lazy } from "react";

const VITE_HASH_ROUTER = import.meta.env.VITE_HASH_ROUTER; 

const createRouter = VITE_HASH_ROUTER == "true" ? createHashRouter : createBrowserRouter;

const PlanesLayout = lazy(()=> import('../layouts/PlanesLayout'))

export const appRouter = createRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/planes/",
    element: <ProtectedRouter><PlanesLayout/></ProtectedRouter>,
    children: [
      {
        index: true,        
        element: <Plans />
      },{
        path: "resumen",
        element: <Resume />
      }
    ]
  }
]);