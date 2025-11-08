import { createBrowserRouter } from "react-router";
import { Home, Plans } from "../pages";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/plans",
    element: <Plans />,
  }
]);