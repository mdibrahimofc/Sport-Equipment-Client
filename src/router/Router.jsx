import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import PrivateRoute from "../components/PrivateRoute";
import AddEquipments from "../pages/AddEquipments";
import Error from "../pages/Error";
import AllEquipments from "../pages/AllEquipments";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "add-equipments",
                element:<PrivateRoute><AddEquipments/></PrivateRoute>
            },
            {
                path: "all-sports-equipments",
                element: <AllEquipments/>,
                loader: ()=> fetch("http://localhost:5000/all-equipments")
            }
        ]
    }
])