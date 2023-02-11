import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Contact from "../../Pages/Contact/Contact";
import Devider from "../../Pages/Devider/Devider";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Projects from "../../Pages/Projects/Projects";
import Resume from "../../Pages/Resume/Resume";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Devider></Devider>,
                children:[
                    {
                        path:'/',
                        element:<Home></Home>
                    },
                    {
                        path:'/resume',
                        element:<Resume></Resume>
                    },
                    {
                        path:'/projects',
                        element:<Projects></Projects>
                    },
                    {
                        path:'/contact',
                        element:<Contact></Contact>
                    }
                ]
            }
        ]
    }
])

export default router;