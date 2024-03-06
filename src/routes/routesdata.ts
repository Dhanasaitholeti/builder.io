import { lazy } from "react";

const HomeScreen = lazy(() => import("../pages/HomeScreen"));
const LoginScreen = lazy(() => import("../pages/LoginScreen"));
const SignupScreen = lazy(() => import("../pages/SignupScreen"));
const NotFoundScreen = lazy(() => import("../pages/NotFoundScreen"));

interface IrouteData {
  path: string;
  component: React.FC;
}
export const routesData: IrouteData[] = [
  {
    path: "/",
    component: HomeScreen,
  },
  {
    path: "/login",
    component: LoginScreen,
  },
  {
    path: "/signup",
    component: SignupScreen,
  },
  {
    path: "*",
    component: NotFoundScreen,
  },
];
