import "./index.css";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks";
import Layout from "./components/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";

const AuthenticationPage = lazy(() =>
    import("./pages/AuthenticationPage/AuthenticationPage")
);
const Home = lazy(() => import("./pages/Home/Home"));
const Reports = lazy(() => import("./pages/Reports/Reports"));

const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <div>Loading...</div>
    ) : (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <PrivateRoute redirectTo="/auth" component={<Home />} />
                    }
                />
                <Route
                    path="auth"
                    element={
                        <RestrictedRoute
                            redirectTo="/"
                            component={<AuthenticationPage />}
                        />
                    }
                />
                <Route
                    path="reports"
                    element={
                        <PrivateRoute
                            redirectTo="/auth"
                            component={<Reports />}
                        />
                    }
                />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
