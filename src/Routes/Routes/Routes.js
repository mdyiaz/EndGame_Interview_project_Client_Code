import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Media_2 from "../../Pages/Home/Media_2/Media_2";
import Message from "../../Pages/Home/Message/Message";
import WritingPost_1 from "../../Pages/Home/WritingPost_1/WritingPost_1";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MyProfile from "../../Dashboard/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import MediaDetails from "../../Pages/Home/Media_2/MediaDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/writingpost1',
                element:<WritingPost_1></WritingPost_1>
            },
            {
                path:'/media2', 
                element:<Media_2></Media_2>
            },
            {
                path:'/about',
                element:<PrivateRoute><About></About></PrivateRoute>
            },
            {
                path:'/message',
                element:<PrivateRoute><Message></Message></PrivateRoute>
            },
            {
                path:'/mediadetails/:id',
                loader: ({ params }) => fetch(`https://endgame-interview-project-server.vercel.app/post/${params.id}`),
                element:<PrivateRoute><MediaDetails></MediaDetails></PrivateRoute>
            },
            
        ]
    },
    {
        path:'/myprofile',
        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
    }

])

export default router;