
import { useRoutes } from "react-router-dom";
import { NotesRoutes } from "./NotesRoutes";
import { ProjectRoutes } from "./ProjectRoutes";


export default function Allroutes(){
    return useRoutes([NotesRoutes,ProjectRoutes])
}