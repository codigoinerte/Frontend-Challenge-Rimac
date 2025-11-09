import { createBrowserRouter } from "react-router";
import { Home, Plans, Resume } from "../pages";
import { PlanesLayout } from "../layouts/PlanesLayout";
import { ProtectedRouter } from "./ProtectedRouter";

export const appRouter = createBrowserRouter([
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