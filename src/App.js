import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Components/contact";
import Error from "./Components/Error";
import RestroMenu from "./Components/RestroMenu";
import Shimmer from "./Components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import Cart from "./Components/Cart";
// import Grocery from "./Components/Grocery"
// import About from "./Components/About";



const AppLayout = () => {
    const [userName, setUserName] = useState()

    //authentication
    useEffect(() => {
        //make an api call
        const data = {
            name: "pooja"
        }
        setUserName(data.name)
    })
    return (
        <Provider store={appStore }>
            <userContext.Provider value={{ loggedInUser: userName }}>
                <div className="main">
                    <Header />
                    <Outlet />
                </div>
            </userContext.Provider>
        </Provider>
    )

}



const Grocery = lazy(() => import("./Components/Grocery"));

const About = lazy(() => import("./Components/About"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },

            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restraunts/:resId",
                element: <RestroMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
            }
        ],
        errorElement: <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
