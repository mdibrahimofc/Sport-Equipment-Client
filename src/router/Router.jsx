import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import PrivateRoute from "../components/PrivateRoute";
import AddEquipments from "../pages/AddEquipments";
import Error from "../pages/Error";
import AllEquipments from "../pages/AllEquipments";
import MyEquipments from "../pages/MyEquipments";
import UpdateEquipments from "../pages/UpdateEquipments";

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
                loader: ()=> fetch("https://equi-sports-server-chi.vercel.app/all-equipments")
            },
            {
                path: "my-equipments-list",
                element: <PrivateRoute><MyEquipments/></PrivateRoute>
            },
            {
                path: "update-equipments/:id",
                element: <PrivateRoute><UpdateEquipments/></PrivateRoute>,
                loader: () => fetch("https://equi-sports-server-chi.vercel.app/all-equipments")
            }
        ]
    }
])