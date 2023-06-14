import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import Main from "./Components/Layout/Main";
import OrdersReview from "./Components/Orders/OrdersReview";
import Grandpa from "./Components/Grandpa/Grandpa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch('tshirts.json')
        
      },
      {
        path: "review",
        element: <OrdersReview></OrdersReview>,
      },
      {
        path: "/grandpa",
        element: <Grandpa></Grandpa>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
