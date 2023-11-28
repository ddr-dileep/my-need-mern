import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/auth/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
