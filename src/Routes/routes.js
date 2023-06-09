import User from "Pages/User/loadable";
import Profile from "Pages/Profile/loadable";
import NotFound from "Pages/NotFound/loadable";
import MainLayout from "Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Affirmations from "Pages/Affirmations";
import Journal from "Pages/Journal";
import AddEntryButton from "Pages/Journal/AddEntryButton";
import Challenges from "Pages/Challenges";
import NextScreen from "Pages/Challenges/ChallengePopUp";
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
import Identity from "Pages/Affirmations/Identity";
import CreateAffirmation from "Pages/Affirmations/CreateAffirmation";
import Reminder from "Pages/Reminder";
import CreateChallenges from "Pages/Challenges/CreateChallenges";
import BreathingInstructionButton from "Pages/Challenges/BreathingInstructionButton";
import captiveButton from "Pages/Challenges/CaptiveButton";
import ForgivenessButton from "Pages/Challenges/ForgivenessButton";
import InventoryChallenges from "Pages/Challenges/InventoryChallengeButton";
import EndUser from "Pages/User/EndUser";
import Guidelines from "Pages/Guidelines";
import Sponsorship from "Pages/Sponsorship";
import Providers from "Pages/User/Providers";
import ProviderUserProfile from "Pages/User/ProvidersPatient";
import ProviderAccess from "Pages/User/ProviderAccess";
import Support from "Pages/Support";
import ProviderEndUserProfile from "Pages/ProviderEndUserProfile";
import Login from "Layout/AuthLayout/login";
import Home from "Pages/Home";

const routes = [
  {
    path: "/",
    layout: AuthLayout,
    component: Login
  },

  // {
  //   path: "/",
  //   layout: AuthLayout,
  //   component: SignUp,
  //   subRoutes: [
  //     {
  //       path: "/SignUp",
  //       component: SignUp,
  //     },
  //   ],
  // },
  
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
    path: "/create-affirmation",
    layout: MainLayout,
    component: CreateAffirmation
  },
  {
    path: "/breathing-instruction-button",
    layout: MainLayout,
    component: BreathingInstructionButton
  },
  {
    path: "/captive-button",
    layout: MainLayout,
    component: captiveButton
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
    path: "/forgiveness-button",
    layout: MainLayout,
    component: ForgivenessButton
  },
  {
    path: "/inventory-challenge",
    layout: MainLayout,
    component:InventoryChallenges
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
    path: "/create-challenges",
    layout: MainLayout,
    component: CreateChallenges
  },
  {
    path: "/profile",
    layout: MainLayout,
    component: ProfilePage
  },
  {
    path: "/reminder",
    layout: MainLayout,
    component: Reminder
  },
  {
    path: "/home",
    layout: MainLayout,
    component: Home
  },
  {
    path: "/second-header",
    layout: MainLayout,
    component: SecondHeader
  },
  {
    path: "/identity",
    layout: MainLayout,
    component: Identity
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
    path: "/affirmations",
    layout: MainLayout,
    component: Affirmations
  },
  {
    path: "/challenges",
    layout: MainLayout,
    component: Challenges
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
    path: "/next-screen",
    layout: MainLayout,
    component: NextScreen
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