import NotFound from "Pages/NotFound/loadable";
import MainLayout from "Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import { BarChart } from "Components/Chart/BarChart";
import Wallet from "Pages/Wallet/Wallet";
import Support from "Pages/Support";
import Login from "Layout/AuthLayout/login";
import Home from "Pages/Home";
import Dashboard from "Pages/Dashboard/Dashboard";
import Inventory from "Pages/Inventory/Inventory";
import Order from "Pages/Order/Order";
import Setting from "Pages/Setting/setting";

const routes = [
  {
    path: "/",
    layout: AuthLayout,
    component: Login
  },
  {
    path: "/home",
    layout: MainLayout,
    component: Home
  },
  {
    path: "/dashboard",
    layout: MainLayout,
    component: Dashboard
  },
  {
    path: "/wallet",
    layout: MainLayout,
    component: Wallet
  },
  {
    path: "/inventory",
    layout: MainLayout,
    component: Inventory
  },
  {
    path: "/order",
    layout: MainLayout,
    component: Order
  },

  {
    path: "/setting",
    layout: MainLayout,
    component: Setting
  },
 
  
  {
    path: "/support",
    layout: MainLayout,
    component: Support
  },

  {
    path: "/barchart",
    layout: MainLayout,
    component: BarChart
  },


  { path: "*", component: NotFound, layout: MainLayout },
];
export default routes;
