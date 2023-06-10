import User from "Pages/User/loadable";
import Profile from "Pages/Profile/loadable";
import NotFound from "Pages/NotFound/loadable";
import MainLayout from "Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Journal from "Pages/Journal";
import AddEntryButton from "Pages/Journal/AddEntryButton";
import Counter from "Components/Counter";
import LevelOneChallenge from "Components/LevelOneChallenge";
import Review from "Pages/Review";
import ProfilePage from "Pages/ProfilePage";
import SecondHeader from "Components/Header/SecondHeader";
import { PieChart } from "Pages/PieChart";
import { BarChart } from "Components/Chart/BarChart";
import DatePicker from "Components/DatePicker";
import Date from "Components/DatePicker";
import DateSet from "Components/DatePicker";
import CSV from "Components/CSV";
import EndUser from "Pages/User/EndUser";
import Guidelines from "Pages/Guidelines";
import Sponsorship from "Pages/Sponsorship";
import Providers from "Pages/User/Providers";
import ProviderUserProfile from "Pages/User/ProvidersPatient";
import Wallet from "Pages/Wallet/Wallet";
import ProviderAccess from "Pages/User/ProviderAccess";
import Support from "Pages/Support";
import ProviderEndUserProfile from "Pages/ProviderEndUserProfile";
import Login from "Layout/AuthLayout/login";
import Home from "Pages/Home";
import Dashboard from "Pages/Dashboard/Dashboard";
import Inventory from "Pages/Inventory/Inventory";

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
    path: "/date",
    layout: MainLayout,
    component: DateSet
  },
  {
    path: "/csv",
    layout: MainLayout,
    component: CSV
  },

  {
    path: "/guidelines",
    layout: MainLayout,
    component: Guidelines
  },
  {
    path: "/providers",
    layout: MainLayout,
    component: Providers
  },
  {
    path: "/support",
    layout: MainLayout,
    component: Support
  },
  {
    path: "/provider-patient",
    layout: MainLayout,
    component: ProviderUserProfile
  },
  {
    path: "/provider-access",
    layout: MainLayout,
    component: ProviderAccess
  },
  {
    path: "/sponsorship",
    layout: MainLayout,
    component: Sponsorship
  },



  {
    path: "/",
    layout: MainLayout,
    component: EndUser,
    subRoutes: [
      {
        path: "/end-user",
        component: EndUser,
      },
      {
        path: "/end-user/username",
        component: ProviderEndUserProfile,
      },
    ],

  },


  {
    path: "/profile",
    layout: MainLayout,
    component: ProfilePage
  },
 
 
  {
    path: "/second-header",
    layout: MainLayout,
    component: SecondHeader
  },
  {
    path: "/piechart",
    layout: MainLayout,
    component: PieChart
  },
  {
    path: "/barchart",
    layout: MainLayout,
    component: BarChart
  },

 
  {
    path: "/review",
    layout: MainLayout,
    component: Review
  },
  {
    path: "/level-one-challenge",
    layout: MainLayout,
    component: LevelOneChallenge
  },
  
  {
    path: "/counter",
    layout: MainLayout,
    component: Counter
  },
  
  {
    path: "/journal",
    layout: MainLayout,
    component: Journal
  },
  {
    path: "/add-entry-button",
    layout: MainLayout,
    component: AddEntryButton
  },
  {
    path: "/user",
    layout: MainLayout,
    subRoutes: [
      {
        path: "/",
        component: User,
      },
      {
        path: "/profile",
        component: Profile,
      },
     
    ],
  },
  { path: "*", component: NotFound, layout: MainLayout },
];
export default routes;
