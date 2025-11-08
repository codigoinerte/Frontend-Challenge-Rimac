import { createBrowserRouter } from "react-router";
import { Home, Plans, Resume } from "../pages";
import { PlanesLayout } from "../layouts/PlanesLayout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/planes/",
    element: <PlanesLayout/>,
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