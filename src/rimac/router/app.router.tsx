import { createBrowserRouter } from "react-router";
import { Home } from "../pages";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);