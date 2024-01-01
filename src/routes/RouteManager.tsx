import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import HomeScreen from "../pages/HomeScreen";
import Loading from "../components/shared/Loading";

const NotFoundScreen = lazy(() => import("../pages/NotFoundScreen"));

const RouteManager = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default RouteManager;
