import { RouteObject } from "react-router-dom";
import RootLayout from "../shared/layouts/RootLayout/RootLayout";
import HomeLayout from "../shared/layouts/HomeLayout/HomeLayout";
export const Routers: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
    ],
  },
];
