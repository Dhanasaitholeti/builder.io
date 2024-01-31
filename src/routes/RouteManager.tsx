import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import HomeScreen from "../pages/HomeScreen";
import Loading from "../components/shared/Loading";
import LoginScreen from "../pages/LoginScreen";
import SignupScreen from "../pages/SignupScreen";

const NotFoundScreen = lazy(() => import("../pages/NotFoundScreen"));

const RouteManager = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/singup" element={<SignupScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default RouteManager;
