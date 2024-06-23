import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Layout from "./components/Layout/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>REFRESHING USER...</div>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegisterPage />} redirectTo="/" />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactPage />} redirectTo="/login" />}
          />
        </Routes>
      </Suspense>
      <Toaster />
    </Layout>

  );
}

export default App;
