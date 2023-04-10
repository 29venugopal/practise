import { Outlet } from "react-router-dom";
import { Register } from "../views/register/Register";
import { Mylogin } from "../views/login/MyLogin";
import { Home } from "../views/home/Home";
import { Myselleruploadform } from "../components/forms/Myselleruploadform";
import { MyNavbar1 } from "../components/navbar/MyNavbar1";


export let ProjectRoutes={
    path:'/project',
    element:<> <Outlet/></>,
    children:[
        {
            path:'register',
            element:<Register/>
        },
      {  path:'login',
        element:<Mylogin/>
},
{
    path:'home',
    element:<> <MyNavbar1/><Home/></>
},
{
    path:'form',
    element:<> <MyNavbar1/><Myselleruploadform/></>
}
]
}