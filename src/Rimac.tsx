import { Home } from "./rimac/pages"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export const Rimac = () => {

  return <RouterProvider router={router} />
}
