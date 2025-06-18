import React from 'react';
import ReactDOM from "react-dom/client"
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import { createBrowserRouter, RouterProvider ,Outlet} from 'react-router-dom';
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
// import Grocery from './Components/Grocery';
import { lazy,Suspense } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './Components/Cart';

const Grocery=lazy(()=>import("./Components/Grocery"));

const AppLayout = () => {
    
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </Provider>
    );
};

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
           
        ],
        errorElement:<Error/>
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);