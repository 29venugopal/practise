import { Outlet } from "react-router-dom";
import { MystyledComponents } from "../notes/css/styled-components/MystyledComponents";
import { UseStateHook } from "../notes/Hookes/UseSate/UseStateHook";
import { A_tsx } from "../notes/advance-tsx/A_tsx";
import { MyFragments } from "../notes/fragments/Myfragments";
import { Props } from "../notes/Props/Props";
import { Rules } from "../notes/Rules/Rules";
import { Register } from "../views/register/Register";
import { Mylogin } from "../views/login/MyLogin";

export let NotesRoutes={
path:'/notes',
element:<><h1>hello I am VenuGopal</h1> <Outlet/></>,

children:[{
    path:'css',
    element:<>
    <MystyledComponents/>
    </>
},
{
    path:'hookes',
    element:<>
    <UseStateHook/>
    </>
},

{
    path:'advance',
    element:<A_tsx/>
},
 {
    path:'fragments',
    element:<MyFragments/>
 },
 {
    path:'props',
    element:<Props/>
 },
 {
    path:'rules',
    element:<Rules/>
 },
 {
    path:'project',
    element:<Register/>
 }
]
}