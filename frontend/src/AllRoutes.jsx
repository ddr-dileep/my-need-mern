import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/auth/Register/Register";
import Login from "./pages/auth/Login/Login";

 const AllRoutes = () => {
   return (
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="*" element={ <Navigate to="/" />} />
     </Routes>
   );
 };

export default AllRoutes;