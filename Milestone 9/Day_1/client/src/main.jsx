import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Component/Layout/RootLayout.jsx";
import Home from "./Page/Home/Home.jsx";
import Login from "./Page/Login/Login.jsx";
import Register from "./Page/Register/Register.jsx";
import About from "./Page/About/About.jsx";
import Blog from "./Page/Blog/Blog.jsx";
import Documentation from "./Page/Documentation/Documentation.jsx";
import CarDetails from "./Page/CarDetails/CarDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home, loader: () => fetch("/data.json") },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/about", Component: About },
      { path: "/blog", Component: Blog },
      {
        path: "/cardDetails/:id",
        Component: CarDetails,
        loader: () => fetch("/data.json"),
      },
    ],
  },
  {
    path: "/documentation",
    Component: Documentation,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
